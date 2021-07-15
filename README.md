# Vacunació Catalunya BOT

## Instalació

Copia el repositori al teu ordinador

`git clone https://github.com/avicarpio/Vacunacio-CatalunyaBOT.git`

Entra a la carpeta que s'acaba de crear

`cd Vacunacio-CatalunyaBOT`

Instala les dependencies (Puppeteer)

`npm install`

## Configuració

Obre l'arxiu `vacuna.js` amb el teu editor de textos preferit i canvia les dades personals d'exemple per les teves.

```javascript
//Posa aqui les teves dades personals
const dni = "123456789A";
const mobil = '736485983';
const nom = 'John';
const cognom1 = 'Doe';
const cognom2 = 'Don';
const email = 'johndoe@gmail.com'
```

## Execució

Executa el script amb la comanda:

`node vacuna.js`

No toquis teclat ni ratolí fins que no arribis a la pantalla on has de posar el codi que t'han enviat al mòbil.
