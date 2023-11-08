import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const UpdatedAssignment = () => {


  const [Assign, setAssign] = useState([]);

  

  useEffect(() => {
    fetch("https://online-study-group-server.vercel.app/assignments")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAssign(data);
      });
  }, []);
  // console.log(Assign);
  // search function

  return (
    <div>
        <h1 className="text-center text-3xl font-extrabold text-cyan-800 mb-5 mt-5">
        All Assign
      </h1>
 
    
 
  <div>

  </div>
 
    <div className="overflow-x-auto mt-5 mb-5">
    
     
      <table className="table table-compact w-full">
        <thead className="text-center">
          <tr>
            <th></th>
            <th>creator Name</th>
            <th>title</th>
            <th>difficulty</th>
            <th>Marks</th>
           
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {Assign.map((Ass, i) => (
                      <tr key={Ass._id}>
                      <th>{i}</th> 
                      <td className="font-semibold text-center">{Ass.creatorName}</td> 
                      <td className="font-semibold text-center">{Ass.title}</td> 
                      <td className="font-semibold text-center">{Ass.difficulty}</td> 
                      <td className="font-semibold text-center">${Ass.Marks}</td> 
                     
                      <td className="text-center"><Link to={`/home/${Ass._id}`}><button className="btn btn-outline">View Details</button></Link></td>
                    </tr>
          ))}
 
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UpdatedAssignment;
