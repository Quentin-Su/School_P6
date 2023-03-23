import React, { useState } from "react";
import './Collapse.css';

export const Collapse = (props) => {
    const [dropdowns, setDropdowns] = useState(false);

    const eventClick = () => {
        setDropdowns(!dropdowns);
    };

    return (
        <>
            <article className='collapse_container'>
                <div className={dropdowns ? 'collapse_content opened' : 'collapse_content'}>
                    <div className='collapse_bar' onClick={() => eventClick()}>
                        <span className='collapse_bar_tittle'>{props.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" /></svg>
                    </div>
                    <div className={dropdowns ? 'collapse_dropdown opened' : 'collapse_dropdown closed'}>
                        <p className='collapse_dropdown_text'>{props.content}</p>
                    </div>
                </div>
            </article>
        </>
    )
}