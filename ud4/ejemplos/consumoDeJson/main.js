
//Aqui accedemod directamente a un atributo del json.
fetch("jsonDescargados/chuckNorris.json")
.then(r => r.json())
.then(datos => { 
    console.log(datos)
    console.log(datos.id)});
  


//Aqui leemos datos mas completos, un json que tiene objetos dentro de objetos. Por lo que tendremos que recorrer
//  el json conociendo su estructura
fetch("jsonDescargados/pokemon.json")
.then(r => r.json())
.then(datos => { 
    console.log(datos)
    console.log(datos.id)
    console.log(datos.abilities[0].ability.name)
    
    for (let i =0;i < datos.abilities.length; i++){
        console.log(datos.abilities[i].ability.name)
    }
        

    
    
});


