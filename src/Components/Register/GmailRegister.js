import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from "../../Assets/Logo/austlogo.png";
const GmailRegister = () => {
  const [userData, setUserDAta] = useState(" ")
  const [other, setOther] = useState(false);
  const [payment, setPayment] = useState("");
  const ImageStorageKey = "5cb95fcec85252f31df0df859b7fc24a";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      interest: [],
      payment: "",
      onlinePayment: "",
    },
  });
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          data = { ...data, image: result.data.url,status:"pending" };
          console.log(result.data.url);
          setUserDAta(data);
          reset()
        }
      });
  };

  useEffect(()=>{
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your registered successfully");
        }
      });
  },[userData])

  return (
    <div className="w-full bg-primary mt-12 p-4 py-24">
      <div className="w-full lg:w-[90%] m-auto shadow-2xl bg-white rounded-3xl ">
        <div className="flex justify-center pt-12">
          <img className="w-72" src={logo} alt="" />
        </div>
        <h1 className="text-4xl font-sans font-bold text-center uppercase text-primary pt-4 pb-12">
          <span className="text-secondary">Register</span> yourself
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-sans font-bold mx-6 lg:mx-24 my-6"
        >
          {/* Avatar or profile image */}
          <div class="form-control w-full my-6">
            <label className="font-bold font-sans mx-2 text-primary">
              Email ID
            </label>
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
              className={`input ${
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
            <label className="font-bold font-sans mx-2 text-primary">
              Name
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              type="text"
              className={`input ${
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
            <label className="font-bold font-sans mx-2 text-primary">
              Department
            </label>
            <select
              {...register("department", {
                required: {
                  value: true,
                  message: "Department is required",
                },
              })}
              type="text"
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.department?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            >
              <option className="text-lg font-sans" value=""></option>
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
            <label className="font-bold font-sans mx-2 text-primary">
              Student ID
            </label>
            <input
              {...register("id", {
                required: {
                  value: true,
                  message: "ID is Required",
                },
              })}
              type="text"
              className={`input ${
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
            <label className="font-bold font-sans mx-2 text-primary">
              Semester
            </label>
            <select
              {...register("semester", {
                required: {
                  value: "Semester",
                  message: "Semester is required",
                },
              })}
              type="text"
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.semester?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            >
              <option className="text-lg font-sans" defaultValue=""></option>
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
            <label className="font-bold font-sans mx-2 text-primary">
              Date of birth
            </label>
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
            <label className="font-bold font-sans mx-2 text-primary">
              Blood Group
            </label>
            <select
              {...register("blood", {
                required: {
                  value: "Blood",
                  message: "Blood group is required",
                },
              })}
              type="text"
              className={`input placeholder-primary placeholder:text-lg placeholder:font-bold ${
                errors.blood?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            >
              <option className="text-lg font-sans" defaultValue=""></option>
              <option className="text-lg font-sans" Value="A+">
                A+
              </option>
              <option className="text-lg font-sans" Value="A-">
                A-
              </option>
              <option className="text-lg font-sans" Value="B+">
                B+
              </option>
              <option className="text-lg font-sans" Value="B-">
                B-
              </option>
              <option className="text-lg font-sans" Value="O+">
                O+
              </option>
              <option className="text-lg font-sans" Value="O-">
                O-
              </option>
              <option className="text-lg font-sans" Value="AB+">
                AB+
              </option>
              <option className="text-lg font-sans" Value="AB-">
                AB-
              </option>
            </select>
            {errors.semester?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.semester?.message}
              </span>
            )}
          </div>

          <div>
            <fieldset className="border border-primary font-sans font-bold ">
              <legend className="text-primary mx-4 font-sans font-bold px-2">
                Your favourite area
              </legend>
              <div className="lg:grid grid-cols-3 ml-8 gap-4 my-4">
                <div>
                  <input
                    {...register("checkbox", {
                      required: {
                        value: "checkbox",
                        message: "checkbox is required",
                      },
                    })}
                    type="checkbox"
                    value="Arts & Illustration"
                  />
                  <label for="fname" className="ml-2">
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
                    type="checkbox"
                    value="Innovation & Business Idea"
                  />
                  <label for="lname" className="ml-2">
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
                    type="checkbox"
                    value="Event Management"
                  />
                  <label for="email" className="ml-2">
                    Event Management
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
                    type="checkbox"
                    value="Graphic Design"
                  />
                  <label for="fname" className="ml-2">
                    Graphic Design
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
                    type="checkbox"
                    value="Graphic Design"
                  />
                  <label for="lname" className="ml-2">
                    Graphic Design
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
                    type="checkbox"
                    value="Animation"
                  />
                  <label for="email" className="ml-2">
                    Animation
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
                    type="checkbox"
                    value="Web design"
                  />
                  <label for="email" className="ml-2">
                    Web design
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
                    type="checkbox"
                    value="Case Study
                 "
                  />
                  <label for="email" className="ml-2">
                    Case Study
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
                    type="checkbox"
                    value="Public Speaking"
                  />
                  <label for="email" className="ml-2">
                    Public Speaking
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
                    type="checkbox"
                    value="Content Writing"
                  />
                  <label for="email" className="ml-2">
                    Content Writing
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
                    type="checkbox"
                    value="Marketing"
                  />
                  <label for="email" className="ml-2">
                    Marketing
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
                    type="checkbox"
                    value="Others"
                    onClick={() => setOther(!other)}
                  />
                  <label for="email" className="ml-2">
                    Others
                  </label>
                  {other ? (
                    <input
                      {...register("others", {
                        required: {
                          value: true,
                          message: "Write something on others filed",
                        },
                      })}
                      className="input input-bordered"
                    ></input>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </fieldset>
            {errors.checkbox?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.checkbox?.message}
              </span>
            )}
          </div>

          <div className="mt-4">
            <label className="font-bold font-sans mx-2 text-primary ">
              Payment
            </label>
            <br />
            <div className="mx-6">
              <input
                {...register("payment", {
                  required: {
                    value: "payment",
                    message: "radio is required",
                  },
                })}
                type="radio"
                value="Online"
                onClick={() => setPayment("online")}
              />
              <label
                for="payment"
                className="ml-1 mr-8 font-sans font-bold text-md uppercase"
              >
                Online
              </label>
              <input
                {...register("payment", {
                  required: {
                    value: "payment",
                    message: "radio is required",
                  },
                })}
                type="radio"
                value="offline"
                onClick={() => setPayment("offline")}
              />
              <label
                for="payment"
                className="ml-1 font-sans font-bold text-md uppercase"
              >
                Offline
              </label>
            </div>
          </div>
          <div>
            {payment === "offline" ? (
              <div className="font-sans font-bold">
                <label className="font-bold font-sans mx-2 text-primary ">
                  Payment Method
                </label>
                <br />
                <div className="ml-6">
                  <input
                    {...register("cash", {
                      required: {
                        value: "cash",
                        message: "radio is required",
                      },
                    })}
                    type="radio"
                    value="Booth"
                    name="cash"
                  />
                  <label for="cash" className="ml-2">
                    Booth
                  </label>
                </div>
              </div>
            ) : (
              ""
            )}
            {payment === "online" ? (
              <div className="font-sans font-bold">
                <label className="font-bold font-sans mx-2 text-primary ">
                  Payment Method
                </label>
                <br />
                <div className="ml-6">
                  <input
                    {...register("onlinePayment", {
                      required: {
                        value: "onlinePayment",
                        message: "radio is required",
                      },
                    })}
                    type="radio"
                    value="Bkash"
                    name="onlinePayment"
                  />
                  <label for="onlinePayment" className="ml-2">
                    Bkash
                  </label>
                </div>
                <div className="ml-6">
                  <input
                    {...register("onlinePayment", {
                      required: {
                        value: "onlinePayment",
                        message: "radio is required",
                      },
                    })}
                    type="radio"
                    value="Nagad"
                    name="onlinePayment"
                  />
                  <label for="onlinePayment" className="ml-2">
                    Nagad
                  </label>
                </div>
                <div className="ml-6">
                  <input
                    {...register("onlinePayment", {
                      required: {
                        value: "onlinePayment",
                        message: "radio is required",
                      },
                    })}
                    type="radio"
                    value="Rocket"
                    name="onlinePayment"
                  />
                  <label for="onlinePayment" className="ml-2">
                    Rocket
                  </label>
                </div>
                <div class="form-control w-full my-6">
                  <label className="font-bold font-sans mx-2 text-primary">
                    Transaction ID
                  </label>
                  <input
                    {...register("Transaction ID", {
                      required: {
                        value: true,
                        message: "Transaction ID is Required",
                      },
                    })}
                    type="text"
                    placeholder="Transaction ID"
                    className={`input mt-2 ${
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
              </div>
            ) : (
              ""
            )}
          </div>
          <div class="form-control w-full my-6">
            <label className="font-bold font-sans mx-2 text-primary">
              Choose a decent image
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "image is Required",
                },
              })}
              type="file"
              className={`input ${
                errors.image?.type === "required"
                  ? "border-secondary"
                  : "input-bordered border-2"
              }`}
            />
            {errors.image?.type === "required" && (
              <span class="label-text-alt text-red-600 mt-4">
                {errors.image?.message}
              </span>
            )}
          </div>
          <button
            className="btn btn-primary font-sans font-bold text-lg w-full text-white my-8"
            type="submit"
          >
            Submit your form
          </button>
        </form>
      </div>
    </div>
  );
};

export default GmailRegister;
