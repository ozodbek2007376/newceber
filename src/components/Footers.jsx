

function Footers  ()  {
  return (
    <div>
      <div className="dvd d-sm-none d-flex justify-content-center justify-content-between d-flex align-items-center ms-3 pasition-fixed bottom-0">
          <div className="text-center me-3">
            <img src="./img/nav-1.png" alt="Favorites" />
            <div className="small"></div>
          </div>
          <div className="text-center me-3">
            <img src="./img/nav-2.png" alt="Orders" />
            <div className="small"></div>
          </div>
          <div className="text-center me-3">
            <img src="./img/nav-3.png" alt="Cart" />
            <div className="small"></div>
          </div>


          <div className="d-flex align-items-center img-fluid" width="25px">

            {/* <img
              src="./img/nav-4.png"
              alt="user"
              className="rounded-circle me-2"
            /> */}
            
          </div>
        </div>
    </div>
  )
}

export default Footers