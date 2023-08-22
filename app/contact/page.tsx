"use client";

import { FormEvent, useReducer, useState } from "react";
import axios from "axios";
import ContactFormInput from "./ContactFormInput";

export interface formState {
  Subject: string | null;
  Message: string | null;
  Name: string | null;
  Email: string | null;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function formReducer(state: formState, { target }: { target: EventTarget }) {
    const formTarget = target as HTMLFormElement;
    return {
      ...state,
      [formTarget.name]: formTarget.value,
    };
  }

  const [formData, setFormData] = useReducer(formReducer, {
    Subject: null,
    Message: null,
    Name: null,
    Email: null,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (process.env.NEXT_PUBLIC_API_URL) {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL, { formData })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const inputClass = "rounded-lg mx-4 p-2 mb-4 mt-2 border font-normal";
  console.log(formData);
  return (
    <form
      className="bg-emerald-100 flex flex-col m-2 my-4 text-neutral-700 font-semibold p-2 rounded-xl "
      onSubmit={handleSubmit}
    >
      <ContactFormInput
        formData={formData}
        inputName={"Subject"}
        setFormData={setFormData}
        inputClass={inputClass}
      />
      <label
        htmlFor="Message"
        className={formData.Message === "" ? "text-red-500" : ""}
      >
        <span className="text-neutral-700">Message:</span>
        {formData.Message === ""
          ? ` Please provide a message before submitting.`
          : null}
      </label>
      <textarea
        id="Message"
        name="Message"
        onChange={setFormData}
        onClick={setFormData}
        className={
          formData.Message === ""
            ? inputClass +
              " border-red-500 focus:outline-none focus:ring focus:ring-red-500 "
            : inputClass +
              " border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800 "
        }
      />

      <ContactFormInput
        formData={formData}
        inputName={"Name"}
        setFormData={setFormData}
        inputClass={inputClass}
      />
      <ContactFormInput
        formData={formData}
        inputName={"Email"}
        setFormData={setFormData}
        inputClass={inputClass}
      />

      <button className="bg-white rounded-xl w-max px-2 ">Send</button>
    </form>
  );
}
