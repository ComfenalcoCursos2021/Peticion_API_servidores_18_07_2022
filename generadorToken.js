importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js');
(async()=>{
    let peticion = await fetch("config.json");
    let json = await peticion.json();    
    json.marca = new Date(Date.now()).toUTCString();
    console.log(CryptoJS.HmacSHA256("Miguel", "111").toString());
})()