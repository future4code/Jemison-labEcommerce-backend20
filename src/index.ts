import app from "./app"
import getAllCharacters from "./endpoints.ts/getAllCharacters";
import createCharacter from "./endpoints.ts/createCharacter"

app.get("/character", getAllCharacters)

app.put("/character", createCharacter )