import CardPizza from "./CardPizza"
import Header from "./Header"

export default function Home() {
    const napolitana = 5950
    const precioNapolitana = napolitana.toLocaleString('es-CL')
    const española = 5950
    const precioEspañola = española.toLocaleString('es-CL')
    const pepperoni = 5950
    const precioPepperoni = pepperoni.toLocaleString('es-CL')
    return (
        <>
            <Header />
            <div className="home">
                <CardPizza
                    title="Napolitana"
                    price={precioNapolitana}
                    ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
                    src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                />

                <CardPizza
                    title="Española"
                    price={precioEspañola}
                    ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                />
                <CardPizza
                    title="Pepperoni"
                    price={precioPepperoni}
                    ingredientes={["mozzarella", "pepperoni", "orégano"]}
                    src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                />
            </div>

        </>
    )

}