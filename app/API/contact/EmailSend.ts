import nodemailer from "nodemailer";

export default async function EmailSend(subject: string, body: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    to: "contact@adam-saunders.dev",
    subject: subject,
    text: body,
  };
  await new Promise((resolve, reject) => {
    return transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        reject(error);
      } else {
        console.log("Email sent");
        resolve(response);
      }
    });
  });
}
