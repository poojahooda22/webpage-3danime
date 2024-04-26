import can from '/images/Can.png';
import content from '/images/Content.png';
import model from '/images/orange/doodle1.png';
import styles from './style.module.css'
// import { useEffect } from 'react';
// import gsap from 'gsap';


function Orange() {

    // useEffect(() => {
    //     // const $ = (e) => document.querySelector(e);
    //     const w = gsap.getProperty('.can', 'width');

    //     const toggleBtn = document.querySelector('.btn');
    //     const tl = gsap.timeline({defaults: {duration: 2, ease: 'power3.inOut'}, });

    //     tl.to('.orange > h1', {
    //         xPercent: 100,
    //     }, 'a')
    //     tl.to('.orange > div > img:not(.can)', {
    //         xPercent: 150,
    //         rotate: '90deg',
    //     }, 'a')
    //     tl.to('.orange .can, .orange .clippyMask', {
    //         x: '-4vw',
    //     }, 'a')
    //     tl.to('.orange .clippyMask > div', {
    //         x: -w*2,
    //     }, 'a')
    //     tl.to('.orange', {
    //         clipPath: 'inset(0 100% 0 0)',
    //     }, 'a')

    //     tl.from('.pineapple > h1', {
    //         xPercent: -100,
    //     }, '>')
    //     tl.from('.pineapple > div > img:not(.can)', {
    //         xPercent: -150,
    //         rotation: -90,
    //     }, '>')
    //     tl.from('.pineapple .can, .pineapple .clippyMask', {
    //         x: '4vw',
    //     }, '>')
    //     tl.from('.pineapple .clippyMask > div', {
    //         x: w*2
    //     }, '>')

    //     let count = 1;
    //     toggleBtn.addEventListener('click', () => {
    //         if (count) {
    //             tl.play();
    //             count - 1;
    //         } else {
    //             tl.reverse();
    //             count + 1;
    //         }
    //     }) 
    // }, [])
    

  return (
    <section className="orange fixed w-full h-[100vh] bg-[#FFEFDA] -z-[1]">
        <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 
            -translate-x-1/2 text-[24vw] sm:text-[18vw] text-[#FFD399]"
        >
            Orange
        </h1>
        <div className='relative top-1/2 left-1/2 -translate-y-1/2 
            -translate-x-1/2'>
            {/* //Can Image */}
            <img className='can w-[32vw] sm:w-[16vw] mx-auto object-cover' src={can} alt="canImage" />

            {/* //Can Description */}

            <div className={`clippyMask ${styles.clippyMask} mix-blend-multiply w-[32vw] sm:w-[16vw] h-full absolute top-0 left-1/2 -translate-x-1/2  flex justify-center`}>
                {/* //main can area */}
                <div className=' w-screen flex-shrink-0 h-full flex justify-center '>
                    {/* //content image */} 
                    <img className=' h-full' src={content} />
                    {/* //model image */} 
                    <img className='w-[32vw] sm:w-[16vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={model} />

                    <div className='desp  absolute top-0 left-1/2 -translate-x-1/2 text-center font-medium pt-[4vw] pb-[6vw] sm:pt-[2.2vw] sm:pb-[3.2vw] h-full sm:w-[16vw] flex flex-col justify-between '>
                        <div className='space-y-4 sm:space-y-6'>
                            <p className='text-[1vw] sm:text-[.5vw]'>enjoy a refreshing drink</p>
                            <h1 className='text-[5vw] sm:text-[1.8vw]'>Tarragon</h1>
                        </div>
                        <div>
                            <h1 className='text-[3vw] sm:text-[1.5vw]' >Orange</h1>
                            <p className='text-[1vw] sm:text-[.5vw]'>Best way to enjoy fruit juice</p>
                        </div>     
                    </div> 
                </div>
            </div>

            {/* //extra photos */}

            <img className='sm:w-[18vw] w-[36vw] absolute -bottom-[14vw]   sm:-bottom-[5vw] sm:left-[25vw]' src="/images/orange/image 4.png"/>
            <img className='sm:w-[10vw] w-[26vw] absolute -top-[20vw] sm:-top-[5vw] sm:left-[25vw]' src="/images/orange/image 6.png"/>
            <img className='sm:w-[16vw] w-[24vw] absolute top-[16vw] right-[14vw]  sm:top-[5vw] sm:right-[25vw]' src="/images/orange/juice.png"/>
        </div>

        {/* <div 
            className='btn absolute bottom-[16vw] left-[36vw] sm:bottom-[3vw] sm:left-1/2 sm:-translate-x-1/2 z-[9999] cursor-pointer'>
            <button className='sm:text-[1.2vw] text-[4vw] px-[3vw] py-[2vw] sm:px-[1vw] sm:py-[.4vw] border-[1px] border-[black] text-[black] rounded-full whitespace-nowrap '>Click to Slide</button>
        </div>   */}
    </section>
  )
}

export default Orange
