import { Dispatch, SetStateAction } from "react";
import { formState } from "./page";

interface Props {
  formData: formState;
  inputName: string;
  setFormData: Dispatch<{
    target: EventTarget;
  }>;
  inputClass: string;
  errorClass: string;
  validClass: string;
  validEmail?: boolean;
  message?: boolean;
  setSubmitSuccess: Dispatch<SetStateAction<boolean>>;
}

export default function ContactFormInput({
  formData,
  inputName,
  setFormData,
  inputClass,
  errorClass,
  validClass,
  validEmail = true,
  message,
  setSubmitSuccess,
}: Props) {
  const inputType = formData[inputName as keyof formState];

  return (
    <div className="flex flex-col mx-2">
      <label
        htmlFor={inputName}
        className={inputType === "" ? "text-red-500" : ""}
      >
        <span className="">{inputName}:</span>
        {inputType === ""
          ? ` Please enter a ${inputName.toLowerCase()} before submitting.`
          : null}
        <span className="text-red-500">
          {!validEmail ? " Please ensure your email is valid." : null}
        </span>
      </label>
      {inputName === "Message" ? (
        <>
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
        </>
      ) : (
        <input
          id={inputName}
          name={inputName}
          maxLength={100}
          onChange={setFormData}
          onClick={(e) => {
            setFormData(e);
            setSubmitSuccess(false);
          }}
          value={inputType ? inputType : ""}
          className={
            inputType === "" ? inputClass + errorClass : inputClass + validClass
          }
        />
      )}
    </div>
  );
}
