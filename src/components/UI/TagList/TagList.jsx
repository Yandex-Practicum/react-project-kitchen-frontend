import style from './TagList.module.scss';
import Tag from '../Tag/Tag';
import agent from 'agent';

export default function TagsList({ tags, onClickTag }) {

    if (tags)
        return (
            <ul className={style.tags__list}>
                {tags.map((tag, index) => {
                    const handleClick = (ev) => {
                        if (onClickTag) {
                            ev.preventDefault()
                            onClickTag(tag, (page) => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag))
                        }
                    }
                    return (
                        <Tag key={index} tag={tag} handleClick={handleClick} />
                    )
                })}
            </ul>
        );
    else return <div>Загрузка...</div>
}
