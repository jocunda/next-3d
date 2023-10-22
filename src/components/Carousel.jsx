import React, { useState, useRef } from 'react';

//asset
import Image from 'next/image'
import work1 from "../images/workimage1.jpg"
import work2 from "../images/workimage2.jpg"
import work3 from "../images/workimage3.jpg"
import work4 from "../images/workimage4.jpg"
import work5 from "../images/workimage5.jpg"
import work6 from "../images/workimage6.jpg"
import work7 from "../images/workimage7.jpg"
import blank from "../images/blank.jpg"


const products = [
  {
    id: 9,
    name: "Web FrontEnd-Remix",
    href: "https://github.com/jocunda/myRemixFE",
    imageSrc: work7,
    imageAlt: "Front Remix",
    text: "Frontend that build using light and faster framework remix to have CRUD function, combine with Tailwind css as main styler.",
  },
   {
    id: 8,
    name: "Web BackEnd API- NETCore ",
    href: "https://github.com/jocunda/RicherBE",
    imageSrc: work6,
    imageAlt: "Backend C",
    text: "Backend to support CRUD app, use C# language.",
  },
  {
    id: 7,
    name: "Web FrontEnd-Webpack React ",
    href: "https://github.com/jocunda/RicherGoFE",
    imageSrc: blank,
    imageAlt: "Webpack",
    text: "Frontend app that utilize microFE library such as Lerna and build to have CRUD function.",
  },
  {
    id: 6,
    name: "Web BackEnd API-Express ",
    href: "https://github.com/jocunda/ExpressBE",
    deployhref:"https://express-be-bewzsluhh-jocunda.vercel.app/",
    imageSrc: blank,
    imageAlt: "Express",
    text: "Backend to support CRUD app.",
  },
   {
    id: 5,
    name: "Calculator",
    href: "https://github.com/jocunda/calculator",
    deployhref:"https://jocunda.github.io/calculator/",
    imageSrc: work5,
    imageAlt: "Calculator",
    text: "Basic calculator operation with theme changer for light and dark. Have basic calculator operation such as plus, minus, divide and multiple.",
  },
  {
    id: 4,
    name: "Clock",
    href: "https://github.com/jocunda/clock",
    deployhref:"https://jocunda.github.io/clock/",
    imageSrc: work4,
    imageAlt: "Clock",
    text: "Challenge from Frontend Mentor, that using external APIs to set data based on visitor's location and generate random programming quotes.",
  },
  {
    id: 3,
    name: "Little Lemon",
    href: "https://github.com/jocunda/littlelemonrestaurant",
    imageSrc: work3,
    imageAlt: "Lemon",
    text: "Project from course Front-End Developer by Meta, which requirement is to build website of homepage and reservation form for Little Lemon Restaurant.",
  },
  {
    id: 2,
    name: "Price Grid Component",
    href: "https://github.com/jocunda/FM-price_grid",
    imageSrc: work2,
    imageAlt: "Price",
    text: "Challenge from frontend mentor, to build out the pricing component to the design provided. This can practice CSS feature such as flexbox, grid and responsive web design.",
  },
  {
    id: 1,
    name: "3D Earth",
    href: "https://github.com/jocunda/React-Globe",
    deployhref:"https://jocunda.github.io/React-Globe/",
    imageSrc: work1,
    imageAlt: "Earth",
    text: "Web 3D project that using library such as react-three/drei, react-three/fiber. Simulate earth which surface material, cloudy map, and controlled option.",
  },
]

export default function Carousel() {
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
    <div className="mt-6 py-5 space-x-5 mx-auto overflow-hidden max-w-screen-lg w-auto " ref={carouselRef}>
      <div className="flex items-start space-x-6 snap-x mx-auto">
        {products.map((product) => (
          <div key={product.id} className=" group relative snap-center group-hover:scale-105 group-hover:opacity-75">
            <div className="w-64 h-42 overflow-hidden rounded-md bg-gray-200 ">
                 <Image
                   src={product.imageSrc}
                   alt={product.imageAlt}
                  className="object-cover object-center"
                />
              </div>
            <div className="mt-4">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
              <p className="mb-3 font-normal text-xs text-gray-700">{product.text}</p>
                
              
                <div className="items-center justify-start space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                  <a href={product.href} target="_blank" className="w-full sm:w-auto border border-gray-700 hover:border-purple-700 rounded-lg hover:text-purple-700 inline-flex items-center justify-center px-4 py-2.5">
                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.0184 7.36446C14.1256 6.96436 13.8882 6.55311 13.4881 6.4459C13.088 6.3387 12.6767 6.57614 12.5695 6.97623L9.98131 16.6355C9.8741 17.0356 10.1115 17.4468 10.5116 17.5541C10.9117 17.6613 11.323 17.4238 11.4302 17.0237L14.0184 7.36446Z"/>
                      <path fill="currentColor" d="M16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967C14.6768 8.76256 14.6768 9.23744 14.9697 9.53033L15.1412 9.7019C15.8229 10.3836 16.2797 10.8426 16.5753 11.2301C16.8577 11.6002 16.9216 11.8157 16.9216 12C16.9216 12.1843 16.8577 12.3998 16.5753 12.7699C16.2797 13.1574 15.8229 13.6164 15.1412 14.2981L14.9697 14.4697C14.6768 14.7626 14.6768 15.2374 14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303L16.2387 15.322C16.874 14.6867 17.4038 14.1569 17.7678 13.6798C18.1521 13.1762 18.4216 12.6441 18.4216 12C18.4216 11.3559 18.1521 10.8238 17.7678 10.3202C17.4038 9.84307 16.874 9.31331 16.2387 8.67801L16.0303 8.46967Z" />
                      <path fill="currentColor" d="M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76256 9.32341 9.23744 9.03052 9.53033L8.85894 9.7019C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12618 14.6867 6.59637 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59637 9.84307 7.12617 9.31332 7.7615 8.67802L7.96986 8.46967Z" />
                      <path fill="currentColor" d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" />
                    </svg>
                      <div className="text-left">
                          <div className="-mt-1 font-sans text-sm font-semibold">Code</div>
                      </div>
                  </a>
                 { product.deployhref?<a href={product.deployhref} target="_blank" className="w-full sm:w-auto border border-gray-700 hover:border-purple-700 rounded-lg hover:text-purple-700 inline-flex items-center justify-center px-4 py-2.5">
                      <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="web" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"></path></svg>
                      <div className="text-left">
                          <div className="-mt-1 font-sans text-sm font-semibold">Deploy</div>
                      </div>
                  </a>:""}
              </div>

            </div>
        </div>
          ))}
     
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-36 flex justify-evenly gap-24 items-center">
          <button
        type="button"
        className=" flex cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="flex cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
          </button>      
      
      </div>
        
        
      </div>
    </div>
  );
}
