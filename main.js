let csrf = new Worker("generadorToken.js");
addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#misDatos");
    form.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let checkboxInput = document.querySelectorAll("input[type='checkbox']");
        let checkboxNames = [];
        checkboxInput.forEach(res => checkboxNames.push(res.name));
        checkboxInput = new Set(checkboxNames);
        checkboxNames = [... checkboxInput];
        let input = new FormData(e.target);
        let json = Object.fromEntries(input.entries());
        checkboxNames.forEach(res => json[res] = input.getAll(res));
       
        



        let myHeaders = new Headers();
        myHeaders.append("HTTP_URI", location.href);

        let config = {
            headers: myHeaders,
            method: form.method, 
            body: JSON.stringify(json)
        };
        let peticion = await fetch(form.action, config);
        let texto = await peticion.text();
        document.querySelector("#mostrar").innerHTML = texto;


    })
})

