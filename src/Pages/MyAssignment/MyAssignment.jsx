import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";


import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyAssignment = () => {

  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  
 
  useEffect(() => {
    fetch(`http://localhost:5000/myAssignments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
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
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };
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
              <th>Toy Info</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, i) => (
        

              <tr className="text-center" key={toy._id}>
              <th>{i+1}</th> 
     
      <td  >
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toy.photoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Name: {toy.toyName}</div>
            <div className="text-sm font-bold opacity-50">Category: {toy.category}</div>
            <div className="text-sm font-bold opacity-50">Price:${toy.price}</div>
            <div className="text-sm font-bold opacity-50">Quantity: {toy.quantity}</div>
          </div>
        </div>
      </td>
      <td>
        {toy.sellerName}
        <br/>
        <span className="badge badge-ghost badge-sm">Seller</span>
      </td>
      <td>
        {toy.sellerEmail}
        <br/>
        <span className="badge badge-ghost badge-sm">Seller</span>
      </td>
      
      <th>
       <Link to={`/update/${toy._id}`}> <button  className="btn  btn-sm">Update</button></Link>
      </th>
      <th>
       <button onClick={()=>handleDelete(toy._id)}  className="btn  btn-sm">Delete</button>
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

