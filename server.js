//import with es6
import express from 'express';
import routes from './src/routes/contactRoutes.js';
// add connection to mongoose
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// instantiating a mongoose connection
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// await mongoose.connect('mongodb://localhost/timbledb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

routes(app);
                           
app.get('/', (req, res) => 
    res.send(`Node and express is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on ${PORT}`)
);