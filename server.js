const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env?.RUNNING_PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on ");
});
