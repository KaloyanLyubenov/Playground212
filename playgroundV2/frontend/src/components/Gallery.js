import React, { useState } from "react";
import '../css/gallery.css';

import img1 from '../pics/pic1.jpeg';
import img2 from '../pics/pic2.jpeg';
import img3 from '../pics/pic3.jpeg';
import img4 from '../pics/pic4.jpeg';
import img5 from '../pics/pic5.jpeg';
import img6 from '../pics/pic6.jpeg';

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    }
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src ={tempImgSrc} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return(
            <div className="pics" id={item.id} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width: '100%'}} />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Gallery;
