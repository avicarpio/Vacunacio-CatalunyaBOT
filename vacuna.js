const puppeteer = require ('puppeteer');

const url = 'https://vacunacovid.catsalut.gencat.cat/inici?qtoken=38e71627-ccd7-4a24-bf9c-97bb24e33dce';

//Posa aqui les teves dades personals
const dni = "123456789A";
const mobil = '736485983';
const nom = 'John';
const cognom1 = 'Doe';
const cognom2 = 'Don';
const email = 'johndoe@gmail.com'

async function configureBrowser() {

    const browser = await puppeteer.launch({headless:false, defaultViewport: null, args: ['--start-maximized'] });
    const [page] = await browser.pages();
    await page.setViewport({ width: 1280, height: 720});
    await page.goto(url);

    return page;

}

async function startFill() {
    const page = await configureBrowser();

    await delay(1000);
    
    var enllac = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-error").shadowRoot.querySelector("div > div.subtitle > a")`)).asElement();
    while(enllac == null){
        enllac = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-error").shadowRoot.querySelector("div > div.subtitle > a")`)).asElement();
    }
    enllac.click();
    console.log("Click Enllaç");

    await delay(1000);

    var demanar = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-onboarding").shadowRoot.querySelector("#dismiss-btn").shadowRoot.querySelector("#button")`)).asElement();
    while(demanar == null){
        demanar = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-onboarding").shadowRoot.querySelector("#dismiss-btn").shadowRoot.querySelector("#button")`)).asElement();
    }
    demanar.click();
    console.log("Click Demanar");

    await delay(1000);

    var dniSelect = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#mdc-tab-2").shadowRoot.querySelector("button")`)).asElement();
    while(dniSelect == null){
        dniSelect = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#mdc-tab-2").shadowRoot.querySelector("button")`)).asElement();
    }
    dniSelect.click();
    console.log("Click DNI Select");

    await delay(1000);

    //DNI
    var dniButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#documentID").shadowRoot.querySelector("label > input")`)).asElement();
    while(dniButton == null){
        dniButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#documentID").shadowRoot.querySelector("label > input")`)).asElement();
    }
    dniButton.click();

    await delay(100);

    await page.keyboard.type(dni);
    
    //Mobil
    const mobilButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#phone").shadowRoot.querySelector("label > input")`)).asElement();
    mobilButton.click();

    await delay(100);

    await page.keyboard.type(mobil);

    //Nom
    const nomButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#name").shadowRoot.querySelector("label > input")`)).asElement();
    nomButton.click();

    await delay(100);

    await page.keyboard.type(nom);

    //Cognom
    const cognomButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#surname").shadowRoot.querySelector("label > input")`)).asElement();
    cognomButton.click();

    await delay(100);

    await page.keyboard.type(cognom1);

    //Cognom2
    const cognom2Button = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#surname2").shadowRoot.querySelector("label > input")`)).asElement();
    cognom2Button.click();

    await delay(100);

    await page.keyboard.type(cognom2);

    //Email
    const emailButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#mail").shadowRoot.querySelector("label > input")`)).asElement();
    emailButton.click();

    await delay(100);

    await page.keyboard.type(email);

    await delay(500);

    //Acceptar
    const acceptaButton = await (await page.evaluateHandle(`document.querySelector("body > vaccinapp-app").shadowRoot.querySelector("#pages > vaccinapp-shell").shadowRoot.querySelector("#main-shell-content > appointment-shell").shadowRoot.querySelector("#appointment-shell-content > appointment-user-registration").shadowRoot.querySelector("#accept-btn").shadowRoot.querySelector("#button")`)).asElement();
    acceptaButton.click();
    
    await delay(1000000)

}

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

startFill();

