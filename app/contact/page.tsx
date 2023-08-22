"use client";

import { FormEvent, useReducer, useState } from "react";
import axios from "axios";
import ContactFormInput from "./ContactFormInput";
import { AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

export interface formState {
  Subject: string | null;
  Message: string | null;
  Name: string | null;
  Email: string | null;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  function formReducer(
    state: formState,
    { target }: { target: EventTarget | string }
  ) {
    if (typeof target === "string") {
      return initialState;
    }
    const formTarget = target as HTMLFormElement;
    return {
      ...state,
      [formTarget.name]: formTarget.value,
    };
  }
  const initialState = {
    Subject: null,
    Message: null,
    Name: null,
    Email: null,
  };
  const [formData, setFormData] = useReducer(formReducer, initialState);

  console.log(formData);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    let submitOkay = true;

    if (formData.Email) {
      if (!emailRegex.test(formData.Email)) {
        setValidEmail(false);
        setIsError(true);
        setIsSubmitting(false);
        submitOkay = false;
      }
    }

    for (const element in formData) {
      if (
        formData[element as keyof formState] === null ||
        formData[element as keyof formState] === ""
      ) {
        setIsError(true);
        setIsSubmitting(false);
        submitOkay = false;
        break;
      }
    }

    if (process.env.NEXT_PUBLIC_API_URL && submitOkay) {
      console.log("im submitting!");
      axios
        .post(process.env.NEXT_PUBLIC_API_URL, { formData })
        .then(({ data }) => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setValidEmail(true);
          setFormData({ target: "string" });
          console.log(data);
        })
        .catch((err) => {
          setIsError(true);
          setIsSubmitting(false);
          console.log(err);
        });
    }
  }
  const inputClass = "rounded-lg p-2 mb-4 mt-2 border font-normal";
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <main className="flex flex-col  m-2">
      <h2 className="text-2xl mx-2 font-bold text-emerald-800">
        Get in touch!
      </h2>
      <p className="mx-2">
        Feel free to drop me a message about anything at all! I'm currently
        looking for work so defintely get in touch if you think I would be a
        good fit at your company. I'd also love to know if you spot any bugs on
        this website or any of my projects so I can learn how to improve!
      </p>
      <form
        className="bg-emerald-100 flex flex-col m-2  text-neutral-700 font-semibold p-2 rounded-xl "
        onSubmit={handleSubmit}
      >
        {isError ? (
          <p className="mx-2 font-semibold text-red-500 text-lg">
            Please make sure all inputs have been filled in and try again.
          </p>
        ) : null}
        <ContactFormInput
          formData={formData}
          inputName={"Subject"}
          setFormData={setFormData}
          inputClass={inputClass}
          setSubmitSuccess={setSubmitSuccess}
        />
        <div className="flex flex-col mx-2">
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
            onClick={(e) => {
              setFormData(e);
              setSubmitSuccess(false);
            }}
            value={formData.Message ? formData.Message : ""}
            className={
              formData.Message === ""
                ? inputClass +
                  " border-red-500 focus:outline-none focus:ring focus:ring-red-500 "
                : inputClass +
                  " border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800 "
            }
          />
        </div>
        <ContactFormInput
          formData={formData}
          inputName={"Name"}
          setFormData={setFormData}
          inputClass={inputClass}
          setSubmitSuccess={setSubmitSuccess}
        />
        <ContactFormInput
          formData={formData}
          inputName={"Email"}
          setFormData={setFormData}
          inputClass={inputClass}
          validEmail={validEmail}
          setSubmitSuccess={setSubmitSuccess}
        />
        <div className="flex gap-4 mx-2">
          <button
            disabled={isSubmitting}
            className="bg-white rounded-xl w-max h-max ont-semibold gap-2 p-2 text-xl text-emerald-800 border-2  mb-2 border-emerald-800 flex  items-center hover:bg-neutral-200 active:bg-emerald-800 active:text-white "
          >
            {isSubmitting ? "Submitting" : "Send"}
            <span className={isSubmitting ? "animate-spin" : ""}>
              {isSubmitting ? <FaSpinner /> : <AiOutlineSend />}
            </span>
          </button>
          {submitSuccess ? (
            <p>
              Success! Thanks for your message! I'll normally get back to you
              within the next few hours but this may be longer at the weekends.{" "}
            </p>
          ) : null}
        </div>
      </form>
    </main>
  );
}
