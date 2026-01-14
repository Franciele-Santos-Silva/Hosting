import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname } from "node:path";
import { app } from "./server.js";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
