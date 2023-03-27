import './Tags.css';

export const Tags = ({ content }) => {
    return (
        <div className='tags_container'>
            <span>{content}</span>
        </div>
    );
};