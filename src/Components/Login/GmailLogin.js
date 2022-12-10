import { React, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../../Assets/bgs/login.png";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const GmailLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      toast.success("User Login Successfully", { id: "1" });
      navigate("/home");
    }
    if (error) {
      toast.error(error.message, { id: "2" });
    }
    
  }, [user, navigate, error]);
  
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex h-[84.8vh] w-[90%] m-auto mb-24 mt-[-50px] shadow-2xl">
      <div className="w-1/2 bg-primary rounded-l-2xl">
        <img src={login} alt="" className=""/>
      </div>
      <div className="w-1/2 bg-base-100 rounded-r-2xl">
        <div className="lg:flex">
          <div className="w-full">
            <h1 className="text-3xl text-center text-primary mt-4">Log In</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-6 lg:mx-24 my-6"
            >
              <div class="form-control w-full mb-6">
                <input
                  {...register("email", {
                    pattern: {
                      value: "",
                      message: "Invalid email",
                    },
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                  type="email"
                  placeholder="Your email"
                  class="input input-bordered "
                />
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-600 mt-4">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div class="form-control w-full">
                <input
                  {...register("password", {
                    minLength: {
                      value: 6,
                      message: "too short",
                    },
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                  })}
                  type="password"
                  placeholder="Your password"
                  class="input input-bordered w-full "
                />
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-600 my-4">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-600 my-4">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <button
                className="btn btn-primary w-full text-white mt-4"
                type="submit"
                value="LogIn"
              >
                LogIn
              </button>
            </form>
            <div className="text-center text-lg font-serif">
              <span>Don't have any account? </span>
              <Link className="text-primary" to="/register">
                {" "}
                Register please
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmailLogin;
