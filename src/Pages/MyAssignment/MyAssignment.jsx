import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";


import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyAssignment = () => {

  const [Assign, setAssign] = useState([]);
  const { user } = useContext(AuthContext);
  
 
  useEffect(() => {
    fetch(`http://localhost:5000/myAssignments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAssign(data);
        // console.log(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure ,you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "success!",
              text: "Delete Succesfull",
              icon: "success",
              confirmButtonText: "Cool",
            });
            const remaining = Assign.filter((Ass) => Ass._id !== id);
            setAssign(remaining);
          }
        });
    }
  };
  console.log(Assign);
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center text-cyan-800 mt-5 mb-5">
        Assignments You Added
      </h1>

      <div className="mb-10">
        
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Index</th>
              <th>Ass Info</th>
              <th>creator Name</th>
              <th>creator Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Assign.map((Ass, i) => (
        
              
              <tr className="text-center" key={Ass._id}>
              <th>{i+1}</th> 
     
      <td  >
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={Ass.photoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
           
            <div className="font-bold">Name: {Ass.title}</div>
            <div className="text-sm font-bold opacity-50">difficulty: {Ass.difficulty}</div>
            <div className="text-sm font-bold opacity-50">Marks:{Ass.Marks}</div>
            
          </div>
        </div>
      </td>
      <td>
        {Ass.creatorName}
        <br/>
        <span className="badge badge-ghost badge-sm">creatorName</span>
      </td>
      <td>
        {Ass.creatorEmail}
        <br/>
        <span className="badge badge-ghost badge-sm">creatorEmail</span>
      </td>
      
      <th>
       <Link to={`/update/${Ass._id}`}> <button  className="btn  btn-sm">Update</button></Link>
      </th>
      <th>
       <button onClick={()=>handleDelete(Ass._id)}  className="btn  btn-sm">Delete</button>
      </th>
    </tr>



            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignment;

