let idProducto;
let nombreProducto;
let precioUnitario;

let cantidadProducto;
let subtotal;

let detalleCarrito = "";
let subtotal2;
let flete = 5;
let total = 0;

let seguirComprando;

//Función para calcular el subtotal
function calcularSubtotal( cantidad, precio ){
    return cantidad * precio;
}

alert( "Bienvenido al Carrito de Compra\nRecuerda por compra mayor a $1500 recibe gratis el flete" );

do{
    //Seleccione ID de Producto a Comprar
    idProducto = prompt( "Qué producto deseas agregar?: (Digite el ID del Producto)\nID. Nombre: Precio Unitario\n1. Laptop: $800\n2. Teclado: $15\n3. Mouse: $10\n4. Parlante: $20\n5. Monitor: $150\n6. Impresora: $200\n7. Audífonos: $20" );

    switch( idProducto ){
        case '1':
            nombreProducto = 'Laptop';
            precioUnitario = 800;
            break;
        case '2':
            nombreProducto = 'Teclado';
            precioUnitario = 20;
            break;
        case '3':
            nombreProducto = 'Mouse';
            precioUnitario = 25;
            break;
        case '4':
            nombreProducto = 'Parlante';
            precioUnitario = 30;
            break;
        case '5':
            nombreProducto = 'Monitor';
            precioUnitario = 180;
            break;
        case '6':
            nombreProducto = 'Impresora';
            precioUnitario = 200;
            break;
        case '7':
            nombreProducto = 'Audifonos';
            precioUnitario = 20;
            break;
        default:
            nombreProducto = 'No Existe';
            precioUnitario = 0;
            break;
    }

    //En caso no existe el ID del Producto, volver a preguntar por el ID del Producto
    if( nombreProducto == 'No Existe' ){
        alert( "ID de producto NO Existe" );
        seguirComprando = "si";
        continue;
    }

    //Calcular el Subtotal
    cantidadProducto = parseInt( prompt( "Cantidad a ingresar:", 1 ) );
    subtotal = calcularSubtotal( cantidadProducto, precioUnitario );
    total += subtotal;
    
    //Mostrar el detalle del Carrito
    detalleCarrito += "Producto: " + nombreProducto + " | Precio: $" + precioUnitario + " | Cantidad: " + cantidadProducto + " | Subtotal: $" + subtotal+"\n";
    alert( "Detalle del Carrito:\n" + detalleCarrito );

    //Preguntar si desea seguir comprando
    seguirComprando = prompt("¿Deseas seguir comprando? (Digite SI o NO)").toLowerCase();
    while( seguirComprando !== "si" && seguirComprando !== "no" ){
        seguirComprando = prompt("Opción no válida.\n¿Deseas seguir comprando? (Digite SI o NO)").toLowerCase();
    }

}while( seguirComprando === "si" );

subtotal2 = total;

//Flete
if( total >= 1500 ){
    flete = 0;
}else{
    flete = 5;
    total = subtotal2 + flete;
}

alert( "El Total a Pagar es:\nSubtotal: $" + subtotal2 + "\nFlete: $" + flete + "\nTotal a Pagar: $" + total );
alert( "Gracias por tu Compra!" );