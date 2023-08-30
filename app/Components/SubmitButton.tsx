import { AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

export default function SubmitButton({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  return (
    <button
      disabled={isSubmitting}
      className="bg-white dark:bg-black rounded-md w-max h-max ont-semibold gap-2 p-2 text-xl text-sky-700 dark:text-sky-500 border-2  mb-2 border-sky-600 dark:border-sky-500 flex  items-center hover:bg-neutral-200 dark:hover:bg-neutral-900 active:bg-sky-600 active:text-white dark:active:bg-sky-500 dark:active:text-black"
    >
      {isSubmitting ? "Submitting" : "Send"}
      <span className={isSubmitting ? "animate-spin" : ""}>
        {isSubmitting ? <FaSpinner /> : <AiOutlineSend />}
      </span>
    </button>
  );
}
