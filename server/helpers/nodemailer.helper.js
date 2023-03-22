import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
// dotenv.config();/

"H"

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
    return data;
}


SMTP_ID= '262512b93209b57aada5bf646a01a2d3'
SMTP_PS= '8ab3827f5f589851460fb7288dfe2aa7'
GGL_ACC= 'warderinc.py@gmail.com'