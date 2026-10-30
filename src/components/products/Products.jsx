import bag from '../../assets/photo bag.png';
import star from '../../assets/Star 2.svg';


function Products({title = "Test Product", price = 100 , rate = 0 , discount = 0}) {
  // L1 => Data
  // L2 => Effects
  // L3 => Logic
  // L4 => View
  const discounted = price - (price * discount / 100);
    return(
        <>
          <div className="flex gap-5">
        <div className="card flex flex-col w-75 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="card-top flex flex-col items-center gap-1.5 py-4">
            <p className="text-sm font-extrabold text-gray-400">Deal of the Day</p>
             <div className="card-date flex flex-col items-center">
            <div className="card-date-time flex items-center gap-1.5 text-lg font-extrabold text-gray-800">
              <span>12</span>
              <span>:</span>
              <span>43</span>
              <span>:</span>
              <span>12</span>
            </div>
            <div className="card-date-labels flex items-center gap-3 text-xs font-extrabold text-gray-400">
              <span>hour</span>
              <span>min</span>
              <span>sec</span>
            </div>
          </div>
        
        </div> 
        
        <div className="card-mid flex items-center justify-center h-40.5">
          <img className="h-32 w-60 object-cover"
           src={bag} alt="Bag" />
        </div>
        
        <div className="card-bottom flex flex-col gap-1.5 py-4 px-18.5">
          <h3 className="text-base font-bold text-gray-800">
            
            {title}
            
          </h3>
          <p className="text-xs text-gray-600">Shoulder bag-White-Plain</p>
          <div className="card-bottom-rating flex">
            <div className="flex items-center gap-px">
            <img className="size-3" src={star}/>
            <img className="size-3" src={star}/>
            <img className="size-3" src={star}/>
            <img className="size-3" src={star}/>
            </div>
            <span className="flex gap-1 text-xs text-gray-500">{rate}
            </span>
        
          </div>
          <div className="card-bottom-price flex items-center justify-between gap-0.3">
            <span className="text-sm font-bold text-red-500">

            {discounted}$

            </span>
            <del className="text-sm text-gray-500">{price}$</del>
            <span className="sale py-0.75 px-1.5 rounded-xs bg-red-off text-[8px] font-semibold text-white">{discount}%</span>
          </div>
          </div>
        
        
        </div>
        </div>
        </>
    )
}

export default Products;