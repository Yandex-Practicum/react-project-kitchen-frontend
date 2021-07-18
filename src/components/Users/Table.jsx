import React from 'react';
import { Link } from 'react-router-dom';
import UpArrow from '../../assets/ico/uparrow';
import DownArrow from '../../assets/ico/downarror';


export default props => (
  <table className="table table-striped  table-hover">
    <thead className="table-dark">
      <tr>
        <th>
        </th>
        <th onClick={() => props.onSort('_id')}>
          ID {props.sortField === '_id'? props.sort == 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('username')}>
          Name  {props.sortField === 'username'? props.sort == 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('email')}>
          Email  {props.sortField === 'email'? props.sort == 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th onClick={() => props.onSort('rate')}>
          Rate  {props.sortField === 'rate'? props.sort == 'asc' ? <UpArrow /> : <DownArrow /> : null}
        </th>
        <th>
          rest 
        </th>
      </tr>
    </thead>
    <tbody>
      {(props.data) 
      ? props.data.map((item, index) => (
        <tr key={item._id}>
            <td><img src={item.image}/></td>
            <td>{parseInt(item._id)}</td>
            <td><Link to={`profile/${item.username}`} id={item._id}>{item.username}</Link></td>
            <td>{item.email}</td>
            <td>{props.rates[index]}</td>
            <td>rest</td>
        </tr>
      ))
      : <tr>
        <td></td>
          <td>No data</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      }
    </tbody>
  </table>
)
