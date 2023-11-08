import { useContext, useEffect, useState } from "react";




import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SubmittedAssignments = () => {

  const [Assign, setAssign] = useState([]);
  const { user } = useContext(AuthContext);
  
 
  useEffect(() => {
    fetch(`http://localhost:5000/assignments`)
      .then((res) => res.json())
      .then((data) => {
        setAssign(data);
        // console.log(data);
      });
  }, [user]);


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
              <th>give mark</th>
              
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
            <div className="font-bold">title: {Ass.title}</div>
            <div className="text-sm font-bold opacity-50">difficulty: {Ass.difficulty}</div>
            <div className="text-sm font-bold opacity-50">Marks{Ass.Marks}</div>
           
          </div>
        </div>
      </td>
      <td>
        {Ass.creatorName}
        <br/>
        <span className="badge badge-ghost badge-sm">creator Name</span>
      </td>
      <td>
        {Ass.creatorEmail}
        <br/>
        <span className="badge badge-ghost badge-sm">creator Email</span>
      </td>
      
      <th>
       <Link to={`/GiveMarks/${Ass._id}`}> <button  className="btn  btn-sm">Give Marks</button></Link>
      </th>
     
    </tr>



            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedAssignments;

