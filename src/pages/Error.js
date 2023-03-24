import { Link } from 'react-router-dom';
import '../utils/styles/Error.css';

export const Error = () => {
    return (
        <div className='page_error_container'>
            <span className='error_code'>404</span>
            <span className='error_message'>Oups! La page que vous demandez n'existe pas.</span>

            <Link to='/' className='error_redirect'>Retourner sur la page d'accueil</Link>
        </div>
    );
};