// src/components/Navbar.jsx
import { formatNumber } from '../utils/format';

const Navbar = () => {
    const total = 25000;
    const token = false; // Cambia a true para probar los botones Profile y Logout

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4">
            <div className="container-fluid">
                <span className="navbar-brand fw-bold">¡Pizzería Mamma Mia!</span>

                <div className="d-flex justify-content-between w-100 align-items-center">
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-light btn-sm">🍕 Home</button>

                        {token ? (
                            <>
                                <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
                                <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline-light btn-sm">🔐 Login</button>
                                <button className="btn btn-outline-light btn-sm">🔐 Register</button>
                            </>
                        )}
                    </div>

                    <button className="btn btn-outline-info btn-sm fw-bold">
                        🛒 Total: ${formatNumber(total)}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;