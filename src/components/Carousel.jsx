import React, { useState, useRef } from 'react';



function Carousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  return (
    <div className="mt-6 py-5 space-x-5 mx-auto overflow-hidden" ref={carouselRef}>
      <div className="flex items-start space-x-6 snap-x ">
         {products.map((product) => (
            <div key={product.id} className="group relative snap-center">
              <div className="w-64 h-96 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
     
        <div >
          <button
        type="button"
        className="absolute bottom-4 right-3/4 z-50 flex translate-x-3/4 gap-2 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute bottom-4 left-3/4 z-50 flex -translate-x-3/4 gap-2 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
        </button>
        </div>
        
        
      </div>
    </div>
  );
}

export default Carousel;