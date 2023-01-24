import Dropdown from "./Dropdown";

const Categorias = () => {
    return (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Muebles de ...
            </a>
            <ul class="dropdown-menu">
                <Dropdown/>
            </ul>
        </li>
    );
}

export default Categorias;
