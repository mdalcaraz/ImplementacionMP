method = "POST"
url = "https://api.mercadopago.com/pos"

Header = "Authorization : Bearer {Access Token}"


data =
{
    "name": "First POS",
    "fixed_amount": false,
    "store_id": 57662369,
    "external_store_id": "SUC001999adasd", //Dato usado en la creacion de tienda
    "external_id": "SUC001999adasdPOS001",
    "category": 621102
  }


Documentacion= "https://www.mercadopago.com.ar/developers/es/reference/pos/_pos/post"