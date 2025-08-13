

const products = [
  {
    id: 1,
    img: "./img/header-7.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    // oldPrice: 50.50,
    price: 77.99,
    // discount: "-50%",
    stars: 2
  },
  {
    id: 2,
    img: "./img/header-4.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    // oldPrice: 50.50,
    price: 159.99,
    // discount: "-50%",
    stars: 5
  },
  {
    id: 3,
    img: "./img/header-5.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    // oldPrice: 50.50,
    price: 599.99,
    // discount: "-50%",
    stars: 2
  },
  {
    id: 4,
    img: "./img/header-2.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    // oldPrice: 50.50,
    price: 49.39,
    // discount: "-50%",
    stars: 2
  }
];

export default function App() {
  return (
    <div className="container py-4">
      <h3 className="mb-4">Акции</h3>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
            <div className="card product-card h-100">
              <div className="discount-badge">{item.discount}</div>
              <img src={item.img} className="card-img-top product-img" alt={item.title} />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="mb-1">
                  <strong>{item.price} ₽</strong> <span className="text-muted"><s>{item.oldPrice} </s></span>
                </p>
                <div className="stars">
                  {"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)}
                </div>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className=" btn btn-main btn-success w-100">В корзину</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}

