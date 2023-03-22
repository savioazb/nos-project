import Image from "next/image"
import mapa from "../../public/images/mapa-parceiros.png"

export default function Parceiros() {
  return (
    <main className="bg-black p-8 md:p-34">
      <div className="bg-black w-100 h-24"></div>
      <section className="max-w-7xl m-auto relative">
        <div className="map-container my-12">
          <Image src={mapa} alt="" />
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>

          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
          <button className="map-point">
            <div className="content">
              <div className="centered-y">
                <h3>Teste</h3>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}