import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'
// dotenv.config();

export const notifyAdmin = async () => {
    const tp = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_ID,
            pass: process.env.SMTP_PS
        }
    });

    const data = await tp.sendMail({
        from: `Warder Inc. <${process.env.GGL_ACC}>`,
        to: "mail@ejemplo.com",
        subject: "New Ticket was Created",
        html: "<h1>Hola World</h1>"
    })
console.log()
    return data;

}