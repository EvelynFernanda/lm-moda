import "./App.scss";
import imgMain from "./assets/main.png";
import FlowerSvg from "./components/FlowerSvg/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="insta">
      <div className="insta-content">
        <FlowerSvg />
        <img width={150} height={150} src={imgMain} />
        <h1>LM Moda Feminina</h1>
        <p>Trabalhamos com encomendas e a pronta entrega.</p>
        <nav className="insta-contact">
          <a target={"_blank"} href="https://wa.me/5516996115807">
            WhatsApp
          </a>
        </nav>
        <p>"Até aqui nos ajudou o SENHOR".</p>
        <p>1 Samuel 7:12</p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
