

function Navbar() {
  return (
    <div>
      <div className="navbar fixed w-full px-[4vw] py-[5vw] sm:px-[2vw] sm:py-[1.5vw] flex items-center justify-between cursor-pointer ">
        <div className="title font-semibold sm:text-[1.5vw]">Tarragon</div>
        <div className=" hidden middle sm:flex gap-10 text-[1.3vw] text-[#646464]">
          <h4>Products</h4>
          <h4>About</h4>
          <h4>Insights</h4>
        </div>
        <div className="flex gap-4">
          <img className="w-[8vw] sm:w-[1.8vw]" src="/images/icons/search.svg"/>     
        </div>
      </div>
      {/* <div className='btn absolute bottom-[16vw] left-[36vw] sm:bottom-[1vw] sm:left-1/2 sm:-translate-x-1/2 cursor-pointer'>
        <button className='sm:text-[1.2vw] text-[4vw] px-[3vw] py-[2vw] sm:px-[1vw] sm:py-[.4vw] border-[1px] border-[black] text-[black] rounded-full whitespace-nowrap '>
      </div> */}

    </div>
  )
}

export default Navbar
