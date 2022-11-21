import React, { useState } from "react";
import { useForm } from "react-hook-form";
const GmailRegister = () => {
  const [checkboxCount,setCheckboxCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: {
    checkbox: [],
    radio: "",
  }});
  const onSubmit = (data) => {
    console.log(data.checkbox.length)
  };
  
  return (
    <div className="w-full bg-primary mt-12 p-4">
      <div className="w-full lg:w-[90%] m-auto shadow-2xl bg-white rounded-3xl ">
        <h1 className="text-4xl text-center uppercase text-primary pt-4">
          Register yourself
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-6 lg:mx-24 my-6">
          <div class="form-control w-full my-6">
            <input
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
              type="email"
              placeholder="EMAIL ID"
              className={`input placeholder:text-md placeholder:font-sans placeholder:font-bold ${
                errors.name?.type === "required" ||
                errors.email?.type === "pattern"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            />
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.email?.message}
              </span>
            )}
          </div>

          <div class="form-control w-full my-6">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              type="text"
              placeholder="YOUR FULL NAME"
              className={`input placeholder:text-md placeholder:font-sans placeholder:font-bold ${
                errors.name?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            />
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <select
              {...register("department", {
                required: {
                  value: "Department name",
                  message: "Department is required",
                },
                /* pattern: {
                  value: "Department name",
                  message: "Invalid email",
                } */
              })}
              type="text"
              placeholder="Department Name"
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.department?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            >
              <option className="text-lg font-sans" defaultValue="">
                Your Department
              </option>
              <option className="text-lg font-sans" Value="Architecture">
                Architecture
              </option>
              <option className="text-lg font-sans" Value="CSE">
                CSE
              </option>
              <option className="text-lg font-sans" Value="CS">
                CS
              </option>
              <option className="text-lg font-sans" Value="EEE">
                EEE
              </option>
              <option className="text-lg font-sans" Value="IPE">
                IPE
              </option>
              <option className="text-lg font-sans" Value="ME">
                ME
              </option>
              <option className="text-lg font-sans" Value="TE">
                TE
              </option>
              <option className="text-lg font-sans" Value="SOB">
                SOB
              </option>
            </select>
            {errors.department?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.department?.message}
              </span>
            )}
          </div>

          <div class="form-control w-full my-6">
            <input
              {...register("id", {
                required: {
                  value: true,
                  message: "ID is Required",
                },
              })}
              type="text"
              placeholder="STUDENT ID"
              className={`input placeholder:text-md placeholder:font-sans placeholder:font-bold ${
                errors.id?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            />
            {errors.id?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.id?.message}
              </span>
            )}
          </div>

          <div className="form-control my-4">
            <select
              {...register("semester", {
                required: {
                  value: "Semester",
                  message: "Semester is required",
                },
              })}
              type="text"
              placeholder="Semester"
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.semester?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            >
              <option className="text-lg font-sans" defaultValue="">
                Your Semester
              </option>
              <option className="text-lg font-sans" Value="1/1">
                1/1
              </option>
              <option className="text-lg font-sans" Value="1/2">
                1/2
              </option>
              <option className="text-lg font-sans" Value="2/1">
                2/1
              </option>
              <option className="text-lg font-sans" Value="2/2">
                2/2
              </option>
              <option className="text-lg font-sans" Value="3/1">
                3/2
              </option>
              <option className="text-lg font-sans" Value="4/1">
                4/1
              </option>
              <option className="text-lg font-sans" Value="4/2">
                4/2
              </option>
              <option className="text-lg font-sans" Value="5/1">
                5/1
              </option>
              <option className="text-lg font-sans" Value="5/2">
                5/2
              </option>
            </select>
            {errors.semester?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.semester?.message}
              </span>
            )}
          </div>

          <div class="form-control w-full my-6 relative">
            <input
              {...register("birthDate", {
                required: {
                  value: true,
                  message: "Birth day is Required",
                },
              })}
              type="date"
              placeholder="Birth day date"
              className={`input placeholder:text-md placeholder:font-sans placeholder:font-bold ${
                errors.id?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            />
            {errors.birthDate?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.birthDate?.message}
              </span>
            )}
          </div>

          <div className="form-control my-4">
            <select
              {...register("blood", {
                required: {
                  value: "Blood",
                  message: "Blood group is required",
                },
              })}
              type="text"
              placeholder="Blood"
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.blood?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            >
              <option className="text-lg font-sans" defaultValue="">
                Your Blood Group
              </option>
              <option className="text-lg font-sans" Value="A+">
                A+
              </option>
              <option className="text-lg font-sans" Value="B+">
                B+
              </option>
              <option className="text-lg font-sans" Value="O+">
                O+
              </option>
              <option className="text-lg font-sans" Value="AB+">
                AB+
              </option>
              <option className="text-lg font-sans" Value="AB-">
                AB-
              </option>
              <option className="text-lg font-sans" Value="A-">
                A-
              </option>
            </select>
            {errors.semester?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.semester?.message}
              </span>
            )}
          </div>

          <div>
          <fieldset className="border border-primary"
          
          >
            <legend className="text-xl mx-4 px-2">Your favourite area</legend>
            <div className="lg:flex justify-around mx-4">
              <div>
                <input
                {...register("checkbox", {
                  required: {
                    value: "checkbox",
                    message: "checkbox is required",
                  },
                })}
                 type="checkbox" value="Arts & Illustration" onClick={()=>setCheckboxCount(checkboxCount+1)}/>
                <label for="fname" className="text-xl">
                  Arts & Illustration
                </label>
              </div>
              <div>
                <input
                {...register("checkbox", {
                  required: {
                    value: "checkbox",
                    message: "checkbox is required",
                  },
                })}
                type="checkbox" value="Innovation & Business Idea" onClick={()=>setCheckboxCount(checkboxCount+1)}/>
                <label for="lname" className="text-xl">
                  Innovation & Business Idea
                </label>
              </div>
              <div>
                <input
                {...register("checkbox", {
                  required: {
                    value: "checkbox",
                    message: "checkbox is required",
                  },
                })}
                 type="checkbox" value="Event Management" onClick={()=>setCheckboxCount(checkboxCount+1)}/>
                <label for="email" className="text-xl">
                  Event Management
                </label>
              </div>
            </div>
            <div className="lg:flex justify-around mx-4">
              <div>
                <input
                {...register("checkbox", {
                  required: {
                    value: "checkbox",
                    message: "checkbox is required",
                  },
                })}
                 type="checkbox" value="Arts & Illustration" onClick={()=>setCheckboxCount(checkboxCount+1)}/>
                <label for="fname" className="text-xl">
                  Arts & Illustration
                </label>
              </div>
              <div>
                <input type="checkbox" value="Innovation & Business Idea" onClick={()=>setCheckboxCount(checkboxCount+1)}/>
                <label for="lname" className="text-xl">
                  Innovation & Business Idea
                </label>
              </div>
              <div>
                <input type="checkbox" value="Event Management" checked={()=>setCheckboxCount(checkboxCount+1)}/>
                <label for="email" className="text-xl">
                  Event Management
                </label>
              </div>
            </div>
            
          </fieldset>
          {errors.checkbox?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.checkbox?.message}
              </span>
            )}
            {
              checkboxCount>=3?<span>ONly three option!</span>:""
            }
          </div>

          {/* <div class="form-control w-full">
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
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.password?.type === "required" ||
                errors.password?.type === "minLength"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
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
          </div>  */}

          <button
            className="btn btn-primary w-full text-white my-12"
            type="submit"
            value="LogIn"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default GmailRegister;
