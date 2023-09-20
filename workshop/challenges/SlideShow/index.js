import { Fragment, useState, useEffect } from 'react';

import Viewer from './components/Viewer';
import Thumbs from './components/Thumbs';
import { Box } from '@chakra-ui/react';

const title = 'Catalog Viewer';

const catalogsList = [
  {
    thumb: '/images/tea-light-candle.jpeg',
    image: '/images/tea-light-candle.jpeg',
  },
  {
    thumb: '/images/white-light-candle.jpg',
    image: '/images/white-light-candle.jpg',
  },
  {
    thumb: '/images/pink-light-candle.jpeg',
    image: '/images/pink-light-candle.jpeg',
  },
  {
    thumb: '/images/green-light-candle.jpeg',
    image: '/images/green-light-candle.jpeg',
  },
];
function SlideShow() {
  const [catalogs, setCatalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideTimer, setSlideTimer] = useState(null);
  const [slideDuration] = useState(3000);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      console.log('Next: ', (prevIndex + 1) % catalogs.length);
      return (prevIndex + 1) % catalogs.length;
    });
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + catalogs.length) % catalogs.length);
    setActiveIndex((prevIndex) => {
      console.log(
        'prev: ',
        (prevIndex - 1 + catalogs.length) % catalogs.length,
        prevIndex - 1,
        catalogs.length
      );
      return (prevIndex - 1 + catalogs.length) % catalogs.length;
    });
  };

  const handleThumbClick = (idx) => {
    setActiveIndex(idx);
  };

  const handleSliding = (e) => {
    const _val = e.target.checked;
    setIsSliding(_val);
  };

  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
        handleNextClick();
      }, slideDuration);
      return () => clearInterval(interval);
    }
  }, [isSliding, activeIndex, catalogs]);

  return (
    <Fragment>
      <Box>{title}</Box>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className='layout-row justify-content-center align-items-center mt-20'>
              <button
                className='icon-only outlined'
                data-testid='prev-slide-btn'
                onClick={handlePrevClick}
              >
                <i className='material-icons'>arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                handleClick={handleThumbClick}
              />
              <button
                className='icon-only outlined'
                data-testid='next-slide-btn'
                onClick={handleNextClick}
              >
                <i className='material-icons'>arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={handleSliding}
          />
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default SlideShow;
