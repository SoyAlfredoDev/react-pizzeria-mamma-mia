export default function CardPizza({ title, src, price, ingredientes }) {
    return (
        <div className="card p-2" style={{ width: '400px' }}>
            <img src={src} alt={title} className="card-img-top m-0 p-0" />
            <div className="card-body p-0">
                <h5 className="text-start m-2">{title}</h5>
                <hr />
                <div>
                    <p className="m-0 text-dark">Ingredientes</p>
                    <ul className="ingredientes">
                        {
                            ingredientes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <hr />
                <div>
                    <p className="precio">Precio ${price}</p>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn py-1 px-3">Ver Mas</button>
                <button className="btn btn-dark py-1 px-3">Añadir</button>
            </div>
        </div>
    )
}