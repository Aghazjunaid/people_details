module.exports = ({
    State,
    District,
    Child,
    utils
}) => {
    //====================Add State=========================================
    async function postState(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            let opt = req.body;
            const state = new State(opt);
            const doc = await state.save();
            return_response.status = 200;
            return_response.message = "State added successfully";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }

    //=====================get state========================================
    async function getState(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            const doc = await State.find({});
            return_response.status = 200;
            return_response.message = "Success";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }


    //=======================Add district===================================
    async function postDistrict(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            let opt = req.body;
            const district = new District(opt);
            const doc = await district.save();
            return_response.status = 200;
            return_response.message = "District added successfully";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }

    //=========================get district================================
    async function getDistrict(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            const doc = await District.find({}).populate("state_id");
            return_response.status = 200;
            return_response.message = "Success";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }

    //===================add child=========================================
    async function postChild(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            let opt = req.body;
            const child = new Child(opt);
            const doc = await child.save();
            return_response.status = 200;
            return_response.message = "Child added successfully";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }

    //=====================get child=======================================
    async function getChild(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            const doc = await Child.find({}).populate("district_id")
            return_response.status = 200;
            return_response.message = "Success";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }

    

    //=====================add child image=================================================
    async function updateChildImage(req, res){
        var return_response = {"status": 200,"message": "Success","data": null}
        try {
            var file = req.file; 
            const child = await Child.findOne({_id: req.params.id});
            if(child){
                var imageUrl = await utils.dropboxUpload(file);
                if(imageUrl) {
                    child.photo = imageUrl;
                    let doc = await child.save();
                    return_response["status"] = 200;
                    return_response["message"] = "success";
                    return_response["data"] = doc;
                } else {
                    return_response["status"] = 400;
                    return_response["message"] = "Invalid request!";
                }
            } else {
                return_response["status"] = 404;
                return_response["message"] = "This product does not exist!";
            }
        } catch (error) {
            return_response["message"] = String(error);
            return_response["status"] = 400;
        }
        return res.status(400).send(return_response);
    }

return {
    postState,
    getState,
    postDistrict,
    getDistrict,
    postChild,
    getChild,
    updateChildImage
}

}