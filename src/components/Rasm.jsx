

function App() {
  return (
    <div className="container my-4">
      <h3 className="mb-4 fw-bold">Специальные предложения</h3>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="offer-card p-4 d-flex align-items-center rounded">
            <div>
              <h5 className="fw-bold">Оформите карту <br />«Северяночка»</h5>
              <p className="mb-0">
                И получайте бонусы при покупке <br />в магазинах и на сайте
              </p>
            </div>
            <img
              src="./img/foter1.png"
              alt="Карта"
              className="ms-auto offer-img img-fluid"
            />
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="offer-card-green p-4 d-flex align-items-center rounded">
            <div>
              <h5 className="fw-bold">Покупайте <br />акционные товары</h5>
              <p className="mb-0">
                И получайте вдвое больше бонусов
              </p>
            </div>
            <img
              src="./img/foter2.png"
              alt="Корзина"
              className="ms-auto offer-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;