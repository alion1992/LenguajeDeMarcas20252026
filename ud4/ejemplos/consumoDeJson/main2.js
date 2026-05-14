fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(r => r.json())
.then(datos => { 
    console.log(datos)
    console.log(datos.id)
    console.log(datos.name)
    

    for(let i = 0; i < datos.abilities.length;i++){
        console.log(datos.abilities[i].ability.name)
    }
}
    );