import style from './PageLink.module.css'

export default function PageLink({ isCurrent, onClick, isFirst, isLast, children }) {
    const className = `${style.page__item}
    ${isCurrent ? style.active : style.default}
    ${isFirst ? style.first : isLast ? style.last : {}}`

    return (
        <li className={className} onClick={onClick}>
            <a href="" className={style.page__link}>
                {children}
            </a>
        </li>
    )
}