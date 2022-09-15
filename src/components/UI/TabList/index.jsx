import style from './TabList.module.scss';
import Tab from '../Tab/';
import { connect } from "react-redux"
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({ tag: state.articleList.tag })

export function TabList({ tag, tabs }) {
    return (
        <ul className={style.list}>
            {tabs.map((item) =>
                <Tab
                    eventKey={item.eventKey}
                    title={item.title}
                    key={item.title}
                    route={item.route}
                />
            )}
            {
                tag && <Tab
                    title={`#${tag}`}
                    route={"/"}
                />
            }
        </ul>
    );
}

export default connect(mapStateToProps)(TabList)

Tab.propTypes = {
    tabs: PropTypes.array,
    tag: PropTypes.string
};
