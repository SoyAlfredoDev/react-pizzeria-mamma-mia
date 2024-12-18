export default function Navbar() {
    const total = 2500;
    const totalFormatateado = total.toLocaleString("es-CL");
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        {
                            token ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Logout</a>
                                    </li> </>) : (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Register</a>
                                    </li></>
                            )
                        }







                    </ul>
                    <span className="navbar-text text-white">
                        Total ${totalFormatateado}
                    </span>
                </div>
            </div >
        </nav >


    )
}