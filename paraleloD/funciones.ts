function solicitarLicencia(nombre:string, motivo:string, fecha:string,carrera:string): string {
  return "aceptada";
}

solicitarLicencia(
  "ana", "salud", "23-03", "sis inf"
)

function funcion (a:string, b: boolean):void {
}

function solicitarPedido(
  nombre: string, precio:number, horaPedido:string, cantidad: number
): number {
  return 1;
}

solicitarPedido("pollo", 15, "4:00 pm", 3)


// Crear una funcion llamada vender producto tendra de parametros el producto, precio y el valor de retorno sera un boolean

function venderProducto(
  producto:string,
  precio: number,
): boolean {
  return false;
}

venderProducto("Chocolate", 15);






function destruirEnemigo(
  nombreEdificio:string,
  cantBombas: number,
  fecha:string,
): string {
  return "destruido";
}

destruirEnemigo("SJ", 100, "03-26-90")

function comprarMoto(
  marca:string,
  precio: number,
  modelo: string,
  fechaCompra: string
): number {
  return 15000;
}

comprarMoto( "HONDA", 15000, "XR150", "02-may-2026" )


function prepararSopaFamiliar(
  nombre: string,
  cantPlatos: number,
  minCoccion: number,
): number {
  return 0;
}

function irAlColegio(
  horaIngreso: string,
  precioPasaje: number,
  dirColegio: string,
): boolean {
  return false;
}
