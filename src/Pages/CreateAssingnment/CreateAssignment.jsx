import { useContext } from "react";
import { useForm } from "react-hook-form";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";



const CreateAssignment = () => {

  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const price = Number(data.price);
    data.price = price
    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Toys Added',
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
                  <input type="url" placeholder="Photo URL"  {...register("photoUrl", { required: true })} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">title</span>
                  </label>
                  <input type="text" placeholder="title"  {...register("title", { required: true })} className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">creator Name</span>
                  </label>
                  <input type="text" placeholder="creator Name" defaultValue={user?.displayName} readOnly {...register("creatorName", { required: true })} className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">creator Email</span>
                  </label>
                  <input type="text" placeholder="creator Email" defaultValue={user?.email} readOnly  {...register("creatorEmail", { required: true })} className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">assignment difficulty level</span>
                  </label>
                  <select className="input input-bordered" {...register("difficulty")}>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                  </select>

                </div>



                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea {...register("description", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  "></textarea>

                </div>
                <div className="form-control mt-5 w-48 m-auto">
                  <button className="btn btn-success">Take
                    assignment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
