import { Link } from 'react-router-dom';
import '../styles/Button.scss'

const STYLES = ['btn--primary', 'btn--secondary'];
const SIZES = ['btn--large', 'btn--small'];

const Button = ({children, onClick, buttonStyle, buttonSize}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

  return (
    <Link to='/login' className='btn-mobile'>
    <button className="`btn ${checkButtonStyle} ${checkButtonSize}`" type="submit" onClick={onClick}>{children}</button>
    </Link>
  )
}

export default Button;
