import roadbike from "../../assets/img/roadbike bagian home.jpg";
import gravel from "../../assets/img/grepelbagianhome.jpg";
import mtb from "../../assets/img/mtb bagian home.jpg";
import "../../styling/home.css";

function Home() {
  return (
    <div> 
      <div id="container">
        <img src={roadbike} />
        <div className="bikes">
          <h1>ROADBIKE</h1>
          <p id="tx">Sepeda untuk kebut kebutan</p>
        </div>
      </div>

      <div id="container2">
        <img src={mtb} />
        <div className="bikes2">
          <h1>MOUNTAIN BIKE</h1>
          <p id="tx2">Naik gunung dengan sepeda biar greget</p>
        </div>
      </div>

      <div id="container3">
        <img src={gravel} />
          <div className="bikes3">
            <h1>GRAVEL</h1>
            <p id="tx3">Kawin silang antara mtb dan roadbike</p>
          </div>
      </div>
    </div>
  );
}

export default Home; 




