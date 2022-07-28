let CSRF = new Worker("javascriptobfuscator-20220727150917.js");
addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#misDatos");
    let json = {};
    form.addEventListener("submit", (e)=>{
        CSRF.postMessage({});
        e.preventDefault();
        
        let checkboxInput = document.querySelectorAll("input[type='checkbox']");
        let checkboxNames = [];
        checkboxInput.forEach(res => checkboxNames.push(res.name));
        checkboxInput = new Set(checkboxNames);
        checkboxNames = [... checkboxInput];
        let input = new FormData(e.target);
        json = Object.fromEntries(input.entries());
        checkboxNames.forEach(res => json[res] = input.getAll(res));

    })
    CSRF.addEventListener("message", (e)=>{
        form.dataset.csrf = btoa(JSON.stringify(e.data));
        let myHeaders = new Headers();
        myHeaders.append("accept", e.data.marca);
        myHeaders.append("accept", e.data.token_csrf);
        enviar(myHeaders);
    })
    let enviar = async(myHeaders)=>{
        let config = {
            headers: myHeaders,
            method: form.method, 
            body: JSON.stringify(json)
        };
        let peticion = await fetch(form.action, config);
        let texto = await peticion.text();
        console.log(texto);
        form.dataset.csrf = "";
        document.querySelector("#mostrar").innerHTML = texto
    }
})

