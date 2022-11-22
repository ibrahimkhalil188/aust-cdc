import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export const EmailJs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_KEY,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="mt-[40px] lg:w-[30%]" ref={form} onSubmit={sendEmail}>
      <h1 className="text-4xl font-sans font-bold">Contact us</h1>
      <div className="bg-white h-[0.5px]"></div>

      <div className="lg:flex justify-between font-sans mt-2 text-sm">
        <div className="mr-4">
          <label className="block">Name</label>
          <input
            className="input input-sm bg-[#b8b3d3] text-black"
            type="text"
            name="user_name"
          />
        </div>
        <div>
        <label className="block">Email</label>
        <input
          className="input input-sm bg-[#b8b3d3] text-black"
          type="email"
          name="user_email"
        />
        </div>
      </div>
      <div className="mt-4">
      <label className="font-sans text-sm">Message</label>
      <textarea
        className="textarea textarea-primary text-black w-full h-32 bg-[#b8b3d3] "
        name="message"
      />
      <input className="btn w-full text-white" type="submit" value="Send" />
      </div>
    </form>
  );
};
