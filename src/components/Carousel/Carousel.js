import React, { useState } from 'react';
import './Carousel.css';

export const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevClick = () => {
        currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1);
    };

    const nextClick = () => {
        currentIndex === (images.length - 1) ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className='carousel_container'>
            <div className='carousel_content_pictures'>
                {
                    images.map((value, index) => {
                        return (
                            <div key={index} className='carousel_item' style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                                <img src={value} alt={index + 1} />
                            </div>
                        );
                    })
                };
            </div>

            {
                images.length > 1 && (
                    <div className='carousel_content_components'>
                        <div className='carousel_content_counter'>
                            <span>{currentIndex + 1}/{images.length}</span>
                        </div>

                        <div className='carousel_content_nav'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" onClick={prevClick}><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" onClick={nextClick}><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" /></svg>
                        </div>
                    </div>
                )
            }
        </div>
    );
};