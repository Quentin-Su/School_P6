import './Card.css';

export const Card = ({ coverUrl, title }) => {
    return (
        <article className='card_item'>
            <img src={coverUrl} alt='Card Location' />
            <div className='card_item_content'>
                <span className='card_item_title'>{title}</span>
            </div>
        </article>
    );
};