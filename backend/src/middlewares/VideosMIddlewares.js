const { validate: isUIID } = require("uuid")
const Video = require("../Models/Video")

module.exports = {
    async validateId(request, response, next){
        const { id } = request.params

        if(!isUIID(id)){
            return response.status(400).json({ error: "Invalid ID."})
        }

        try{
            const video = await Video.findById(id)
            response.video = video;
            if(!video) return res.status(404).json({ error: "Video not found."})
        }catch(err){
            return response.status(500).json({ error: err.message })
        }
        next()
    }
}