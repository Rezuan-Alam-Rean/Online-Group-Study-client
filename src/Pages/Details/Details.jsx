


import { useLoaderData } from "react-router-dom";


const Details = () => {

    const toy = useLoaderData()
    const {photoUrl,toyName,description,price,quantity,sellerName,sellerEmail,category

    }=toy || {}
    console.log(toy);
    return (
        <div className="bg-base-100">
         <h1 className="text-5xl font-bold text-center mt-10 text-cyan-800 ">Toy Details</h1>
         <div className="hero min-h-screen ">
           
           <div className="hero-content flex-col lg:flex-row">
             <img src={photoUrl} className="max-w-xl rounded-lg shadow-2xl" />
             <div>
               <h1 className="text-5xl font-bold">Toy Name: {toyName}</h1>
               <h1 className=" font-bold mt-3">Category: {category}</h1>
               <p className="py-6">{description}</p>
<div className='mb-3'>   
   <ul className="menu menu-horizontal bg-base-300 rounded-box">
  <li> <p className='font-semibold' >Seller Name: {sellerName}</p></li>
  <li> <p className='font-semibold' >Seller Email: {sellerEmail}</p></li>

</ul>
</div>
   <ul className="menu menu-horizontal bg-base-300 rounded-box">
   <li><p className='font-semibold' > Price:${price}</p></li>
  <li>  <p className='font-semibold'>Quantity:{quantity}</p></li>
</ul>

             </div>
           </div>
         </div>
        </div>
   
    );
};

export default Details;