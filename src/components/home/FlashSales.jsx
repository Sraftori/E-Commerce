import Products from '../products/Products';

function FlashSales() {
    return (
        <>
        <section className="flash-sales flex flex-col gap-12 max-w-page mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-medium text-black">Flash Sales</h2>
            <a href="#">View All</a>
          </div>
        
        <div className="flex gap-5">
        <Products title="Shoulder Bag" price={50} rate={4} discount={40}/>
        <Products title="Laptop" price={1000} discount={50}/>
        <Products />
        <Products />
        </div>
        </section>
        </>
    )
}
export default FlashSales;