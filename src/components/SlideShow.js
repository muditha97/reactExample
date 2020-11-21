import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import image1 from './pro.png';
import image2 from './desk.png';
import image3 from './ph1.png';
import image4 from './ssd.png';
import image5 from './gc.png';

    
export default class SlideShow extends Component {
    render() {
        const settings =  {
          autoplay: true,
          wheel: true
        };
        return (
          <div>
            <Slider { ...settings }>
              <div>
                <img src={image1} alt="im1" className="slideImage"/>
              </div>
              <div>
                <img src={image2} alt="im1" className="slideImage"/>
              </div>
              <div>
                <img src={image3} alt="im1" className="slideImage"/>
              </div>
              <div>
                <img src={image4} alt="im1" className="slideImage"/>
              </div>
              <div>
                <img src={image5} alt="im1" className="slideImage"/>
              </div>
            </Slider>
          </div>
        );
      }
}
