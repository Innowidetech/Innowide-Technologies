var express = require('express');
var router = express.Router();
var contactUs = require('../models/contactUs');
var getInTouch = require('../models/getInTouch');
var reachOut = require('../models/reachOut');
var demoRequest = require('../models/demoRequest');
var Blog = require('../models/blogs');
var Login = require('../models/blogLogin');
var nodemailer = require('nodemailer');
require('dotenv').config();

// Nodemailer transporter setup
var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSKEY
  }
});

function sendMailToClient(subject, htmlContent, toEmail) {
  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: toEmail, 
    subject: subject,
    html: htmlContent,
    replyTo: process.env.EMAIL_ID,
  };
  return transporter.sendMail(mailOptions);
};

function sendMailToAdmin(fromEmail, subject, htmlContent) {
  const mailOptions = {
    from: fromEmail,
    to: process.env.EMAIL_ID,
    subject: subject,
    html: htmlContent,
    replyTo: fromEmail,
  };
  return transporter.sendMail(mailOptions);
};

const phoneRegex = /^[6-9]\d{9}$/;


// Contact Us form submission
router.post('/contact-us', (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).send('Invalid mobile number, must contain 10 digits.');
  }
  const contact = new contactUs(req.body);
  contact.save()
    .then(() => {
      // Email to Admin
      const emailSubjectToAdmin = `New Contact Us Submission`;
      const emailTextToAdmin = `
        <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
          <h2 style="color: #333;">New Contact Us Submission</h2>
          <p><strong>Name :</strong> ${fullName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Contact Number :</strong> ${phoneNumber}</p>
          <p><strong>Message :</strong><span style="display: inline-block; margin-left: 10px;"> ${message}</span></p>

        </div>
      `;
      sendMailToAdmin(email, emailSubjectToAdmin, emailTextToAdmin)
        .then(() => {
          // Email to Client
          const emailSubjectToClient = `Innowide Technologies - Thank you for contacting us`;
          const emailTextToClient = `
            <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
              <h1 style="color: #333;">Hello ${fullName},</h1>
              <h2>Thank You for Contacting Us!</h2>
              <p>We have received your message and will get back to you soon.</p>
              <p>Here is a copy of your message:</p>
              <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">${message}</blockquote>
              <p>Best regards,<br>Innowide TechnologiesTeam.</p>
            </div>
          `;
          sendMailToClient(emailSubjectToClient, emailTextToClient, email)
            .then(() => res.status(200).send('Contact form submitted successfully!'))
            .catch((err) => res.status(500).send(`Error sending acknowledgment email to client: ${err.message}`));
        })
        .catch((err) => res.status(500).send(`Error notifying admin: ${err.message}`));
    })
    .catch((err) => res.status(404).send(`Error submitting form: ${err.message}`));
});


// Get In Touch form submission
router.post('/get-in-touch', (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).send('Invalid mobile number, must contain 10 digits.');
  }
  const touch = new getInTouch(req.body);
  touch.save()
    .then(() => {
      // Email to the admin
      const emailSubjectToAdmin = `New Get in Touch Submission`;
      const emailTextToAdmin = `
        <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
          <h2 style="color: #333;">New Get in Touch Submission</h2>
          <p><strong>Name :</strong> ${firstName} ${lastName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Contact Number :</strong> ${phoneNumber}</p>
          <p><strong>Message :</strong><span style="display: inline-block; margin-left: 10px;"> ${message}</span></p>
        </div>
      `;
      sendMailToAdmin(email, emailSubjectToAdmin, emailTextToAdmin)
        .then(() => {
          // Email to the client
          const emailSubjectToClient = `Innowide Technologies - Thank you for getting in touch with us`;
          const emailTextToClient = `
            <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
              <h1 style="color: #333;">Hello ${firstName} ${lastName},</h1>
              <h2>Thank you for getting in touch!</h2>
              <p>We have received your message and will get back to you soon.</p>
              <p>Here is a copy of your message:</p>
              <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">${message}</blockquote>
              <p>Best regards,<br>Innowide Technologies Team.</p>
            </div>
          `;
          sendMailToClient(emailSubjectToClient, emailTextToClient, email)
            .then(() => res.status(200).send('Get in touch form submitted successfully!'))
            .catch((err) => res.status(500).send(`Error sending acknowledgment email to client: ${err.message}`));
        })
        .catch((err) => res.status(500).send(`Error notifying admin: ${err.message}`));
    })
    .catch((err) => res.status(404).send(`Error submitting form: ${err.message}`));
});


//Reach out to us
router.post('/reach-out', (req, res) => {
  var reach = new reachOut(req.body);
  reach.save()
    .then(() => {
      reachOut.find().sort({ createdAt: -1 })
        .then(emails => {
          let emailListHTML = `
            <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
              <h2 style="color: #333;">New Reach Out Email Submissions</h2>
              <ul>
          `;
          const latestEmail = emails[0];
          const formattedLatestDate = latestEmail.createdAt.toLocaleString();
          emailListHTML += `
            <li style="background-color: #f4f4f9; border: 1px solid #007bff; border-radius: 5px; padding: 15px; margin-bottom: 10px;">
              <strong style="color: #007bff;">Latest Email:</strong><br>
              <strong>Email :</strong> ${latestEmail.email} <br>
              <strong>Submitted on :</strong> ${formattedLatestDate} <br><br>
            </li>
          `;
          emails.slice(1).forEach(email => {
            const formattedDate = email.createdAt.toLocaleString();
            emailListHTML += `
              <li>
                <strong>Email :</strong> ${email.email} <br>
                <strong>Submitted on :</strong> ${formattedDate} <br><br>
              </li>
            `;
          });
          emailListHTML += `</ul></div>`;
          const emailSubjectToAdmin = 'New Reach Out Submissions';
          sendMail(process.env.EMAIL_ID, emailSubjectToAdmin, emailListHTML, latestEmail.email)
            .then(() => {
              res.status(200).send('Reach out form submitted successfully!');
            })
            .catch((err) => {
              res.status(500).send(`Error sending notification email to admin: ${err.message}`);
            });
        })
        .catch((err) => {
          res.status(500).send(`Error fetching email submissions: ${err.message}`);
        });
    })
    .catch((err) => {
      res.status(404).send(`Error saving reach-out form: ${err.message}`);
    });
});


//Demo section request
router.post('/demo', (req, res) => {
  const { name, email, phoneNumber, message, modeOfCommunication, category } = req.body;
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).send('Invalid mobile number, must contain 10 digits.');
  };
  const demo = new demoRequest(req.body);
  demo.save()
    .then(() => {
      // Email to Admin
      const emailSubjectToAdmin = `Demo Request for ${category} by ${name}`;
      const emailTextToAdmin = `
        <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
          <h2 style="color: #333;">${category} Demo Request</h2>
          <p><strong>Name :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Contact Number :</strong> ${phoneNumber}</p>
          <p><strong>Message :</strong><span style="display: inline-block; margin-left: 10px;"> ${message}</span></p>
          <p><strong>Mode of Communication :</strong> ${modeOfCommunication}</p>
          <p><strong>Category :</strong> ${category}</p>          
        </div>`
      ;
      sendMailToAdmin(email, emailSubjectToAdmin, emailTextToAdmin)
        .then(() => {
          // Email to Client
          const emailSubjectToClient =`Innowide Technologies - Demo Request for ${category}`;
          const emailTextToClient = `
            <div style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; max-width: 600px; font-family: Arial, sans-serif;">
              <h1 style="color: #333;">Hello ${name},</h1>
              <h2>Thank you for requesting a demo!</h2>
              <p>We have received your request for <b>${category}</b>, we will get back to you soon.</p>
              <p>Here is the copy of your request:</p>
              <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
                <ul>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Contact Number:</strong> ${phoneNumber}</li>
                  <li><strong>Message:</strong> <span style="display: inline-block; margin-left: 10px;"> ${message}</span></li>
                  <li><strong>Mode of Communication:</strong> ${modeOfCommunication}</li>
                  <li><strong>Category:</strong> ${category}</li>
                </ul>
              </blockquote>
              <p>Our team will further communicate with you through <strong>${modeOfCommunication}</strong>.</p><br>
              <p>Best regards,<br>Innowide Technologies Team.</p>
            </div>`
          ;
          sendMailToClient(emailSubjectToClient, emailTextToClient, email)
            .then(() => res.status(200).send('Demo request submitted successfully!'))
            .catch((err) => res.status(500).send(`Error sending acknowledgment email to client: ${err.message}`));
        })
        .catch((err) => res.status(500).send(`Error notifying admin: ${err.message}`));
    })
    .catch((err) => res.status(404).send(`Error submitting form: ${err.message}`));
});

//Blogs section
router.post('/blogs',(req,res)=>{
  const {title, tags, description} = req.body;
  const blog = new Blog({ title, tags, description });
  blog.save()
  .then(()=>res.status(201).send('Blog saved successfully!'))
  .catch((err) => res.status(500).send(`Error saving blog: ${err.message}`));
});  

router.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) 
    .then((blogs) => res.status(200).json(blogs))
    .catch((err) => res.status(500).send(`Error retrieving blogs: ${err.message}`));
});


//login
router.post('/login',(req,res)=>{
  Login.findOne({password:req.body.password})
  .then((user)=>{
    if(user){
        res.send("Login Success")
      }
      else{
        res.send("You are not allowed to Login")
      }
  })
});


module.exports = router;
