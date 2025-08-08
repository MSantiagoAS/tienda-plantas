function Header({ cartCount }) {
  return (
    <header>
      <h1>🌱 Tienda de Plantas</h1>
      <p>Carrito: {cartCount} productos</p>
    </header>
  );
}

export default Header;
