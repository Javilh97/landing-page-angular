export const productsList: Product[] = [
    {id:1, name: 'Detergente', price: 10, description: 'El detergente es una sustancia que tiene la propiedad químico-física de peptizar'},
    {id:2, name: 'Suavizante', price: 15, description: 'Se trata de un producto que contiene ingredientes especialmente formulados para ayudar a suavizar las fibras de los tejidos'},
    {id:3, name: 'Cloro', price: 5, description: 'El cloro es un elemento químico de número atómico 17 situado en el grupo de los halógenos (grupo VIIA) de la tabla periódica de los elementos.'},
    {id:4, name: 'Limpia vidrios', price: 12},
    {id:5, name: 'Desengrasante', price: 20, description: 'El desengrasante se define como aquella sustancia de naturaleza neutra, ácida o alcalina capaz de eliminar grasas y aceites'},
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}