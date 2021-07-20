import React from 'react';
import { Link } from 'react-router-dom';
import UpArrow from '../../assets/ico/uparrow';
import DownArrow from '../../assets/ico/downarror';
import BaseAvatarIcon from '../../assets/ico/BaseAvatarIcon';

export default (props) => (
  <table className="table table-striped  table-hover">
    <thead className="table-dark">
      <tr>
        <th></th>
        <th onClick={() => props.onSort('_id')}>
          ID {props.sortField === '_id' ? props.sort === 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('username')}>
          Имя {props.sortField === 'username' ? props.sort === 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('createdAt')}>
          Дата регистрации {props.sortField === 'createdAt' ? props.sort === 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('email')}>
          Email {props.sortField === 'email' ? props.sort === 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('rate')}>
          Рейтинг {props.sortField === 'rate' ? props.sort === 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data ? (
        props.data.map((item, index) => (
          <tr key={item._id}>
            <td>{!item.image ? <BaseAvatarIcon /> : <img src={item.image} width="24px" height="24px" alt="-" />}</td>
            <td>{item._id.slice(0, 7)}</td>
            <td>
              <Link to={`profile/${item.username}`} id={item._id}>
                {item.username}
              </Link>
            </td>
            <td>{item.createdAt.slice(0, 10)}</td>
            <td>{item.email}</td>
            <td>{props.rates[index]}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td></td>
          <td>No data</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
    </tbody>
  </table>
);
