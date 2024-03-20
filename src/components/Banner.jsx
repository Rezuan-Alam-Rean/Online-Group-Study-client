import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">

      <div className="flex flex-col w-full mt-20 lg:flex-row items-center justify-between " >
        <div

          className="md:w-1/2 px-5 ">
          <h1 className=" md:text-6xl text-2xl  font-bold text-orange-400 mb-5  ">
            Welcome To Online Group Study
          </h1>
          <p className="mt-3   text-base  ">
            Students are spending countless hours online for classes this year, pushing educators to offer more engaging and worthwhile virtual content.
          </p>

          <Link to="/login">

          <button className="btn btn-outline text-orange-400 mt-5">Sign IN </button>
          </Link>

        </div>

        <div>

          <img
            className=" w-full "
            src="https://media.istockphoto.com/id/1347747136/vector/group-of-students-studying.jpg?s=612x612&w=0&k=20&c=t8UwXDXTCu2O-2mOLE8_aQ7KTXxjuUk_WgiR0cS6pSk="
            alt=""
          />
        </div>
      </div>
    </div>

  );
};

export default Banner;