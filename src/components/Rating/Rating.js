export const Rating = ({ nbr }) => {
    const paragraphs = [];

    for (let i = 0; i < 5; i++) {
        paragraphs.push(<svg key={i} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={i >= nbr ? '#E3E3E3' : '#FF6060'}/></svg>);        
    }

    return <>{paragraphs}</>
};