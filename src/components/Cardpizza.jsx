const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img src={img} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
            <div className="card-body text-center p-3">
                <h5 className="card-title fw-bold text-start mb-3">Pizza {name}</h5>
                <hr className="mt-0 mb-3" />

                <p className="card-text text-secondary small mb-1">Ingredientes:</p>
                <p className="card-text small text-dark mb-3">
                    🍕 {ingredients.join(", ")}
                </p>

                <hr className="mb-3" />

                <h4 className="fw-bold text-dark fs-5 mb-3">Precio: ${price}</h4>

                <div className="d-flex justify-content-around">
                    <button className="btn btn-outline-dark btn-sm px-3">Ver Más 👀</button>
                    <button className="btn btn-dark btn-sm px-3">Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;