const app = require('./index');

const connect = require('./src/configs/db');

const port = process.env.PORT || 3000;
app.listen(port, async() => {
    await connect();
    console.log(`listening on port ${port}`);
})