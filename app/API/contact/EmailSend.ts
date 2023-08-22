// import nodemailer from "nodemailer";

// export default async function EmailSend(subject: string, body: string) {
//   const transporter = nodemailer.createTransport({
//     // host: "smtp.gmail.com",
//     // port: 587,
//     service: "gmail",
//     auth: {
//       user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
//       pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
//     },
//   });

//   const mailOptions = {
//     from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
//     to: "contact@adam-saunders.dev",
//     subject: subject,
//     text: body,
//   };

//   //   transporter.verify((error, success) => {
//   //     if (error) {
//   //       console.log(error);
//   //     } else {
//   //       console.log("Server is ready");
//   //     }
//   //   });

//   await new Promise((resolve, reject) => {
//     return transporter.sendMail(mailOptions, (error, response) => {
//       if (error) {
//         reject(error);
//       } else {
//         console.log("Email sent");
//         resolve(response);
//       }
//     });
//   });
// }

import sgMail from "@sendgrid/mail";

export default async function sendEmail(subject, text) {
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
