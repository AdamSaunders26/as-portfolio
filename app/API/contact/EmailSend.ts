import sgMail from "@sendgrid/mail";

export default async function sendEmail(subject: string, text: string) {
  if (process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  }

  const message = {
    to: "a.saunders206@gmail.com",
    from: "contact@adam-saunders.dev",
    subject,
    text,
  };

  await sgMail.send(message);
}
