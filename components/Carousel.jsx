export function Carousel() {
  return (
    <div className="carousel w-full md:h-[85vh] sm:h-[50vh]">
      <div id="slide1" className="carousel-item relative w-full h-100">
        <div className="hero items-left" style={{backgroundImage: "url('/public/shop-hero.img')"}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-left text-neutral-content">
            <div>
              <div className="text-left ">
                <h1 className="mb-5 text-[72px] font-black">Summer Value Pack</h1>
                <p className="mb-5"></p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-transparent">❮</a>
          <a href="#slide2" className="btn bg-transparent">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn bg-transparent">❮</a>
          <a href="#slide3" className="btn bg-transparent">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn bg-transparent">❮</a>
          <a href="#slide4" className="btn bg-transparent">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn bg-transparent">❮</a>
          <a href="#slide1" className="btn bg-transparent">❯</a>
        </div>
      </div>
    </div>
  );
}
