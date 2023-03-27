import React, { useState } from "react";
import './Collapse.css';

export const Collapse = (props) => {
    const [dropdowns, setDropdowns] = useState(false);

    const eventClick = () => {
        setDropdowns(!dropdowns);
    };

    return (
        <>
            <article className={props.customClass ? `collapse_container ${props.customClass}` : 'collapse_container'}>
                <div className={dropdowns ? 'collapse_content opened' : 'collapse_content'}>
                    <div className='collapse_bar' onClick={() => eventClick()}>
                        <span className='collapse_bar_tittle'>{props.title}</span>
                        <svg viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg"><path d="M24.8401 16.3467L27.2001 13.9733L14.0001 0.786651L0.800071 13.9867L3.16007 16.3467L14.0001 5.50665L24.8401 16.3467Z" fill="white"/></svg>
                    </div>
                    <div className={dropdowns ? 'collapse_dropdown opened' : 'collapse_dropdown closed'}>
                        {
                            Array.isArray(props.content) && props.content.length > 0 ? (
                                <div className='collapse_dropdown_text'>
                                    {
                                        props.content.map((item, index) => (
                                            <p key={index} className='dropdown_text_item'>{item}</p>
                                        ))
                                    }
                                </div>
                            ) : (<p className='collapse_dropdown_text'>{props.content}</p>)
                        }
                    </div>
                </div>
            </article>
        </>
    )
}