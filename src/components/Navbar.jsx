

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
      {/* <div
        
      </div> */}

    </div>
  )
}

export default Navbar
