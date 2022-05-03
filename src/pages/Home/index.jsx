import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/thunks";
import { produtos } from "../../products/productsArray";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const [products] = useState(produtos);

  return (
    <div className="vitrine">
      {products.map((product, index) => (
        <li key={index}>
          <figure>
            <img src={product.image} alt="" />
          </figure>
          <h5>{product.name}</h5>
          <div>
            <span>R$: {product.price.toFixed(2)}</span>
            <button
              type="button"
              onClick={() => dispatch(addToCartThunk(product))}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default Home;
