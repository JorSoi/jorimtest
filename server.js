const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pool = require('pg').Pool;
const pool = new Pool({
  host: "ec2-54-163-34-107.compute-1.amazonaws.com",
  database: "d1ffgq0tk1jv51",
  user: "yvudtjxqpguwua",
  port: "5432",
  password: "698c669ee5c7394a8d0b6d1889027057e5eb9a205bec2cbf5bd5d53ccba332e9"
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
