

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <img src="./img/footer.png" alt="Северяночка" className="footer-logo me-3" />
        </div>

        <ul className="nav mb-2 mb-md-0">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">О компании</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Контакты</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Вакансии</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Статьи</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Политика обработки персональных данных</a></li>
        </ul>

        <div className="d-flex align-items-center">
          {/* <a href="#" className="text-dark me-2"><img src="" alt="" /></a> */}
          <a href="#" className="text-dark me-2"><img src="./img/instagram.png" alt="Instagram" /></a>
          <a href="#" className="text-dark me-2"><img src="./img/vkontakte.png" alt="" /></a>
          <a href="#" className="text-dark me-2"><img src="./img/facebook.png" alt="Facebook" /></a>
          <a href="#" className="text-dark me-3"><img src="./img/ok.png" alt="Odnoklassniki" /></a>
          {/* <FaPhone className="me-1" /> */}
          <span className="fw-bold me-3">8 800 777 33 33</span>
        </div>

        <div className="small text-muted">
          Дизайн <strong>ZASOVSKY</strong>
        </div>
      </div>
    </footer>
  );
}
