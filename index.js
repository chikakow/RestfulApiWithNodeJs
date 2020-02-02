import express from 'express';
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './src/config';

const log = config.logger;

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.dsn, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    log.info('Successfully connected to MongoDb')
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`You have reached Node ${PORT}`)
});



app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

