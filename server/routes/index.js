const express = require('express');
const router = express.Router();
const contactUs = require('../models/contactUs');
const getInTouch = require('../models/getInTouch');
const reachOut = require('../models/reachOut');
const demoRequest = require('../models/demoRequest');
const Blog = require('../models/blogs');
const Login = require('../models/blogLogin');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('../middleware/isAuth')
require('dotenv').config();
const sanitizeHtml = require('sanitize-html')

//cloudinary for blogs
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer with Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blogs',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  },
});
const upload = multer({ storage: storage });


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
          sendMailToAdmin(process.env.EMAIL_ID, emailSubjectToAdmin, emailListHTML, latestEmail.email)
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
          const emailSubjectToClient = `Innowide Technologies - Demo Request for ${category}`;
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


//login to post blogs
router.post('/login', (req, res) => {
  Login.findOne({ userName: req.body.userName })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign(
            { id: user._id, userName: user.userName },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
          res.status(200).json({
            message: "Login success",
            userName: user.userName,
            token: token
          })
        }
        else {
          res.status(404).json("You are not allowed to Login")
        }
      }
      else {
        res.send("User not found")
      }
    })
});

//register
// var hpass;
// router.post('/register',(req,res)=>{
//   Login.findOne({userName:req.body.userName})
//   .then((userName)=>{
//     if(userName){
//       res.send('User already exist')
//     }
//     else{
//       hpass=bcrypt.hashSync(req.body.password,8);
//       var newUser= new Login({
//         userName:req.body.userName,
//         password:hpass,
//       });
//       newUser.save()
//       .then((user)=>{
//         res.send("User registered successfully")
//       })
//       .catch((err)=>res.send(err))
//     }
//   })
//   .catch((err)=>res.send(err))
// });


//post blogs
router.post('/blogs', isAuthenticated, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  };
  const { title, tags, description } = req.body;
  const sanitizedDescription = sanitizeHtml(description);

  const image = req.file.path;
  
  const blog = new Blog({ title, tags, description:sanitizedDescription, image });
  blog.save()
    .then(() => res.status(201).json('Blog posted successfully!'))
    .catch((err) => res.status(500).json(`Error saving blog: ${err.message}`));
});

//edit blog
router.put('/blogs/:id',isAuthenticated,(req,res)=>{
  var id=req.params.id;
  var update=req.body;

  if (update.description) {
    update.description = sanitizeHtml(update.description);
  }
  Blog.findByIdAndUpdate(id, update, { new: true })
  .then((blog)=>res.status(200).send(blog))
  .catch((err)=>res.status(404).send(err))
});

//get all blogs
router.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => res.status(200).json(blogs))
    .catch((err) => res.status(500).send(`Error retrieving blogs: ${err.message}`));
});

//delete a blog
router.delete('/blogs/:id',isAuthenticated,(req,res)=>{
  var id=req.params.id;
  Blog.findByIdAndDelete(id)
  .then((blog)=>{
    if(blog){
      res.send("Blog deleted successfully")
    }
    else{
      res.send("No blog found")
    }
  })
  .catch((err)=>res.send("Invalid blog ID"))
});

//get blog by id
router.get('/blogs/:id', (req,res)=>{
  var id= req.params.id;
  Blog.findOne({_id:id})
  .then((blog)=>res.send(blog))
  .catch((err)=>res.send("No blog found", err))
});


module.exports = router;
