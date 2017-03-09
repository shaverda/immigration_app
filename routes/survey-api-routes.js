var db = require("../models");
var fs = require('fs');
var path = require('path');

var AWS = require('aws-sdk');

AWS.config.loadFromPath('config/awsconfig.json');

s3 = new AWS.S3({apiVersion: '2006-03-01'});
var s3Bucket = new AWS.S3( { params: {Bucket: 'immigrationportalphotoid'} } );

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
        var params = {
            Bucket: 'immigrationportalphotoid', /* required */
            Key: req.body.email, /* required */
        };
        s3.getObject(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });
    })

    app.post('/api/uploadImage', (req,res) => {

        // var uploadParams = {Bucket: 'immigrationportalphotoid', Key: '', Body: ''};
        // var file = req.body;
        // console.log(file);
        // var fileStream = fs.createReadStream(file);
        // fileStream.on('error', function(err) {
        //     console.log('File Error', err);
        // });

        // uploadParams.Body = fileStream;

        // uploadParams.Key = path.basename(file);

        // s3.upload (uploadParams, function (err, data) {
        //     if (err) {
        //         console.log("Error", err);
        //     } if (data) {
        //         console.log("Upload Success", data.Location);
        //     }
        // });

        //new try w/ osei help
        buf = new Buffer(req.body.image.replace(/^data:image\/\w+;base64,/, ""),'base64')
        var data = {
            Key: req.body.email, 
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
        };
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