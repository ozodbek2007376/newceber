import Navbar from "./Navbar";
import Item from "./Item";
import Form from "./Form";
import Form2 from "./Form2";
import Maiin from "./Maiin";
import Rasm from "./Rasm";
import Stic from "./Stic";
import Stats from "./Stats";
import Footers from "./Footers";


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Item />
      <Form />
      <Form2 />
      <Maiin />
      <Rasm />
      <Stic />
      <Stats />
      <Footers />
    </div>
  );
}
