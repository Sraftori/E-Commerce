import Products from '../products/Products';

function FlashSales() {

  // L1 => Data
  const products = [
    {id: 1, title: "Shoulder Bag", price: 50, rate: 4, discount: 40},
    {id: 2, title: "Laptop", price: 1000, discount: 50},
    {id: 3, title: "Test Product", price: 100, rate: 0, discount: 0},
    {id: 4, title: "another bag", price: 700, rate: 4, discount: 50},
    {id: 5, title: "another bag", price: 700, rate: 4, discount: 50},
    {id: 6, title: "another bag", price: 700, rate: 4, discount: 50},
    {id: 7, title: "another bag", price: 700, rate: 4, discount: 50},
    {id: 8, title: "another bag", price: 700, rate: 4, discount: 50},
    {id: 9, title: "another bag", price: 700, rate: 4, discount: 50}

  ]
  // L2 => API call
  // L3 => Logic
  // L4 => View
    return (
        <section className="flash-sales flex flex-col gap-12 max-w-page mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-medium text-black">Flash Sales</h2>
            <a href="#">View All</a>
          </div>
        
        <div className="flex gap-5 grid grid-cols-2 sm:grid-cols-4 xs:grid-cols-1">

          {products.map((product) => (
          <Products key={product.id} title={product.title} price={product.price} rate={product.rate} discount={product.discount}/>

          ))}
        
        </div>
        </section>
    )
}
export default FlashSales;