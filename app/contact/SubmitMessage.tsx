interface Props {
  submitSuccess: boolean;
  submitError: boolean;
}

export default function SubmitMessage({ submitSuccess, submitError }: Props) {
  if (submitSuccess) {
    return (
      <p>
        Success! Thanks for your message! I'll normally get back to you within
        the next few hours but this may be longer at the weekends.{" "}
      </p>
    );
  }
  if (submitError) {
    return (
      <p>
        Something went wrong. Please refresh the page and try again. If that
        doesn't work then send and email to{" "}
        <a
          className="text-sky-700 dark:text-sky-500"
          href="mailto:contact@adam-saunders.dev"
        >
          contact@adam-saunders.dev
        </a>{" "}
        and I'll try to figure out what happened!
      </p>
    );
  }
}
