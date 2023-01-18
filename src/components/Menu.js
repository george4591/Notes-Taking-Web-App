import '../styles/Menu.css';
import { Icon } from '@iconify/react';

const Menu = ({onClose, children}) => {
  return (
    <div id="menu-wrapper">
      <Icon icon="bi:x" id='close-button' onClick={onClose}/>
      {children}
    </div>
  );
}

export default Menu;