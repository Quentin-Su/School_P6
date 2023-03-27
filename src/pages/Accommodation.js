import { useParams } from 'react-router-dom';
import { Carousel } from '../components/Carousel/Carousel';
import { Collapse } from '../components/Collapse/Collapse';
import { Rating } from '../components/Rating/Rating';
import { Tags } from '../components/Tags/Tags';
import Data from '../utils/context/ad.json';
import '../utils/styles/Accommodation.css';

export const Accommodation = () => {
    const { id } = useParams();
    const data_id = Data.find(x => x.id === id);

    if (!data_id) return window.location.href = '/error';
    return (
        <>
            <Carousel images={data_id.pictures} />

            <div className='accommodation_info_container'>
                <div className='accommodation_title_content'>
                    <div className='accommodation_title_item'>
                        <h2>{data_id.title}</h2>
                        <span>{data_id.location}</span>
                    </div>

                    <div className='accommodation_tags_container'>
                        {
                            data_id.tags.map((value, index) => {
                                return(
                                    <Tags key={index} content={value} />
                                )
                            })
                        }
                        <Tags content={data_id.tags}/>
                    </div>
                </div>

                <div className='accommodation_info_content'>
                    <div className='accommodation_host'>
                        <span>{data_id.host.name}</span>
                        <img src={data_id.host.picture} alt='Host'/>
                    </div>

                    <div className='accommodation_rating_container'>
                        <Rating nbr={data_id.rating}/>
                    </div>
                </div>
            </div>

            <div className='accommodation_collapse_container'>
                <Collapse title='Description' content={data_id.description} />
                <Collapse title='Équipements' content={data_id.equipments} />
            </div>
        </>
    );
};