import chalk from "chalk";
import app from "./app"
import getAllCharacters from "./endpoints.ts/getAllCharacters";

app.get("/character", getAllCharacters)
