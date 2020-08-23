const express = require("express");
const routes = require('./routes/routes');
const resources = require('./static/resources')

resources.init()

const app = express();

//accept json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

//enabling CORS
app.use((req, res, next) => {
    req.resources = resources
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});



app.use('/favicon.ico', (req, res) => {
    
})
app.use('/', routes);

app.listen('3000', () => {
    console.log('listening on http://localhost:3000')
})
