const Joi = require('joi');
const CryptoJS = require("crypto-js");

const db = require("../model/user.model");
const sequelize = require('../config/db.config');
// const { mailSend, smsSend } = require('../helper/mail');

const Users = db.userSchema;


const schema = Joi.object({
    // name: Joi.string().min(3),
    // email: Joi.string().min(6).email({ tlds: { allow: false } }),
    // password: Joi.string().min(6),

});
exports.registerUser = (req, res) => {

    const pass = req.body.email;
    console.log("User-->>", pass);

    // console.log("email>.", email);
    // try {
    //     console.log("dsffsd", email);
    //     // console.log("user>>>", Users);

    //     // var ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
    //     // console.log("ciphertext==>>>", ciphertext);

    //     // const { error, value } = schema.validate({
    //     //     email: req.body.email,
    //     //     password: ciphertext
    //     // })
    //     // if (error) throw error;
    //     // if (req.body.isInvite) {
    //     // Users.create({ ...value }).then(data => {
    //     //     mailSend({
    //     //         email: data[0].Email,
    //     //         sub: 'Registration in invission app!',
    //     //         html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    //     //     });
    //     //     return res.status(200).send({ status: true, message: "User registor successfully" });
    //     // }).catch(err => {
    //     //     return res.status(500).send({
    //     //         status: false,
    //     //         message:
    //     //             err.message || "Some error occurred while adding the invited user"
    //     //     });
    //     // });
    //     // } else {
    //     console.log("error");
    //     // Users.findAll({
    //     //   where: { Email: req.body.email },
    //     //   attributes: { exclude: ['Password'] }
    //     // }).then(async data => {
    //     //   if (data.length > 0) {
    //     //     // Update Users in the database
    //     //     delete value.Email
    //     //     const authyRes = await authy.registerUser({
    //     //       countryCode: req.body.country_code,
    //     //       email: req.body.email,
    //     //       phone: data[0].Phone
    //     //     });
    //     //     if (authyRes.success === true) {
    //     //       Users.update({
    //     //         ...value,
    //     //         RegistrationStatus: 1,
    //     //         AuthyId: authyRes.user.id,
    //     //         CountryCode: req.body.country_code
    //     //       }, {
    //     //         where: { Email: req.body.email }
    //     //       }).then(updateData => {
    //     //         mailSend({
    //     //           email: data[0].Email,
    //     //           sub: 'Registration in wandarhome app',
    //     //           html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;"><meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" /><title>Render Health | Confirmation Email - Patient Portal</title><link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet"><style type="text/css">#outlook a{padding:0}body{width:100% !important;-webkit-text;size-adjust:100%;-ms-text-size-adjust:100%;margin:0;padding:0}.ReadMsgBody{width:100%}.ExternalClass{width:100%}.backgroundTable{margin:0 auto;padding:0;width:100%;!important}table td{border-collapse:collapse}.ExternalClass *{line-height:115%}</style><style type="text/css">@media only screen and (max-width: 600px){.col{display:block !important;text-align:center !important;width:100% !important;box-sizing:border-box !important;-webkit-box-sizing:border-box !important}.leftAlign{text-align:left !important}.bottomPadding{padding:0 0 20px 0 !important}.removePadding{padding:0 !important}.fullWidth{width:100% !important}.font20{font-size:20px !important}.width25{width:25px !important}.headerPadding{padding:20 25px !important}.signaturePadding{padding:0 25px 50px 25px !important}.hide{display:none !important}.unblockImage{display:inline !important}.contentPadding{padding:0 30px 60px !important}.titleFont{font-size:30px !important;line-height:40px !important}}</style></head><body style="padding:0; margin:0"><table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0" width="100%"><tr><td align="center" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="600" class="fullWidth" align="center"><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="233C4B" style="background-color: #233C4B"><tr><td style="padding: 20px 20px 10px 20px;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td width="33.3%"> &nbsp;</td><td width="33.3%" style="vertical-align: middle; text-align: center;" valign="middle"> <a href="#" style="text-decoration: none;"> <img src="https://i.imgur.com/HuqBe3W.png" border="0" alt="wonderhome" /> </a></td><td width="33.3%" style="vertical-align: middle;" valign="middle"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><table cellpadding="0" cellspacing="0" border="0" align="right"><tr><td style="padding-bottom: 20px; text-align: center;"> <a href="#" style="text-decoration: none;"> <img src="https://i.ibb.co/T0DdDcP/facebook.png" border="0" alt="Facebook" /> </a></td></tr><tr><td style="padding-bottom: 20px; text-align: center;"> <a href="#" style="text-decoration: none;"> <img src="https://i.ibb.co/K2x19xt/twitter.png" border="0" alt="Twitter" /> </a></td></tr><tr><td style="padding-bottom: 0px; text-align: center;"> <a href="#" style="text-decoration: none;"> <img src="https://i.ibb.co/GtxFCJ6/instagram.png" border="0" alt="Instagram" /> </a></td></tr></table></td></tr></table></td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td> <img src="https://i.ibb.co/qYK4VVL/shape.png" border="0" alt="Rounded Shape" width="100%" style="display: block;" /></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="ffffff" style="background-color: #ffffff"><tr><td class="contentPadding" style="padding: 0 13px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px;"><tr><td class="titleFont" style="text-align: center; color: #000000; font-weight: normal; line-height: 50px; mso-line-height-rule: exactly; font-size: 40px; padding-bottom: 20px;"> <span style="color: #01BBAE;">Registration mail</span><br /></td></tr><tr><td style="color: #777777; font-weight: normal; line-height: 21px; mso-line-height-rule: exactly; padding-bottom: 20px;"> <span style="text-align: left;">Hello </span>,<br /><div>Welcome to wonderhome app, you have successfully done your signup in our app, Now you need to do a login into over app and you can findout your all the booking and group related thing in our app</br> Thanks</div><br /></td></tr></table></td></tr><tr><table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="233C4B" style="background-color: #233C4B"><tr><td style="padding: 20px;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><table cellpadding="0" cellspacing="0" border="0" align="center"><tr><td style="padding-right: 20px; text-align: center;"> <a href="#" style="text-decoration: none;"> <img src="https://i.ibb.co/T0DdDcP/facebook.png" border="0" alt="Facebook" /> </a></td><td style="padding-right: 20px; text-align: center;"> <a href="#" style="text-decoration: none;"> <img src="https://i.ibb.co/K2x19xt/twitter.png" border="0" alt="Twitter" /> </a></td><td style="padding-right: 0px; text-align: center;"> <a href="#" style="text-decoration: none;"> <img src="https://i.ibb.co/GtxFCJ6/instagram.png" border="0" alt="Instagram" /> </a></td></tr></table></td></tr></table></td></tr></table></tr><tr><td class="contentPadding" style="padding: 0 30px 50px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px;margin-top: 10px"><tr><td style="text-align: center; color: #777777; font-weight: normal; line-height: 21px; mso-line-height-rule: exactly; padding-bottom: 20px;"> © Wonderhomeapp,<br /> 311 Sundance Cir, Palm Desert, California 92211-3218, United States<br /> <small>If you have any questions or concerns, please email us at david@wanderhome.com</small></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`
    //     //         });
    //     //         smsSend({
    //     //           phone: data[0].Phone,
    //     //           msgBody: "You have successfully done the regisration process into Invision app, please login into app to see upcomming booking"
    //     //         });
    //     //         return res.status(200).send({ status: true, message: "User registor successfully" });
    //     //       }).catch(err => {
    //     //         return res.status(500).send({
    //     //           status: false,
    //     //           message: err.message || "Some error occurred while creating the Users."
    //     //         });
    //     //       });
    //     //     } else {
    //     //       return res.status(400).send({
    //     //         status: false,
    //     //         message: `Getting error while registor user with Twilio authy`
    //     //       });
    //     //     }
    //     //   } else {
    //     //     return res.status(404).send({
    //     //       status: false,
    //     //       message: `User not found with ${req.body.email}`
    //     //     });
    //     //   }
    //     // }).catch(err => {
    //     //   return res.status(500).send({
    //     //     status: false,
    //     //     message: err.message || "Some error occurred while retrieving Users."
    //     //   });
    //     // });
    //     // }



    // } catch (error) {
    //     res.status(500).send({
    //         status: false,
    //         message: error.message || "Some error occurred while registering user"
    //     })
    // }
}