import { useState } from 'react';

const Register = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();

        // Validación 1: Ningún campo esté vacío
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validación 2: Password con al menos 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        // Validación 3: Confirmacion de password y la confirmación deben ser iguales
        if (password !== confirmPassword) {
            alert('El password y la confirmación de la contraseña debe ser iguales');
            return;
        }

        
        alert('¡Registro exitoso!')

        //limpiar los campos
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='container mt-5 mb-5' style={{ maxWidth: '400px' }}>
            <h2 className='mb-4'>Register</h2>
            <form onSubmit={handelSubmit}>

                {/* email */}
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* password */}
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* confirmación de password */}
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-dark w-100'>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;