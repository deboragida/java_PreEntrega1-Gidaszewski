let precio = parseInt (prompt ("Ingresá el precio del producto que figura en el catálogo"));

while (precio) {

        if (precio != 0 && precio != "") {
            alert ("El precio ingresado del producto es: " + precio);
            break;
        } else {
            alert ("No es un valor correcto. Ingrese el precio del producto que figura en el catalogo")
        }  
    }

//Comision para el vendedor
function calcularComision (precio) {
    return (precio * 0.3) 
}

let comisionVenta = calcularComision (precio)
alert ("Tu ganancia es: " + comisionVenta)

//Valor a pagar en Natura
function comisionNatura (precio) {
    return (precio - comisionVenta)
}

let pagoNatura = comisionNatura (precio)
alert ("Debes pagarle a Natura Cosmeticos: " + pagoNatura);