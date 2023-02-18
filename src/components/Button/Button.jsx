import css from './button.module.scss';

const Button = ({ onClick, text }) => <button className={css.button} onClick={onClick}>{text}</button>;

export default Button;
