import { ReactComponent as Icon } from '../../utils/assets/kasaIcon.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className='footer_content'>
        <Icon className='footer_icon' />
        <span className='footer_copy'>&copy; {new Date().getFullYear()} Kasa. All rights reserved</span>
      </div>
    </footer>
  );
};