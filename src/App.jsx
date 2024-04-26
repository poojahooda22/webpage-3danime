
import './App.css'
import Navbar from './components/Navbar'
import Orange from './components/orange/Orange'
import Pineapple from './components/pineapple/Pineapple'
import { useEffect } from 'react';
import gsap from 'gsap';
// import Cursor from './components/cursor/Index';

function App() {

  const tl = gsap.timeline({defaults: {duration: 2, ease: 'power3.inOut'}, paused: true});
  useEffect(() => {
    // const $ = (e) => document.querySelector(e);
    const w = gsap.getProperty('.can', 'width');

    const toggleBtn = document.querySelector('.btn');
    
    tl.to('.orange > h1', {
        xPercent: 100,
    }, 'a')
    tl.to('.orange > div > img:not(.can)', {
        xPercent: 150,
        rotate: '90deg',
    }, 'a')
    // tl.to('.orange .can, .orange .clippyMask', {
    //     x: '-4vw',
    // }, 'a')
    tl.to('.orange .clippyMask > div', {
        x: -w*2,
    }, 'a')
    tl.to('.orange', {
        clipPath: 'inset(0 100% 0 0)',
    }, 'a')

    tl.from('.pineapple > h1', {
        xPercent: -100,
    }, 'a')
    tl.from('.pineapple > div > img:not(.can)', {
        xPercent: -150,
        rotation: -90,
    }, 'a')
    // tl.from('.pineapple .can, .pineapple .clippyMask', {
    //     x: '4vw',
    // }, 'a')
    tl.from('.pineapple .clippyMask > div', {
        x: w*2,
    }, 'a')

    let count = 1;
    toggleBtn.addEventListener('click', () => {
      count ? (tl.play(), count--) : (tl.reverse(), count++);
    }) 
  })
 

  return (
    <main className='w-full h-screen overflow-hidden relative'>
      {/* <Cursor/> */}
      <Navbar/>
      <Orange/>
      <Pineapple/>
      <div className='btn absolute bottom-[16vw] left-[36vw] sm:bottom-[2.3vw] sm:left-1/2 sm:-translate-x-1/2 cursor-pointer'>
        <button 
          className='sm:text-[1.2vw] text-[4vw] px-[3vw] py-[2vw] sm:px-[1.3vw] sm:py-[.6vw]  
          bg-white text-[black] rounded-full 
          whitespace-nowrap '>Click to Slide</button>
      </div>
    </main>
  )
}

export default App
