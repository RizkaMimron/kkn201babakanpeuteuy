import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TeamCard } from '../cards';
import { IconButton } from '@material-tailwind/react';

const OurTeamsCarousel = ({ teamData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {teamData.map(({ img, name, position, major, socials }, index) => (
        <div key={name} className="p-2">
          <TeamCard
            img={img}
            name={name}
            major={major}
            position={position}
            socials={
              <div className="flex items-center gap-2 ">
                {socials.map(({ color, name }) => (
                  <IconButton key={name} color={color} variant="text">
                    <i className={`fa-brands text-xl fa-${name}`} />
                  </IconButton>
                ))}
              </div>
            }
          />
        </div>
      ))}
    </Slider>
  );
};

export default OurTeamsCarousel;
