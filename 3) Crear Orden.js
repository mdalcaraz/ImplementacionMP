method = "POST"
url = "https://api.mercadopago.com/instore/orders/qr/seller/collectors/61602083/pos/SUC001999adasdPOS001/qrs"
"https://api.mercadopago.com/instore/orders/qr/seller/collectors/{UserIdDeDashboard}/pos/{external_id de caja}/qrs"

Header = "Authorization : Bearer {Access Token}"

data =
{
    "external_reference": "12345",
    "title": "Product order",
    "notification_url": "http://www.yourserver.com",
    "total_amount": 100,
    "description": "",
    "marketplace_fee": 0.1,
    "items": [
        {
            "sku_number": "A123K9191938",
            "category": "marketplace",
            "title": "Point Mini",
            "description": "This is the Point Mini",
            "unit_price": 100,
            "quantity": 1,
            "unit_measure": "unit",
            "total_amount": 100
        }
    ],
    "cash_out": {
        "amount": 0
    }
}

Documentacion = "https://www.mercadopago.com.ar/developers/es/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/post"