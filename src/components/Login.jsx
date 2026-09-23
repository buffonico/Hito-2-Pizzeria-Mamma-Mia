import { useState } from "react";

const Login = () => {
    // Estados para email y password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Evento submit del login
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación 1: Sin campos vacios
        if (email.trim() === '' || password.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validación 2: Password con al menos 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        
        alert('¡Login exitoso!');

        // Limpio los campos
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>

                {/* email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;