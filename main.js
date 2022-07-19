addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method: "GET"
    };
    let peticion = await fetch("https://comfenalcocursos.000webhostapp.com/Peticion_API_servidores_18_07_2022/api.php", config);
    let texto = await peticion.text();
    document.querySelector("#mostrar").innerHTML = texto;
})

