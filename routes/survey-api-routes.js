//pull in our sequelize models
var db = require("../models");
//This appears to be unnecessary
var fs = require('fs');
//used to load the awsconfig
var path = require('path');
//binary data to base64-encoded asci -- we use this to convert the image we get from aws
//into an image we can send to the js (uploadImage.js) and then display
var btoa = require('btoa');

//this section loads aws and sets up the path and bucket we use
//-----------------------------------------------------------------------------
var AWS = require('aws-sdk');

AWS.config.loadFromPath('config/awsconfig.json');

s3 = new AWS.S3({apiVersion: '2006-03-01'});
var s3Bucket = new AWS.S3( { params: {Bucket: 'immigrationportalphotoid'} } );
//-----------------------------------------------------------------------------


const sequelize = require("../models").sequelize;

module.exports = function(app) {
    app.get("/api/surveyList", function(req, res) {
        db.User.findAll({
            where: {
                completedSurvey: true
            },
            order: [['updatedAt', 'ASC']]
        }).then(function(data) {
            res.json(data);
        });
    });

    app.post("/api/individual_survey", function(req, res) {
        console.log(req.body);
        db.Survey.findOne({
            where: {
                email: req.body.email
            }
        }).then((data) => {
            res.json(data);
        })
    })

    app.get("/api/individual_survey/:email", (req, res) => {
        db.Survey.findOne({
            where: {
                email: req.params.email
            }
        }).then((data) => {
            res.json(data);
        })
    })

    app.post("/user", function(req, res) {
        console.log(req.body);
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((data) => {
            // console.log(data);
            //console.log(data.dataValues);
            if (data != null) {
                res.json(data.dataValues);
            } else { //if data DOES equal null, create user
                console.log("data is null");
                // creates a user in our DB if not one yet, then returns it
                db.User.create({
                    email: req.body.email
                }).then((data) => {
                    res.json(data.dataValues);
                })
            }
        })
    });

    app.post("/survey", (req, res) => {
        console.log(req.body);
        db.Survey.create({
            email: req.body.email,
            last_name: req.body['Family/last name:'],
            first_name: req.body['Given/first name:'],
            middle_name: req.body['Middle name:'],
            address: req.body['Address'],
            apt_no: req.body['Apartment #'],
            city: req.body.City,
            zip: req.body['Zip Code'],
            date_of_birth: req.body['Date of birth'],
            country_of_birth: req.body['Country of Birth'],
            country_of_citizenship: req.body['Country of Citizenship'],
            social_security_num: req.body['Social security number, if you have one'],
            a_number: req.body['A-Number'],
            date_of_last_arrival: req.body['Date of last arrival'],
            i94_arrival_departure_record_number: req.body['I-94 Arrival-Departure Record Number'],
            current_uscis_status: req.body['Current USCIS Status'],
            status_expires_on: req.body['USCIS state expires on']
        }).then((data) => {
            console.log("finished passing survey data to mysql");
            db.User.update({
                completedSurvey: true
            }, {
                where: {
                    email: req.body.email
                }
            })
        });
        res.json(req.body);
    })



    app.post('/api/findImage', (req,res)=> {

        //Requests require the bucket(app) we're requesting from and image name(user email)
        var params = {
            Bucket: 'immigrationportalphotoid',
            Key: req.body.email, 
        };

        //takes the image from the server and converts it
        function encode(image){
            var str = image.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
            return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
        }

    
            //send a request to aws
        s3.getObject(params, function(err, data) {
            if (err){
                console.log('Image does not exist')
                res.json({});
                return;
            }
                console.log('Image sent succesfully');

                //send the image that was returned (data.Body) to be encoded so it can be displayed
                var encodedImage = encode(data.Body);
                //send the image to our javascript (uploadImage.js)
                res.json(encodedImage);           // successful response
            });
    })

    app.post('/api/uploadImage', (req,res) => {

        //remove javascript helpers
        buf = new Buffer(req.body.image.replace(/^data:image\/\w+;base64,/, ""),'base64')
        //all of the input needed for aws
        var data = {
            Key: req.body.email, 
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
        };
        //we're pushing to the bucket we define at the top of the page
        s3Bucket.putObject(data, function(err, data){
            if (err) { 
                console.log(err);
                console.log('Error uploading data: ', data); 
            } else {
                console.log('succesfully uploaded the image!');
            }
        });
    })
};