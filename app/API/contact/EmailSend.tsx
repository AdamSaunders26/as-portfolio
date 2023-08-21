// import nodemailer from "nodemailer";

// export default async function EmailSend(subject, body) {
//   const transporter = nodemailer.createTransport({
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

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent");
//       return true;
//     }
//   });
// }
