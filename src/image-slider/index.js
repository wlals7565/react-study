import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import './style.scss';

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (url) => {
    try {
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide => (currentSlide-1<=0 ? limit-1: currentSlide-1))
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide => (currentSlide+1>=limit ? 0: currentSlide+1))
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occured!</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircle className="arrow arrow-left"  onClick={()=>{handlePrevious()}}/>
      {images && images.length
        ? images.map((imagesItem, index) => (
            <img
              key={imagesItem.id}
              alt={imagesItem.download_url}
              src={imagesItem.download_url}
              className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          ))
        : null}
      <BsArrowRightCircle className="arrow arrow-right" onClick={()=>handleNext()}/>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className={currentSlide === index ? `current-indicator`: 'current-indicator inactive-current-indicator'} onClick={()=>setCurrentSlide(index)}></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
