import Carousel from 'react-bootstrap/Carousel';
import webservices from '../assets/webservices.png'
import graphicservices from '../assets/graphicservices.jpg'
import seoservices from '../assets/seoservices.png'
import '../App.css';

function Slides() {
  return (
    <Carousel slide={false} style={{margin: "2%"}}>
      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={webservices}
          alt="First slide"
        />
        
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={seoservices}
          alt="Second slide"
        />

      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={graphicservices}
          alt="Third slide"
        />

      </Carousel.Item>




    </Carousel>
  );
}

export default Slides;