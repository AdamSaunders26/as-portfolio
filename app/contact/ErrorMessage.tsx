export default function ErrorMessage({ isError }: { isError: boolean }) {
  return isError ? (
    <p className="mx-2 font-semibold text-red-500 text-lg">
      Please make sure all inputs have been filled in and try again.
    </p>
  ) : null;
}
