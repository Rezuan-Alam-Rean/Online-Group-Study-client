
const Subject = () => {
    return (
        <div className="mt-10 mb-10  ">
      <h1 className="text-center  text-5xl font-extrabold mt-10 mb-10">
        Subjects
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        data-aos="fade-left"
        data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=1060&t=st=1684590060~exp=1684590660~hmac=10bb9ce2efba4753482ddf08a1692a907dddc48beecf7a69d86f931ae422eeb8"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Train Set</h2>
              <p>Price: $450</p>
            </div>

            <button className="btn btn-primary ">Buy Now</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/so-little-so-big-boy-child-looks-brave-driving-his-toy-outlander_1304-2723.jpg?w=996&t=st=1684356770~exp=1684357370~hmac=2c7e8e8b211ae7155ec8a28acd7ff4de0958517a9f374eaa779f0e92bf4e466a"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Outlander</h2>
              <p>Price: $750</p>
            </div>

            <button className="btn btn-primary ">Buy Now</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/little-baby-girl-playing-car_155003-4389.jpg?w=996&t=st=1684356866~exp=1684357466~hmac=59edb365d7e8056c69b620443abe0f615e67686b233e53078ae6794124bec04d"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Volkswagen Beetle</h2>
              <p>Price: $650</p>
            </div>

            <button className="btn btn-primary ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Subject;