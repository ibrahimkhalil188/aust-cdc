import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_KEY, process.env.REACT_APP_EMAIL_JS_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
      .then((result) => {
          toast.success("Email sent Successfully");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='input' type="text" name="user_name" />
      <label>Email</label>
      <input className='input' type="email" name="user_email" />
      <label>Message</label>
      <textarea className="textarea textarea-primary text-black w-full h-32" name="message" />
      <input className='btn' type="submit" value="Send" />
    </form>
  );
};