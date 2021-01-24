const express = require("express");
const app = express();
const PORT = proces.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
