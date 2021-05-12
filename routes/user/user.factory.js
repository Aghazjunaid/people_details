module.exports = ({
    User,
    jwt
}) => {


//================Login user==========================================
async function userLogin(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        let opt = req.body;
        const token = jwt.sign({
            username:opt.username
        }, "gsjkah35gsj546b5t",{
            expiresIn: "1h"
        });
        const user = new User(opt);
        const doc = await user.save();
        user._doc["token"] = token;
        return_response.status = 200;
        return_response.message = "User logged in successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}


return {
    userLogin
}

}