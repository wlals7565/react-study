import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.scss'

const StarRate = ({ numberOfStarts }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numberOfStarts)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={index <= (hover||rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRate;
