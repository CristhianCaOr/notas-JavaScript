let persona = {
    nombre  : "Cristhian",
    edad : 18,
    pais : "Colombia",
    saludar: function(){
        return "bien o no" + " "+ this.nombre 
    }
}

console.log(persona.saludar())

