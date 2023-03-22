import nodemailer from 'nodemailer'

export const sendMail = async (newTickets, eventDetailsToSend) => {
    const tp = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_ID,
            pass: process.env.SMTP_PS
        }
    });

    const mailData = await tp.sendMail({
        from: `Warder Inc. <${process.env.GGL_ACC}>`,
        to: eventDetailsToSend.email,
        subject: "New Ticket was Created",
        html: `<div>
        <h1>${eventDetailsToSend.userName} invited you to ${eventDetailsToSend.eventName}</h1>
        <p>Here you have ${eventDetailsToSend.tickets} tickets</p>
        ${newTickets.map(ticket => `
            <div>
                <h2>Ticket Code: ${ticket._id}</h2>
                <img src="https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=${ticket._id}&choe=UTF-8" alt='code' style="display: inline-block"/>
            </div>
            <hr>
        `).join('')}
    </div>
`,
    });
    return mailData;
}