const router = require('express').Router();
const userModel = require('../../Model/User/user');
const formidable = require('formidable');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const cloudinary = require('cloudinary');
require('dotenv').config();

//--------Cloudinary--------------

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

//--User-Auth-Route-------------------------------------

//--For-SignUP

router.post('/api/user-register', (request, response) => {

    const form = new formidable.IncomingForm();
    form.parse(request, async(error, fields, files) => {
        
        const { username, password, verifiedPassword } = fields;
        const { profileImage } = files;

        if(!username || !password || !verifiedPassword || !profileImage) {
            return response
            .status(400)
            .json({msg:'All fields are being Mandatory'});
        } 

        const user = await userModel.findOne({username:username})
        if(user){
            return response.status(400).json({msg:'Username already exist'})
        }

        cloudinary.uploader.upload(
            profileImage.path,{ folder:'/twitter-mern-clone/profiles'}, 
            async(error, res) => {
            if(error){
                    return console.log(error);
                }
                const profileImage_url = res.secure_url;

                const salt = await bcrypt.genSalt(15);
                const hasehedPassword = await bcrypt.hash(password, salt);
                const newUser = new userModel({
                    username,
                    password: hasehedPassword,
                    profile_pic: profileImage_url,
                });
                const savedUser = await newUser.save();

                const token = JWT.sign({ id: savedUser._id }, process.env.jwt_secret);

                return response
                    .status(201)
                    .json({ token: token, profile_pic: savedUser.profile_pic });
            }
        )
    });
});

//---For-Login-

router.post('/api/user-login', (request, response) => {

    const form = new formidable.IncomingForm();
    form.parse(request, async(error, fields, files) => {

        const {username, password} = fields

        if(!username || !password){
            return response
                .status(400)
                .json({msg:'All fields are mandatory'})
        }

        const user = await userModel.findOne({username:username})

        if(!user){
            return response
                .status(400)
                .json({msg:'No user with this name'});
        }

        const validatedPassword = await bcrypt.compare(password, user.password);

        if(!validatedPassword) {
            return response
                .status(400)
                .json({msg:'Invalid Credentials'});
        }

        const token = JWT.sign({ id: user._id }, process.env.jwt_secret);

        return response
            .status(200)
            .json({ token:token, profile_pic:user.profile_pic });


    })
})

module.exports = router;