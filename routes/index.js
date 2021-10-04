/*Syed Abdul Imran 301176718 01 October 2021*/
let express = require('express');
let router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects',{ title: "projects",
     AllProjects: [
      {
        Title: "SMARTDHYANA",
        Role: "Developer",
        WebAddress: "https://www.smartdhyana.com/",
        img:"https://smartdhyanablog.files.wordpress.com/2019/08/dhyana_-why-do-you-need-a-device-for-meditation.png",
        description: "Dhyana is a meditation ring that tracks your HRV levels and also calculates your attention. A ring that can put your meditation to the test and show how stressful and relaxed you are during meditation sessions."
      },
      {
        Title: "Amazon",
        Role: "Tech Support Engineer",
        WebAddress: "https://www.amazon.com/",
        img:"/Assets/Amazon.jpg",
        description: "Amazon Inc. is an American multinational conglomerate which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook."
      },
      {
        Title: "Tech Mahindra",
        Role: "Tech Support Specialist",
        WebAddress: "https://www.techmahindra.com/",
        img:"/Assets/Tech_em.jpg",
        description: "Tech Mahindra is an Indian multinational company that provides information technology and business process outsourcing services. A subsidiary of the Mahindra Group, the company is headquartered in Pune and has its registered office in Mumbai."
      },
    ] }
  );
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});
/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});
/* GET Contact submision  page. */
router.post("/contact", function(req, res) {
  console.log(req.body.email);
  console.log(req.body.fname);
  console.log(req.body.lname);
  console.log(req.body.message);
  res.redirect("/home");
});



router.get("/resume",(req, res, next)=>{
    let data =fs.readFileSync('./public/Assets/esume_Imran.pdf');
    res.contentType("application/pdf");
    res.send(data);
});

module.exports = router;
