import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { SET_PAGE } from '../../constants/actionTypes';

import s from './ListPagination.module.scss';

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (page, payload) => dispatch({ type: SET_PAGE, page, payload }),
});

const ListPagination = (props) => {
  if (props.articlesCount) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = (page) => {
    if (props.pager) {
      props.onSetPage(page, props.pager(page));
    } else {
      props.onSetPage(page, agent.Articles.all(page));
    }
  };

  return (
    <nav className={s.container}>
      <ul className={s.list}>
        {range.map((v) => {
          const isCurrent = v === props.currentPage;
          const onClick = (ev) => {
            ev.preventDefault();
            setPage(v);
          };
          return (
            <li
              className={isCurrent ? [s.element, s.active__element].join(' ') : s.element}
              onClick={onClick}
              key={v.toString()}>
              <a className={s.link} href>
                {v + 1}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
