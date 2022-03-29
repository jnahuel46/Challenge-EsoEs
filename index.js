const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const sequelize = require('./database/db');

const app = express();
const port = process.env.PORT || 3000

require('./database/db');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api', apiRouter);
app.get('/', (req, res) => {
    res.send('test')
});

app.listen(port, () => {
    console.log('Server starter');

    //conectar a la base

    sequelize.sync({ force: false }).then(() => {
        console.log('Connection has been established successfully.');
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    })

});

