import { sendMail } from "../utility/EmailUtilis.js";

//user information create
export const contactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }
    //sendMail
    const data = await sendMail({
      from: `Blog Project: ${email}`,
      to: "mrmamu504@gmail.com",
      sub: subject,
      data: `
        name : ${name}, 
        email : ${email},
        subject : ${subject},
        message : ${message}
        `,
    });
    res.status(200).json({
      message: `Hi ${name}, your message send successfully`,
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
