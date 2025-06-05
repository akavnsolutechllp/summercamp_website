import React from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import photo1 from "../assets/gallery/1-min.jpg";
import photo2 from "../assets/gallery/2-min.JPG";
import photo3 from "../assets/gallery/3-min.JPG";
import photo4 from "../assets/gallery/4-min.JPG";
import photo5 from "../assets/gallery/5-min.JPG";
import photo6 from "../assets/gallery/6-min.jpg";
import photo7 from "../assets/gallery/7-min.jpg";
import photo8 from "../assets/gallery/8-min.jpg";
import photo9 from "../assets/gallery/9-min.JPG";
import photo10 from "../assets/gallery/10-min.JPG";
import photo11 from "../assets/gallery/11-min.JPG";
import photo12 from "../assets/gallery/12-min.JPG";
import photo13 from "../assets/gallery/13-min.jpg";
import photo14 from "../assets/gallery/14-min.jpg";
import photo15 from "../assets/gallery/15-min.jpg";
import photo16 from "../assets/gallery/16-min.jpg";
import photo17 from "../assets/gallery/17-min.jpg";
import photo18 from "../assets/gallery/18-min.jpg";
import photo19 from "../assets/gallery/19-min.jpg";
import photo20 from "../assets/gallery/20-min.jpg";
import photo21 from "../assets/gallery/21-min.jpg";
import photo22 from "../assets/gallery/22-min.jpg";
import photo23 from "../assets/gallery/23-min.jpg";
import photo24 from "../assets/gallery/24-min.jpg";
import photo25 from "../assets/gallery/25-min.jpg";
import photo26 from "../assets/gallery/26-min.jpg";
import photo27 from "../assets/gallery/27-min.jpg";

import video1 from "../assets/video/vid1.mp4";
import video2 from "../assets/video/vid2.mp4";
import video3 from "../assets/video/vid3.mp4";
import video4 from "../assets/video/vid4.mp4";
import video5 from "../assets/video/vid5.mp4";
import video6 from "../assets/video/vid6.mp4";

const Gallery = () => {
  const gallery = [
    {
      id: "img1",
      src: photo1,
    },
    {
      id: "img2",
      src: photo2,
    },
    {
      id: "img3",
      src: photo3,
    },
    {
      id: "img4",
      src: photo4,
    },
    {
      id: "img5",
      src: photo5,
    },
    {
      id: "img6",
      src: photo6,
    },
    {
      id: "img7",
      src: photo7,
    },
    {
      id: "img8",
      src: photo8,
    },
    {
      id: "img9",
      src: photo9,
    },
    {
      id: "img10",
      src: photo10,
    },
    {
      id: "img11",
      src: photo11,
    },
    {
      id: "img12",
      src: photo12,
    },
    {
      id: "img13",
      src: photo13,
    },
    {
      id: "img14",
      src: photo14,
    },
    {
      id: "img15",
      src: photo15,
    },
    {
      id: "img16",
      src: photo16,
    },
    {
      id: "img17",
      src: photo17,
    },
    {
      id: "img18",
      src: photo18,
    },
    {
      id: "img19",
      src: photo19,
    },
    {
      id: "img20",
      src: photo20,
    },
    {
      id: "img21",
      src: photo21,
    },
    {
      id: "img22",
      src: photo22,
    },
    {
      id: "img23",
      src: photo23,
    },
    {
      id: "img24",
      src: photo24,
    },
    {
      id: "img25",
      src: photo25,
    },
    {
      id: "img26",
      src: photo26,
    },
    {
      id: "img27",
      src: photo27,
    },
  ];

  const video = [
    {
      id: "video1",
      src: video1,
    },
    {
      id: "video2",
      src: video2,
    },
    {
      id: "video3",
      src: video3,
    },
    {
      id: "video4",
      src: video4,
    },
    {
      id: "video5",
      src: video5,
    },
    {
      id: "video6",
      src: video6,
    },
  ];

  return (
    <div className="h-auto flex flex-col justify-center items-center">
      <Navbar />
      <Menu />
      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-[#283353] to-[#16003E] px-4 py-6">
        <h2 className="font-montserrat uppercase text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-2 rounded-lg text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
          Gallery
        </h2>
        <div className="w-full 2xl:w-[90%] h-full  flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="relative min-h-[50vh] 2xl:min-h-[44vh] w-full rounded-lg overflow-hidden "
            >
              <Zoom>
                <img
                  src={item.src}
                  alt={item.id}
                  loading="lazy"
                  className="h-full w-full absolute object-cover"
                />
              </Zoom>
            </div>
          ))}
          {video.map((item) => (
            <div
              key={item.id}
              className="relative min-h-[50vh] 2xl:min-h-[44vh] w-full rounded-lg overflow-hidden "
            >
              <Zoom>
                <video
                  src={item.src}
                  alt={item.id}
                  autoPlay
                  loop
                  muted
                  type="video/mp4"
                  loading="lazy"
                  className="h-full w-full absolute object-cover"
                />
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
