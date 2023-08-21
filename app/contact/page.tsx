"use client";

import { useReducer } from "react";
import axios from "axios";

export interface formState {
  subject: string;
  message: string;
  name: string;
  email: string;
}

export default function ContactPage() {
  function formReducer(state: formState, { target }: { target: EventTarget }) {
    const formTarget = target as HTMLFormElement;
    return {
      ...state,
      [formTarget.name]: formTarget.value,
    };
  }

  const [formData, setFormData] = useReducer(formReducer, {
    subject: "",
    message: "",
    name: "",
    email: "",
  });

  const inputClass = "rounded-lg mx-4";

  return (
    <form
      className="bg-emerald-100 flex flex-col m-2 p-2 rounded-xl gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
        axios
          .post("http://localhost:3000/api/contact", { formData })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <label htmlFor="subject">Subject: </label>
      <input
        id="subject"
        name="subject"
        onChange={setFormData}
        className={inputClass}
      />
      <label htmlFor="message">Message: </label>
      <textarea
        id="message"
        name="message"
        onChange={setFormData}
        className={inputClass}
      />
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        onChange={setFormData}
        className={inputClass}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        onChange={setFormData}
        className={inputClass}
      />
      <button className="bg-white rounded-xl w-max px-2 ">Send</button>
    </form>
  );
}
