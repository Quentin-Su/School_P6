import Data from '../utils/context/ad.json';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import { Banner } from '../components/Banner/Banner';
import '../utils/styles/Home.css';

export const HomePage = () => {
  return (
    <>
      <Banner content='Chez vous, partout et ailleurs' bannerClass='home'/>
      <section className='cards_container'>
        <div className='cards_content'>
          {
            Data.map((value, index) => {
              return (
                <Link key={index} to={`accommodation/${value.id}`} onClick={() => window.scrollTo(0, 0)}>
                  <Card coverUrl={value.cover} title={value.title} />
                </Link>
              );
            })
          }
        </div>
      </section>
    </>
  );
};