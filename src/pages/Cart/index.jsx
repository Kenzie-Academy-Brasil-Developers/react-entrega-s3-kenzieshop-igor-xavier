import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const history = useHistory();
  const subtotal = cart.reduce((product, acc) => acc.price + product, 0);
  if (!cart.length) {
    return (
      <div className="vazio">
        <h2>Carrinho vazio!</h2>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h4>Produtos</h4>
      <div className="cartList">
        {cart.map((product, index) => (
          <li key={index}>
            <figure>
              <img src={product.image} alt="" />
            </figure>
            <h6>{product.name}</h6>
            <label>R$: {product.price.toFixed(2)}</label>
          </li>
        ))}
      </div>
      <div className="resumo">
        <h3>Resumo:</h3>
        <p>Quantidade: {cart.length}</p>
        <p>Valor total R$: {subtotal.toFixed(2)}</p>
        <button className="buttons-nav">Finalizar compra</button>
      </div>
    </div>
  );
}
export default Cart;
