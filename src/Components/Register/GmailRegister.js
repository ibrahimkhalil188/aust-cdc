import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from '../../firebase.init';
import Loading from "../Shared/Loading";
const GmailRegister = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit= data =>{
     createUserWithEmailAndPassword(data.email, data.password)
     
    }
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  useEffect(()=>{
    if(user){
      toast.success("User created Successfully", {id:"1"})
      navigate("/home")
    }
    if(error){
      toast.error(error.message,{id:"2"})
    }
  },[user,navigate,error])

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="w-full bg-primary mt-12 p-4">
      <div className=" h-[90vh] w-[90%] m-auto shadow-2xl bg-white rounded-3xl ">
        <h1 className="text-4xl text-center uppercase text-primary pt-4">Register yourself</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-24 my-6">

<div class="form-control w-full my-6">
    <input
        {...register("name", {
            required: {
                value: true,
                message: "Name is Required"
            }

        })}
        type="text"
        placeholder="Your name"
        class="input input-bordered "
    />
    {errors.name?.type === 'required' && <span class="label-text-alt text-red-600 mt-4">{errors.name?.message}</span>}

</div>

<div class="form-control w-full my-6">
    <input
        {...register("email", {
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email"
            },
            required: {
                value: true,
                message: "Email is Required"
            }

        })}
        type="email"
        placeholder="Your email"
        class="input input-bordered "
    />
    {errors.email?.type === 'required' && <span class="label-text-alt text-red-600 mt-4">{errors.email?.message}</span>}
    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600 mt-4">{errors.email?.message}</span>}

</div>

<div class="form-control w-full">
    <input
        {...register("password", {
            minLength: {
                value: 6,
                message: "too short"
            },
            required: {
                value: true,
                message: "Password is Required"
            }

        })}
        type="password"
        placeholder="Your password"
        class="input input-bordered w-full mb-4"
    />
    {errors.password?.type === 'required' && <span class="label-text-alt text-red-600 my-4">{errors.password?.message}</span>}
    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600 my-4">{errors.password?.message}</span>}
</div>


<button className='btn btn-primary w-full text-white' type="submit" value="LogIn">Register</button>
</form>

      </div>
    </div>
  );
};

export default GmailRegister;
