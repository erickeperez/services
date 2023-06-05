export default function Home() {
  const toggleCarousel = (action) => {
    const { Carousel } = require("bootstrap");
    const carousel = new Carousel("#myCarousel");
    if (action === "next") {
      carousel.next();
    } else {
      carousel.prev();
    }
  };
  return (
    <>
      {" "}
      <div>
        <button
          className="btn btn-primary"
          onClick={() => toggleCarousel("prev")}
        >
          Prev
        </button>
        <button
          className="btn btn-primary ms-3"
          onClick={() => toggleCarousel("next")}
        >
          Next
        </button>
      </div>
      <div>
        <div
          id="myCarousel"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
          style={{ maxWidth: "50%", height: "80vh", overflow: "hidden" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://picsum.photos/id/237/700/700" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/123/700/700" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/234/700/700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
