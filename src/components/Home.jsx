import Header from './Header';
import CardPizza from './Cardpizza';
import { formatNumber } from '../utils/format';

const Home = () => {
    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Napolitana"
                            price={formatNumber(5950)}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img="src\assets\img\napolitana.jpg"
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Española"
                            price={formatNumber(6950)}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img="src\assets\img\Espanola.jpeg"
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Pepperoni"
                            price={formatNumber(6950)}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            img="src\assets\img\pepperoni.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;