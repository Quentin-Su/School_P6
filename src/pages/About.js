import { Banner } from '../components/Banner/Banner';
import { Collapse } from '../components/Collapse/Collapse';
import AboutContext from '../utils/context/aboutContext.json';
import '../utils/styles/About.css';

export const About = () => {
    return (
        <>
            <Banner bannerClass='about' />
            <section className='about_collapse'>
                {
                    AboutContext.map((value, index) => (
                        <Collapse key={index} title={value.title} content={value.content} customClass='large' />
                    ))
                }
            </section>
        </>
    );
};