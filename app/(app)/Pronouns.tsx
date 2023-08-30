interface Props {
  subject: string;
  object: string;
}

export default function Pronouns({ subject, object }: Props) {
  const punctuationClass = "text-base";
  const pronounClass = "text-base text-neutral-700 dark:text-neutral-200";
  return (
    <>
      <span className={punctuationClass}>(</span>
      <span className={pronounClass}>{subject}</span>
      <span className={punctuationClass}> / </span>
      <span className={pronounClass}>{object}</span>
      <span className={punctuationClass}>)</span>
    </>
  );
}
