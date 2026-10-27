import logo from '../../assets/Logo.svg';
import promoLogo from '../../assets/Men cosmetic advert.svg';
import signIn from '../../assets/sign in.png';
import favourites from '../../assets/favorides.png';
import shop from '../../assets/card.png';

function HeaderFooter() {
    return (
        <>
        <header className="w-full flex flex-col">
        
        <div className="w-full bg-white px-16 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-2xl font-bold text-black">Luminae</h1>
          </div>
        
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-1.5 w-80">
          <input
          type="text"
          placeholder="Search for products"
          className="flex-1 text-xs text-black placeholder:text-gray-400 outline-none"
          />
          <button className="flex items-center gap-1 text-xs text-gray-700 hover:text-black shrink-0">
            <span>All categories</span>
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="w-[1px] h-4 bg-gray-200 mx-2.5" />
            <button type="button" className="text-gray-500 hover:text-black">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
          </button>
          </div>
        
          <div className="flex items-center gap-8 text-sm text-gray-500">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#blog" className="hover:text-black">Blog</a>
          <a href="#contact" className="hover:text-black">Contact us</a>
          <a href="#help" className="hover:text-black">Help & Support</a>
          </div>
        
          <div className="flex items-center gap-4 text-gray-400">
          <a href="#ig" className="hover:text-black">IG</a>
          <a href="#FB" className="hover:text-black">FB</a>
          <a href="#TG" className="hover:text-black">TG</a>
          </div>
        
        </div>
        
        <div className="w-full bg-gray-800 text-white px-16 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 font-bold text-sm">
              <span>☰ Categories</span>
            </button>
            <button className="flex items-center gap-1 text-gray-300">USD ⌄</button>
            <button className="flex items-center gap-1 text-gray-300">English ⌄</button>
          </div>
        
          <div className="w-[1px] h-7 bg-gray-700" />
        
          <div className="flex items-center gap-3">
            <img src={promoLogo} alt="Promo" className="w-12 h-10 object-cover rounded" />
          </div>
        
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-white">Weekly Men's Toiletries Coupons.</span>
            <span className="text-[11px] text-gray-400">We extend exclusive discounts to our male clientele</span>
          </div>
        
          <div className="w-[1px] h-7 bg-gray-700" />
        
          <div className="flex items-center gap-6 text-gray-200">
            <button className="flex items-center gap-1.5 hover:text-white">
              <span>
                <img src={signIn} alt="Sign In" className="w-4 h-4 object-contain" />
              </span>
              <span>Sign in</span>
            </button>
            <button  className="flex items-center gap-1.5 hover:text-white">
              <span>
                <img src={favourites} alt="Favourites" className="w-4 h-4 object-contain" />
              </span>
              <span>Favorites</span>
            </button>
            <button  className="flex items-center gap-1.5 hover:text-white">
              <span>
                <img src={shop} alt="Card" className="w-4 h-4 object-contain" />
              </span>
              <span>Card</span>
              <span className="bg-emerald-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        
        
        </div>
        
        </header>
        </>
    )
}

export default HeaderFooter;