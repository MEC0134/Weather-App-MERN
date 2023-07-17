const express = require("express");


const app = express();


app.get("/api", (req, res) => {
  res.json({"favoriteFood": ["Sarimsakli Kofte", "Ciger Sis", "Adana Kebab"] });
});
















// React will run on port: 3000
app.listen(3001, () => { console.log(`Server listening on 3001`); });