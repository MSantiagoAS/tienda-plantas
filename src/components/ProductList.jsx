import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Cactus", price: 20000 },
    { id: 2, name: "Suculenta", price: 15000 },
    { id: 3, name: "Bonsái", price: 80000 },
  ];

  return (
    <section>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </section>
  );
}

export default ProductList;
