export const Banner = ({ content, bannerClass }) => {
    return (
        <section className={`banner_container banner_${bannerClass}`}>
            {
                content && <div className='banner_content'>
                    <h1>{content}</h1>
                </div>
            }
        </section>
    );
};