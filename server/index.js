const express = require('express');
const app = express();
require('./config/passport-setup'); // passport authentication setup
const cookieSession = require('cookie-session');
const LoginRoutes = require('./routes/LoginRoutes')
const cors = require('cors');


app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
  }))
  
app.use(cors());


app.use('/api', LoginRoutes);


app.listen(3000 , () => {
    console.log("Server Running on port 3000");
});
  