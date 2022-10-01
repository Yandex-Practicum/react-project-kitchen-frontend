import style from './Tag.module.scss'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { Text } from '..';

const mapStateToProps = (state) => ({ currentTag: state.articleList.tag })

export function Tag({ tag, handleClick, currentTag }) {
    const className = `${style.tag} ${currentTag === tag ? style.active : style.default}`

    return (
        <li className={className} onClick={handleClick}>
            <Text type='caption'>{tag}</Text>
        </li>
    );
}

export default connect(mapStateToProps)(Tag)

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    currentTag: PropTypes.string
};
