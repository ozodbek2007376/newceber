
function Banner() {
  return (
    <div className="banner py-3">
      <div className="container">
        <div className="row align-items-center text-center text-md-start gap-5 justify-content-center">
          <div className="col-12 col-md-auto mb-3 mb-md-0 d-flex justify-content-center">
            <img
              src="./img/img-nav.png"
              alt="Food"
              className="banner-img img-fluid"
            />
          </div>
          <div className="col">
            <span className="banner-text fw-bold ">
              Доставка бесплатно от 1000 ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;