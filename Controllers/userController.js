//import user model
const users = require("../Models/userSchema");
const jwt = require("jsonwebtoken")
//register
exports.register = async (req, res) => {
  console.log("inside register functioin");
  const { username, email, password } = req.body;
  console.log(`username:${username}, Email:${email}, password:${password}`);

  try {
    //check already existting user in mongodb -findone()
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(406).json("user alrready exists ...please login"); //this will show in frontend
    } else {
      //register user
      const newUser = new users({
        username,
        email,
        password,
        image: "",
        github: "",
        linkedin: "",
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`error:${err}`);
  }
  // res.status(200).json("register request received")
};

//login
exports.login = async (req,res) =>{
    console.log("inside login fn");
    const {email,password} = req.body
    try{
        //check user 
        const existingUser = await users.findOne({email,password})
        if (existingUser){
            //generate token
            const token = jwt.sign({userid:existingUser._id},"superSecretKey123")
            res.status(200).json({
                existingUser,
                role:"user",
                token
            })
        }else{
            res.status(404).json("incorrect email/password")
        }
    }
    catch(err){
        res.status(401).json(`error:${err}`);

    }


}
