import style from './Tag.module.css';

export default function Tag({ tag, handleClick, current }) {
    const className = `${style.tag} ${current === tag ? style.active : {}}`

    return (
        <li className={className} onClick={handleClick}>
            {tag}
        </li>
    );
}
