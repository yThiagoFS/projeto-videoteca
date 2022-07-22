const express = require('express')
const routes = express.Router()

const VideoController = require('./controllers/VideoController');
const VideosMIddlewares = require('./middlewares/VideosMIddlewares');

routes.get("/videos", VideoController.index)

routes.post("/videos", VideoController.store);

routes.put("/videos/:id", VideosMIddlewares.validateId, VideoController.update)

routes.delete("/videos/:id", VideosMIddlewares.validateId, VideoController.delete)

routes.patch("/videos/:id", VideosMIddlewares.validateId, VideoController.updateLike)



module.exports = routes;
