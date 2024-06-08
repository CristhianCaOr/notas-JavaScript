function suma(numero){
    if(numero < 0){
        return 0
    }

    else{
        
        numero = numero + suma(numero - 1)
    
        return numero
    
    }
}

console.log(suma(7))