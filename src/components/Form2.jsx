

const products = [
  {
    id: 1,
    img: "/img/header-5.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "599,99 ₽",
    stars: 2,
    btnColor: "success"
  },
  {
    id: 2,
    img: "/img/header-3.png",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "44,50 ₽",
    stars: 5,
    btnColor: "warning"
  },
  {
    id: 3,
    img: "/img/header-4.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "159,99 ₽",
    stars: 2,
    btnColor: "success"
  },
  {
    id: 4,
    img: "/img/header-2.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39 ₽",
    stars: 2,
    btnColor: "success"
  }
];

export default function App() {
  return (
    <div className="container py-4">
      <h3 className="mb-4">Новинки</h3>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
            <div className="card product-card h-100">
              <img src={item.img} className="card-img-top product-img" alt={item.title} />
              <div className="card-body">
                <p className="price">{item.price}</p>
                <h6 className="card-title">{item.title}</h6>
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
