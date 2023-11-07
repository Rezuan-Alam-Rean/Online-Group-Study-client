
const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-800 to-white-600 py-16 px-4 mt-10 mb-10">
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between " >
            <div
             
             className="lg:w-1/2 overflow-x-hidden">
              <h1 className="text-4xl  font-extrabold text-white  md:text-6xl">
                Welcome to Online group study
              </h1>
              <p className="mt-3   text-xl text-white ">
              Students are spending countless hours online for classes this year, pushing educators to offer more engaging and worthwhile virtual content.
              </p>
            </div>
            <img
              className="w-full  max-w-lg mt-10 lg:mt-0"
              src="https://content.wolfram.com/sites/39/2020/11/Online-Enrichment-with-Free-Daily-Study-Groups.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;