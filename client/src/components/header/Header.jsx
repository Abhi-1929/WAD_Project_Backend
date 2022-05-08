import "./header.css";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x400/?creative"
            alt="First slide"
          />
          <Carousel.Caption className="bg-dark opacity-75">
            <h3>Create Your Blogs</h3>
            <p>There's a way to do it better - find it.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x400/?creative,explore"
            alt="Second slide"
          />
          <Carousel.Caption className="bg-dark opacity-75">
            <h3>Learn with Others</h3>
            <p>Never stop learning, because Life never stops teaching.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x400/?creative,idea"
            alt="Third slide"
          />
          <Carousel.Caption className="bg-dark opacity-75">
            <h3>Discover the Worlds Through Blogs</h3>
            <p>Get Closer to your Goals</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
