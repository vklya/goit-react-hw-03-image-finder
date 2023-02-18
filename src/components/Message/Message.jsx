import css from './message.module.scss';

const Message = ({text, smile}) => (
    <p className={css.text}>
        {text} <span>{smile}</span>
    </p>
);

export default Message;