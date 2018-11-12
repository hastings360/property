const express = require('express');
const router = express.Router();
//const multer = require('multer');
//const MongoClient = require('mongodb').MongoClient;//db API
const url = "mongodb://localhost:27017";//db connection string
const fs = require('fs');
const rxjs = require('rxjs');

const nodemailer = require('nodemailer');//mail API
//const ObjectId = require('mongodb').ObjectId;
//let data;//db API

/*root API
router.get('/', (req, res) => {
  res.send('photoStorage api works');
});*/

//reusable transporter object for mail
const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'hastingsserve@gmail.com',
        pass: '577061Ha!'
      }
});
//send mail using the object passed in
function SendMyMail(data){
      //iterates through contents and assigns string value to contents variable
      let contents = new String;
      for(let y in data){
          contents += `<p>${data[y]}</p>`;
      };

      const mailOptions = {
        to: 'hastingsserve@gmail.com',
        html: `<h1>Property Message</h1> ${contents}`
      };

      //sends
      return new Promise((resolve)=>resolve(transporter.sendMail(mailOptions)));
}

//mail API
router.post('/contact', (req, res) =>{
  console.log(req.body);
  let mailData = req.body;

  SendMyMail(mailData)
    .then((success) =>{
      console.log(' mail sent successfully');
      success.accepted = 'destination email removed';
      res.send(success);
    })
    .catch(error => {
      console.log(error + " on sending mail");
      res.status(500).send('sending mail on server failed');
    });

});

//search photos API - search for specific photo - limit of 30
/*router.get('/photo-search30', (req, res) =>{
  MongoClient.connect(url)
  .then(client =>{
    const db = client.db('photoStorage');
    db.collection('photos').find({ $text: { $search: regexSearch }}).sort({timeStamp: -1}).limit(30).toArray()
      .then(result => {client.close();return res.send(result)})
      .catch(error => {client.close(); console.log(error); return res.sendStatus(500);});
  })
  .catch(error => {console.log(error);return res.sendStatus(500);});
});*/

module.exports = router;
