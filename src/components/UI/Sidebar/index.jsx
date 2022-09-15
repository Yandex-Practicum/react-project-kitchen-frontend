import style from './Sidebar.module.scss';
import PropTypes from 'prop-types';

export function Sidebar({ children }) {
    return (
        <div className={style.sidebar}>
            <p>Популярные теги</p>
            {children}
        </div>
    );
}

Sidebar.propTypes = {
    children: PropTypes.any
};
