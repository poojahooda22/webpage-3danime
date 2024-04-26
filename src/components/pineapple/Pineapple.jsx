import styles from './style.module.css'
import can from '/images/Can.png';
import content from '/images/Content.png';
import model from '/images/pineapple/Doodle2.png';


function Pineapple() {
  return (
    <section className="pineapple fixed w-full h-screen bg-[#E4FFC0] -z-[2]">
        <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 
            -translate-x-1/2 text-[20vw] sm:text-[18vw] text-[#B7EC73]"
        >
            Pineapple
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
                    <img className='w-[32vw] sm:w-[20vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={model} />

                    <div className='desp  absolute top-0 left-1/2 -translate-x-1/2 text-center font-medium pt-[4vw] pb-[6vw] sm:pt-[2.2vw] sm:pb-[3.2vw] h-full sm:w-[16vw] flex flex-col justify-between '>
                        <div className='space-y-4 sm:space-y-6'>
                            <p className='text-[1vw] sm:text-[.5vw]'>enjoy a refreshing drink</p>
                            <h1 className='text-[5vw] sm:text-[1.8vw]'>Tarragon</h1>
                        </div>
                        <div>
                            <h1 className='text-[3vw] sm:text-[1.5vw]' >Pineapple</h1>
                            <p className='text-[1vw] sm:text-[.5vw]'>Best way to enjoy fruit juice</p>
                        </div>     
                    </div> 
                </div>
            </div>

            {/* //extra photos */}

            <img className='sm:w-[25vw] w-[40vw] absolute -top-[16vw] right-[8vw] sm:-top-[4vw] sm:right-[21vw] sm:-rotate-6' src="/images/pineapple/image 7.png"/>
            <img className='sm:w-[20vw] w-[44vw] absolute top-[20vw] left-[0vw] sm:top-[10vw] sm:left-[26vw]' src="/images/pineapple/image 8.png"/>
            <img className='sm:w-[6vw] w-[24vw] absolute top-[26vw] right-[14vw]  sm:top-[19vw] sm:right-[34vw]' src="/images/pineapple/image 9.png"/>
        </div>   
    </section>
  )
}

export default Pineapple
