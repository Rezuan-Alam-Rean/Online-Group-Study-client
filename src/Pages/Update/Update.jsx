
import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

  const singleToy = useLoaderData()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/Assignments";
  const { _id, photoUrl, title, Marks,  creatorName, creatorEmail, difficulty, description } = singleToy;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    fetch(`https://online-study-group-server.vercel.app/assignment/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          navigate(from, { replace: true })
          Swal.fire({
            title: 'success!',
            text: 'Update Succesfull',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }

      });

    console.log(data);
  }
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content ">

          <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} >
                {errors.exampleRequired && <span>This field is required</span>}
                <h1 className="text-center font-extrabold mt-5 mb-5 text-3xl">Assignment creation</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="url" placeholder="Photo URL" defaultValue={photoUrl} {...register("photoUrl", { required: true })} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">title</span>
                  </label>
                  <input type="text" placeholder="title" defaultValue={title}  {...register("title", { required: true })} className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">creator Name</span>
                  </label>
                  <input type="text" placeholder="creator Name" defaultValue={creatorName} {...register("creatorName", { required: true })} readOnly className="input input-bordered" />
                  

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">creator Email</span>
                  </label>
                  <input type="text" placeholder="creator Email"  defaultValue={creatorEmail} {...register("creatorEmail", { required: true })} className="input input-bordered" />
                  

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">assignment difficulty level</span>
                  </label>
                  <select className="input input-bordered" defaultValue={difficulty} {...register("difficulty")}>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                  </select>

                </div>



                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                 <textarea {...register("description", { required: true })} defaultValue={description}  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  "></textarea>
                  <input type="text" defaultValue={_id} className="hidden" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Marks</span>
                  </label>
                  <input type="text" placeholder="Marks" defaultValue={Marks}  {...register("Marks", { required: true })} className="input input-bordered" />

                </div>
                <div className="form-control mt-5 w-48 m-auto">
                  <button className="btn btn-success">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;



