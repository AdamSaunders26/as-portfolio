"use client";

import { FormEvent, useReducer, useState } from "react";
import axios from "axios";
import ContactFormInput from "./ContactFormInput";
import { AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import Socials from "../Components/Socials";

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
  const inputClass =
    "rounded-md p-2 mb-4 mt-2 border-2 font-normal dark:bg-neutral-900";
  const errorClass =
    " border-red-500 focus:outline-none focus:ring focus:ring-red-500 ";
  const validClass =
    " border-sky-600 focus:outline-none focus:ring focus:ring-sky-600 ";
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <main className="flex flex-col sm:flex-row  m-2 mt-24 sm:mt-16  ">
      <div>
        <h2 className="text-2xl my-2 mx-2 sm:mx-0 font-bold text-sky-700 dark:text-sky-500">
          Get in touch!
        </h2>
        <p className="mx-2 sm:mx-0">
          Feel free to drop me a message about anything at all! I'm currently
          looking for work so definitely get in touch if you think I would be a
          good fit at your company. I'd also love to know if you spot any bugs
          on this website or any of my projects so I can learn how to improve!
        </p>
        <p className="mx-2 sm:mx-0">
          You can also find me on these sites or send me an email directly.
        </p>
        <Socials />
      </div>
      <form
        className="bg-white dark:bg-black flex flex-col m-2 my-4  min-w-[50%]  dark:font-light font-semibold p-2 rounded-md "
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
          errorClass={errorClass}
          validClass={validClass}
          setSubmitSuccess={setSubmitSuccess}
        />
        <div className="flex flex-col mx-2">
          <label
            htmlFor="Message"
            className={formData.Message === "" ? "text-red-500" : ""}
          >
            <span className="">Message:</span>
            {formData.Message === ""
              ? ` Please enter a message before submitting.`
              : null}
          </label>
          <textarea
            id="Message"
            name="Message"
            maxLength={500}
            onChange={setFormData}
            onClick={(e) => {
              setFormData(e);
              setSubmitSuccess(false);
            }}
            value={formData.Message ? formData.Message : ""}
            className={
              formData.Message === ""
                ? "rounded-md p-2  mt-2 border-2 font-normal dark:bg-neutral-900" +
                  errorClass
                : "rounded-md p-2  mt-2 border-2 font-normal dark:bg-neutral-900" +
                  validClass
            }
          />
          <p className=" place-self-end">
            {formData.Message?.length ? formData.Message?.length : 0}/500
          </p>
        </div>
        <ContactFormInput
          formData={formData}
          inputName={"Name"}
          setFormData={setFormData}
          inputClass={inputClass}
          errorClass={errorClass}
          validClass={validClass}
          setSubmitSuccess={setSubmitSuccess}
        />
        <ContactFormInput
          formData={formData}
          inputName={"Email"}
          setFormData={setFormData}
          inputClass={inputClass}
          validEmail={validEmail}
          errorClass={errorClass}
          validClass={validClass}
          setSubmitSuccess={setSubmitSuccess}
        />
        <div className="flex gap-4 mx-2">
          <button
            disabled={isSubmitting}
            className="bg-white dark:bg-black rounded-md w-max h-max ont-semibold gap-2 p-2 text-xl text-sky-700 dark:text-sky-500 border-2  mb-2 border-sky-600 dark:border-sky-500 flex  items-center hover:bg-neutral-200 dark:hover:bg-neutral-900 active:bg-sky-600 active:text-white dark:active:bg-sky-500 dark:active:text-black"
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
