import CartWidget from "../CartWidget/CartWidget";
import Categorias from "../Categorias/Categorias";
import Secciones from "../Secciones/Secciones";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Muebles MP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Secciones/>
                            <Categorias/>
                        </ul>
                        <CartWidget cantCarrito={0}/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
