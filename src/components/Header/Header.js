import { ReactComponent as Icon } from '../../utils/assets/kasaIcon.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className='header_container'>
      <div className='header_content'>
        <Icon className='header_icon' />
        <nav className='header_nav'>
          <ul>
            <li>
              <NavLink to='/' activeclassname='active' className='header_navLink'>Accueil</NavLink>
            </li>
            <li>
              <NavLink to='/about' activeclassname='active' className='header_navLink'>A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};