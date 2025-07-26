// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT} locoooooo`);
});