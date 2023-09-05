const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route = require('./routes')

const app = express();
const port =3000;

const db = require('./config/db');


// HTTP logger
app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//connect database
db.connect();


app.use(methodOverride('_method'));

//Template engine
app.engine('handlebars',handlebars.engine(
    {
        helpers: {
            sum: (a, b) => a+b,
        }
    }
));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));



app.listen(port, () => {
    console.log('Sucessfull!!');
});

//Route init
route(app);