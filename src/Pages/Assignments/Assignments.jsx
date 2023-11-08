import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Assignments = () => {


  const [toys, setToys] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/assignments")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);
  // console.log(toys);
  // search function

  return (
    <div>
        <h1 className="text-center text-3xl font-extrabold text-cyan-800 mb-5 mt-5">
        All Toys
      </h1>
 
    
 
  <div>

  </div>
 
    <div className="overflow-x-auto mt-5 mb-5">
    
     
      <table className="table table-compact w-full">
        <thead className="text-center">
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, i) => (
                      <tr key={toy._id}>
                      <th>{i}</th> 
                      <td className="font-semibold text-center">{toy.sellerName}</td> 
                      <td className="font-semibold text-center">{toy.toyName}</td> 
                      <td className="font-semibold text-center">{toy.category}</td> 
                      <td className="font-semibold text-center">${toy.price}</td> 
                      <td className="font-semibold text-center">{toy.quantity}</td> 
                      <td className="text-center"><Link to={`/home/${toy._id}`}><button className="btn btn-outline">View Details</button></Link></td>
                    </tr>
          ))}
 
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Assignments;
