import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';
import './componentStyles.css';

function NavButtons({ prevLink, prevText, nextLink, nextText }) {
  return (
    <div className="nav-buttons">
      <Link to={prevLink} className="nav-button prev-button">
        <span className="nav-button-text">
          <img src={arrowLeft} alt="Previous" className="nav-arrow" />
          <span className="nav-label">
            <div>Previous</div>
            <div>{prevText}</div>
          </span>
        </span>
      </Link>
      <Link to={nextLink} className="nav-button next-button">
        <span className="nav-button-text">
          <span className="nav-label">
            <div>Next</div>
            <div>{nextText}</div>
          </span>
          <img src={arrowRight} alt="Next" className="nav-arrow" />
        </span>
      </Link>
    </div>
  );
}

export default NavButtons;