addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#misDatos");
    form.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let json = {};
        let input = Array.from(e.target);
        input.pop();
        input.forEach(res=>{json[res.name] = res.value;});
    



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

