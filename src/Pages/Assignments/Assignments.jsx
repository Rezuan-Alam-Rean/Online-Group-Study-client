import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Assignments = () => {


  const [Assign, setAssign] = useState([]);



  useEffect(() => {
    fetch("http://localhost:5000/assignments")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAssign(data);
      });
  }, []);
  // console.log(Assign);
  // search function

  return (

    <div className="grid lg:grid-cols-3 sm:grid-cols-1">


    {Assign.map((Ass, i) => (
      <div key={Ass._id}>
        <div>{i}</div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
          <img src={Ass.photoUrl} className="w-full h-64 rounded-lg shadow-2xl" />
          
          </figure>
          <div className="card-body">
            <h2 className="card-title">{Ass.creatorName}</h2>
            <h2 className="card-title">{Ass.title}</h2>
            <h2 className="card-title">{Ass.difficulty}</h2>
            <h2 className="card-title">Marks:{Ass.Marks}</h2>
            
            <div className="card-actions justify-end">
            <Link to={`/home/${Ass._id}`}><button className="btn btn-outline">View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  
  </div>
    
  );
};

export default Assignments;







{/* <div>
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
              <th>Seller</th>
              <th>ass Name</th>
              <th>Sub difficulty</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {Assign.map((ass, i) => (
              <tr key={ass._id}>
                <th>{i}</th>
                <td className="font-semibold text-center">{ass.sellerName}</td>
                <td className="font-semibold text-center">{ass.assName}</td>
                <td className="font-semibold text-center">{ass.difficulty}</td>
                <td className="font-semibold text-center">${ass.price}</td>
                <td className="font-semibold text-center">{ass.quantity}</td>
                <td className="text-center"><Link to={`/home/${ass._id}`}><button className="btn btn-outline">View Details</button></Link></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div> */}



