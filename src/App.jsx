import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from './components/Login';
import Register from './components/Register';

import "./App.css";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className='flex-grow-1'>
                
                {/* <Home /> */}
                <Register />
                {/*<Login /> */}
                
            </div>
            <Footer />
        </div>
    );
}

export default App;