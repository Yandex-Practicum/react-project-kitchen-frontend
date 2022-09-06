import style from './TagList.module.css';
import Tag from '../Tag/Tag';
import agent from 'agent';
import { useState } from 'react';

export default function TagsList({ tags, onClickTag }) {
    const [current, setCurrent] = useState(null)

    if (tags)
        return (
            <ul className={style.tags__list}>
                {tags.map((tag) => {
                    const handleClick = (ev) => {
                        if (onClickTag) {
                            ev.preventDefault()
                            onClickTag(tag, (page) => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag))
                            setCurrent(tag)
                        }
                    }
                    return (
                        <Tag key={tag} tag={tag} current={current} handleClick={handleClick} />
                    )
                })}
            </ul>
        );
    else return <div>Загрузка...</div>
}
