import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import react_native from "../assets/img/react-native.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import table from "../assets/img/watermelon.svg";
import icecream from "../assets/img/icecream.svg";
import React from "react";

function Product(props) {
  return (
    <div className="item">
      <img src={props.url} alt="Image" />
    </div>
  );
}


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      itemClass: 'carousel-item'
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      itemClass: 'carousel-item'
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      itemClass: 'carousel-item'
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      itemClass: 'carousel-item'
    }
  };
  
  const productData = [
    {
      id: 1,
      imageurl:
        "https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png?w=750&h=750&q=100&fm=png",
      name: "Python",
    },
    {
      id: 2,
      imageurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      name: "JavaScript",
    },
    {
      id: 4,
      imageurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      name: "React-Native",
    },
    {
      id: 5,
      imageurl:
        "https://yt3.googleusercontent.com/ytc/AGIKgqOUoSLwRUS1hlbouSLdhsan2C392WHp2bJRj1HzFg=s900-c-k-c0x00ffffff-no-rj",
      name: "TensorFlow",
    },
    {
      id: 6,
      imageurl:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      name: "Figma",
    },
    {
      id: 7,
      imageurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/788px-Adobe_Illustrator_CC_icon.svg.png",
      name: "Adobe Illustrator",
    }
  ];  

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
    />
  ));

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>"Remember, progress is not a destination, but a continuous process fueled by the passion for learning and the desire to become better each day."</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            {product}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}
