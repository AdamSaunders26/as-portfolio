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

  try {
    await sgMail.send(message);
    console.log("email sent");
  } catch (error) {
    console.error(error);
  }
}
