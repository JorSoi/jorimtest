const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pool = require('node-postgres').Pool;
const pool = new Pool({
    
})






app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/cars', async (req, res) => {
   const db_res = await pool.query("SELECT * FROM cars");
   res.send(db_res);
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
