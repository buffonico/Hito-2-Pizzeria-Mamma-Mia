const Header = () => {
    return (
        <div
            className="text-white text-center py-5 d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundImage: `linear-gradient(rgba(17, 16, 16, 0.7), rgba(26, 5, 5, 0.7)), 
        url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '220px'
            }}
        >
            <h1 className="fw-bold mb-2 display-5">¡Pizzería Mamma Mía!</h1>
            <p className="mb-0 text-light fs-6 fw-light">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr className="w-50 my-3 border-light opacity-25" />
        </div>
    );
};

export default Header;
