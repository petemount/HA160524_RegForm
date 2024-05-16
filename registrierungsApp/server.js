const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
    let vorliste = []
    vorliste.push(req.body.vname)
    vorliste.push(req.body.nname)
    vorliste.push(req.body.email)
    vorliste.push(req.body.password)

//const dataString = vorliste.join("");

    fs.appendFile(__dirname + "/nutzerdaten.txt", vorliste.join("\n"), (err) => {
        if (err){
            console.error('Fehler bei Schreiben der Datei!', err);
            return res.status(500).send('Fehler bei Schreiben der Datei');
        }
        res.send('Registrierung erfolgreich!');
    });
});

app.listen(PORT, () => {
    console.log(`Der Server wurde gestartet auf Port: ${PORT}`);
  });
  



