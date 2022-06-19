const express = require("express")
const cors = require('cors')
const app = express()

require("./configs/mongoose.config")


app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true}));


const Routes = require("./routes/product.routes")
Routes(app)



app.listen(8000, () => console.log("The server is all fired up on port 8000"));

