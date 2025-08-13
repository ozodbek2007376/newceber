

export default function Navbar() {
  return (
    <>
      <header className="py-2 border-bottom bg-white">
        <div className="container-fluid">
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-auto d-flex align-items-center gap-3 justify-content-between justify-content-md-start">
              <img src="./img/logo.png" alt="Logo" height="30" />
              <button className="catalog-btn d-none d-md-flex align-items-center gap-2">
                Каталог
              </button>
            </div>

            <div className="col-12 col-md">
              <form className="d-flex search-box">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Найти товар"
                />
                <button className="btn" type="submit">
                  <img src="./img/search.png" alt="Search" width="20" />
                </button>
              </form>
            </div>

            <div className="col-12 col-md-auto d-none d-md-flex align-items-center gap-4">
              <div className="header-icon">
                <img src="./img/nav-1.png" alt="Favorites" />
              </div>
              <div className="header-icon">
                <img src="./img/nav-2.png" alt="Orders" />
              </div>
              <div className="header-icon position-relative">
                <img src="./img/nav-3.png" alt="Cart" />
              </div>
              <div className="d-flex align-items-center">
                <img
                  src="./img/avatar.png"
                  alt="user"
                  className="profile-pic me-2"
                />
                <span>Алексей</span>
              </div>
            </div>
          </div>
        </div>
      </header>

    
    </>
  );
}
