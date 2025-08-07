//check username, password in post(login) request
//if exists create new jwt
//send back to frontend

//setup authentication so only the users with jwt can access the dashboard

const CustomAPIError = require('../errors/custom-error')

const login = async(req,res)=>{
    const {username, password}=req.body;

    if(!username || !password){
        throw new CustomAPIError('Please provide email and password',400)
    }

    console.log(username,password);
    res.send('Fake Login/Register/Signup Route');
}

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello,John Doe`,secret:`Here is your authorized data, yourlucky number is ${luckyNumber}`})
}

module.exports = {
    login,dashboard
}