import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  function redirecionaHome() {
    history.push("/");
  }
  function redirecionaCart() {
    history.push("/cart");
  }
  return (
    <nav className="header-nav">
      <h1>Kenzie shop</h1>
      <div>
        <button className="buttons-nav" onClick={redirecionaCart}>
          Carrinho
        </button>
        <button className="buttons-nav" onClick={redirecionaHome}>
          Inicio
        </button>
      </div>
    </nav>
  );
}
export default Header;
