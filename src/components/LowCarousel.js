import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import LowContentBox from './LowContentBox';
import image1 from './lap1.png';

export default class LowCarousel extends Component {
  render() {
    const settings =  {
        arrows: false,
        autoplay: true,
        centerMode: true,
        dots: true,
        duration: 100,
        initialSlide: true,
        shift: 100,
        slidesPerRow: 3,
        gutter: 100,
    };
    return (
      <div className="justify-content-center">
        <span></span>
        <Slider { ...settings }>
          <div>
          <LowContentBox image={image1} brand="ASUS" ram="8" vga="2" cpu="4.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="ASUS" ram="16" vga="4" cpu="8.4" gen="10" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Acer" ram="4" vga="2" cpu="4.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Dell" ram="8" vga="2" cpu="3.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Dell" ram="16" vga="2" cpu="6.4" gen="10" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="HP" ram="4" vga="2" cpu="3.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Lenovo" ram="8" vga="2" cpu="6.4" gen="9" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="ASUS" ram="8" vga="2" cpu="4.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Lenovo" ram="16" vga="4" cpu="6.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Singer" ram="4" vga="1" cpu="2.4" gen="6" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="Acer" ram="8" vga="2" cpu="4.4" gen="8" type="Laptop" price="180000" />
          </div>
          <div>
          <LowContentBox image={image1} brand="msi" ram="24" vga="8" cpu="12.5" gen="10" type="Laptop" price="180000" />
          </div>
        </Slider>
      </div>
    );
  }
}