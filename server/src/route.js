const WaterController = require('./controllers/WaterController')
const UserController = require('./controllers/UserController')

module.exports = (app) =>{


    //get all water
    app.get('/waters', WaterController.index)

    //create
    app.post('/water', WaterController.create)

    //edit
    app.put('/water/:waterId' , WaterController.put)

    //delete
    app.delete('/water/:waterId', WaterController.remove)

    //show by id
    app.get('/water/:waterId', WaterController.show)


   //get all user
   app.get('/users', UserController.index)

   //create
   app.post('/user', UserController.create)

   //edit
   app.put('/user/:userId', UserController.put)

   //delete
   app.delete('/user/:userId', UserController.remove)

   //show by id
   app.get('/user/:userId', UserController.show)


}