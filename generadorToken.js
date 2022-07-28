importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js');
addEventListener("message", async(e)=>{
    let peticion = await fetch("config.json");
    let json = await peticion.json();
    let seg = 5;
    let fecha = new Date();
    json.marca = parseInt(new String(Date.now()).slice(0, -3)) + seg;
    fecha.setSeconds(fecha.getSeconds() + seg);
    json.token_csrf = CryptoJS.HmacSHA256(fecha.toUTCString(), json.token_csrf).toString();
    postMessage(json);
})