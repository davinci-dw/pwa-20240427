const URL = "http://localhost:3000/data.json";

const mostrarTarjeta = (infusion) => {
    const lista = document.querySelector('.lista');
    const tarjeta = document.createElement('div');
    tarjeta.className="tarjeta"; 
    tarjeta.innerText = JSON.stringify(infusion)
    lista.appendChild(tarjeta);
} 

const mostrarDatos = (datos) => {
    datos.forEach(dato => {
        mostrarTarjeta(dato);
    })
} 

const consultarDatos = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const datosOrdenados = data.datos;
    datosOrdenados.sort((a,b)=> {
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
    })
    return datosOrdenados;
}

consultarDatos().then(datos => {
    mostrarDatos(datos);
})