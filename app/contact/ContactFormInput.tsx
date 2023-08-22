import { Dispatch } from "react";
import { formState } from "./page";

interface Props {
  formData: formState;
  inputName: string;
  setFormData: Dispatch<{
    target: EventTarget;
  }>;
  inputClass: string;
}

export default function ContactFormInput({
  formData,
  inputName,
  setFormData,
  inputClass,
}: Props) {
  const inputType = formData[inputName as keyof formState];

  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputName}
        className={inputType === "" ? "text-red-500" : ""}
      >
        <span className="text-neutral-700">{inputName}:</span>
        {inputType === ""
          ? ` Please provide a ${inputName.toLowerCase()} before submitting.`
          : null}
      </label>
      <input
        id={inputName}
        name={inputName}
        onChange={setFormData}
        onClick={setFormData}
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
