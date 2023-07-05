import React, { useState } from "react";
import '../css/gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import img1 from '../pics/pic1.jpeg';
import img2 from '../pics/pic2.jpeg';
import img3 from '../pics/pic3.jpeg';
import img4 from '../pics/pic4.jpeg';
import img5 from '../pics/pic5.jpeg';
import img6 from '../pics/pic6.jpeg';

const Gallery = () => {
  let data = [
    {
      id: 0,
      imgSrc: img1,
    },
    {
      id: 1,
      imgSrc: img2,
    },
    {
      id: 2,
      imgSrc: img3,
    },
    {
      id: 3,
      imgSrc: img4,
    },
    {
      id: 4,
      imgSrc: img5,
    },
    {
      id: 5,
      imgSrc: img6,
    }
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [tempImgId, setTempImgId]= useState();

  const getImg = ([imgSrc, id]) => {
    console.log(imgSrc, id)
    setTempImgSrc(imgSrc);
    setTempImgId(id);
    setModel(true);
  }

  const nextPic = () => {
    if(model){
      let imgId = tempImgId;
      if(imgId === 5){
        imgId = 0;
      }else{
        imgId++;
      }
      setTempImgId(imgId);
      setTempImgSrc(data[imgId].imgSrc);
    }
  }

  const previousPic = () => {
    if(model){
      let imgId = tempImgId;
      if(imgId === 0){
        imgId = 5;
      }else{
        imgId--;
      }
      setTempImgId(imgId);
      setTempImgSrc(data[imgId].imgSrc);
    }
  }

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src ={tempImgSrc} />
        <CloseIcon className="closeIcon" onClick={() => setModel(false)}/>
        <ArrowBackIosIcon className="backwardsArrow" onClick={() => previousPic()}/>
        <ArrowForwardIosIcon className="forwardsArrow" onClick={() => nextPic()}/>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return(
            <div className="pics" id={index} onClick={() => getImg([item.imgSrc, index])}>
              <img src={item.imgSrc} style={{width: '100%'}} />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Gallery;
