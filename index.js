import express from "express";

const app = express();
const PORT = 3000;

//Sirve los archivos de "public" al frontend
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});