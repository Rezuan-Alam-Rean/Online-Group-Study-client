
const Subject = () => {
    return (
        <div className="mt-10 mb-10  ">
      <h1 className="text-center  text-5xl font-extrabold mt-10 mb-10">
         Notes
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        data-aos="fade-left"
        data-aos-duration="1000"
        >
          <figure>
            <img className="h-64 w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsgGiRDNr8icnT2_e0oy8EmCFcfrWaq7d_g&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Physics</h2>
              <p>Physics is the natural science of matter, involving the study of matter, its fundamental constituents, its motion and behavior through space and time .
</p>
            </div>

            <button className="btn btn-primary ">View Notes</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <figure>
            <img className="h-64 w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU9SUVat0Kl6Xt9pM_dIaLx4TEQezftvu0g&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">Chemistry</h2>
              <p>Chemistry is a branch of natural science that deals principally with the properties of substances, the changes they undergo.</p>
            </div>

            <button className="btn btn-primary ">View Notes</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <figure>
            <img className="h-64 w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVyyah8px-U3GuuUTYvYkVEWFPA69I0rX-w&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">software engineering</h2>
              <p>Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications.</p>
            </div>

            <button className="btn btn-primary ">View Notes</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Subject;