function App() {
  return (
    <div className="container my-4">

      <h3 className="fw-bold mb-3">Наши магазины</h3>
      <div className="mb-3">
        <button className="btn btn-success me-2">п.Шелехов</button>
        <button className="btn btn-light me-2">д.Вертел</button>
        <button className="btn btn-light me-2">с.Краснобор</button>
        <button className="btn btn-light">д.Димор</button>
      </div>

      <div className="mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2916.724424802351!2d71.18673352587035!3d40.46883877143129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x38bafd004b541587%3A0x89b7ba1ecf8a8c8a!2sBagdod!3m2!1d40.4691681!2d71.1885308!4m3!3m2!1d40.4689134!2d71.1899787!5e1!3m2!1suz!2s!4v1755108048359!5m2!1suz!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-0">Статьи</h3>
        <a href="#" className="text-decoration-none text-dark">
          Все статьи →
        </a>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="./img/odam.png" className="card-img-top" alt="Статья" />
            <div className="card-body">
              <small className="text-muted">05.03.2021</small>
              <h6 className="fw-bold mt-2">
                Режим использования масок и перчаток на территории магазинов
              </h6>
              <p className="text-muted small">
                Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <button className="btn btn-success btn-sm">Подробнее</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="/img/daraxt.png" className="card-img-top" alt="Статья" />
            <div className="card-body">
              <small className="text-muted">05.03.2021</small>
              <h6 className="fw-bold mt-2">
                Весеннее настроение для каждой
              </h6>
              <p className="text-muted small">
                8 Марта – это не просто Международный женский день, это ещё день тёплых приятных сюрпризов и праздничных тёплых пожеланий.
              </p>
              <button className="btn btn-success btn-sm">Подробнее</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="./img/meva.png" className="card-img-top" alt="Статья" />
            <div className="card-body">
              <small className="text-muted">22.02.2020</small>
              <h6 className="fw-bold mt-2">
                ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!
              </h6>
              <p className="text-muted small">
                Голосуйте за любимые категории, выбирайте категорию-победителя и получайте кешбэк 10% баллами в апреле!
              </p>
              <button className="btn btn-success btn-sm">Подробнее</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
