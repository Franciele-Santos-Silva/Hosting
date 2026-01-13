import { fileURLToPath } from "url";
import {dirname} from "node:path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

console.log(__filename, __dirname);
