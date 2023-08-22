import { Dispatch, SetStateAction } from "react";
import { formState } from "./page";

interface Props {
  formData: formState;
  inputName: string;
  setFormData: Dispatch<{
    target: EventTarget;
  }>;
  inputClass: string;
  validEmail?: boolean;
  setSubmitSuccess: Dispatch<SetStateAction<boolean>>;
}

export default function ContactFormInput({
  formData,
  inputName,
  setFormData,
  inputClass,
  validEmail = true,
  setSubmitSuccess,
}: Props) {
  const inputType = formData[inputName as keyof formState];

  return (
    <div className="flex flex-col mx-2">
      <label
        htmlFor={inputName}
        className={inputType === "" ? "text-red-500" : ""}
      >
        <span className="text-neutral-700">{inputName}:</span>
        {inputType === ""
          ? ` Please provide a ${inputName.toLowerCase()} before submitting.`
          : null}
        <span className="text-red-500">
          {!validEmail ? " Please ensure your email is valid." : null}
        </span>
      </label>
      <input
        id={inputName}
        name={inputName}
        onChange={setFormData}
        onClick={(e) => {
          setFormData(e);
          setSubmitSuccess(false);
        }}
        value={inputType ? inputType : ""}
        className={
          inputType === ""
            ? inputClass +
              " border-red-500 focus:outline-none focus:ring focus:ring-red-500"
            : inputClass +
              " border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800 "
        }
      />
    </div>
  );
}
