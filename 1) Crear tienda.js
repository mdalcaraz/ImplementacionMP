method = "POST"
url = "https://api.mercadopago.com/users/61602083/stores"
"https://api.mercadopago.com/users/{UserIdDeDashboard}/stores"

Header = "Authorization : Bearer {Access Token}"

data =
{
    "name": "Sucursal Instore",
    "business_hours": {
        "monday": [
            {
                "open": "08:00",
                "close": "12:00"
            }
        ],
        "tuesday": [
            {
                "open": "09:00",
                "close": "18:00"
            }
        ]
    },
    "external_id": "SUC001999adasd",
    "location": {
        "street_number": "3039",
        "street_name": "Caseros",
        "city_name": "Belgrano",
        "state_name": "Capital Federal",
        "latitude": -32.8897322,
        "longitude": -68.8443275,
        "reference": "3er Piso"
    }
}

Documentacion = "https://www.mercadopago.com.ar/developers/es/reference/stores/_stores_id/get"