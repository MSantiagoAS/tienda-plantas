function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside>
      <h2>🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p>Vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      )}
    </aside>
  );
}

export default Cart;
