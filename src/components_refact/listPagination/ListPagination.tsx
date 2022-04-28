import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { SET_PAGE } from '../../constants';
import { fetchPublicFeed } from '../../services/api';

export const ListPagination: FC<{ /* pager: (page: number) => void, */ articlesCount: number, currentPage: number }> = ({ /* pager, */ articlesCount, currentPage }) => {
  const dispatch = useDispatch();

  if (articlesCount <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = (page: number) => {
    if (true) {
      dispatch({ type: SET_PAGE, page, payload: 1 });
    } else {
      dispatch({ type: SET_PAGE, page, payload: fetchPublicFeed(10, page * 10) });
    }
  };

  return (
    <nav>
      <ul className='pagination'>

        {
          range.map((v) => {
            const isCurrent = v === currentPage;
            const onClick = (ev: React.MouseEvent) => {
              ev.preventDefault();
              setPage(v);
            };
            return (
              <li
                className={isCurrent ? 'page-item active' : 'page-item'}
                onClick={onClick}
                key={v.toString()}>

                <a className='page-link' href=''>{v + 1}</a>

              </li>
            );
          })
        }

      </ul>
    </nav>
  );
};
