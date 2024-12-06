import nodemailer from "nodemailer";
import {
  EMAIL_HOST,
  EMAIL_PASS,
  EMAIL_PORT,
  EMAIL_USER,
} from "../config/config.js";

export const sendMail = async ({ from, to, sub, data }) => {
  //create transport
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const info = {
    from: from,
    to: to,
    subject: sub,
    html: data,
  };

  try {
    return await transporter.sendMail(info);
  } catch (error) {
    console.log(error.message);
  }
};
