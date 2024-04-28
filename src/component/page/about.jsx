import "../../styling/about.css";
import Nason from "../../assets/img/background Nason.jpeg";
import Dias from "../../assets/img/background Dias.jpeg";
import Rahmat from "../../assets/img/background Rahmat.jpeg";
import Kebab from "../../assets/img/background Kebab.jpeg";

function About() {
  return (
    <>
      <section className="Penjelasan">
        <h1 id="Naon">About</h1>
        <p id="jelas">
          Website ini dibuat untuk memenuhi tugas matpel PPLG kelas XI RPL 1.
          Ditujukan untuk orang yang sedang bingung mencari sepeda, Isinya
          merupakan jenis-jenis sepeda yaitu Geravel, Piksi, Emtebe, Dan
          Roadbike. Dilengkapi dengan deskripsi singkat, spesifikasi dan juga
          gambar sepedanya.
        </p>
      </section>

      <section className="Team Pembuat">
        <div className="bungkus">
          <h1 id="team">TEAM PEMBUAT</h1>
          <div className="Nason">
            <div className="gambar1">
              <img src={Nason}></img>
              <h1 id="teks1">Nason Basikal</h1>
            </div>
          </div>

          <div className="Dias">
            <div className="gambar2">
              <img src={Dias}></img>
              <h1 id="teks2">Dias Saddle</h1>
            </div>
          </div>

          <div className="Rahmat">
            <div className="gambar3">
              <img src={Rahmat}></img>
              <h1 id="teks3">Rahmat Peddal</h1>
            </div>
          </div>

          <div className="Kebab">
            <div className="gambar4">
              <img src={Kebab}></img>
              <h1 id="teks4">Fahri Spoke</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
