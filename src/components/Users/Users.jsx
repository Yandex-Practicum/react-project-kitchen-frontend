import React from 'react';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import lodash from 'lodash';
import agent from '../../agent';
import { GET_PEOPLE } from '../../slices/people-slice/people';

import s from './Users.module.scss';

const Users = () => {
  const dispatch = useDispatch();
  const people = useSelector((store) => store.people.people);
  React.useEffect(() => {
    agent.People.getAll().then((res) => {
      dispatch({ type: GET_PEOPLE, payload: res.people });
      setData(res.people);
    });
  }, [dispatch]);
  const [sortField, setSortField] = useState('id');
  const [sort, setSort] = useState('asc');
  const [data, setData] = useState(people);
  const onSort = (sortField) => {
    setSortField(sortField);
    const sort1 = sort === 'asc' ? 'desc' : 'asc';
    const data1 = lodash.orderBy(data, sortField, sort1);
    setData(data1);
    setSort(sort1);
    setSortField(sortField);
  };
  const rates = people.map((item) => (Math.random() * 10).toFixed(2));
  if (!people.length) {
    return <div>Loading</div>;
  }
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Пользователи</h2>

      <Table sort={sort} sortField={sortField} data={data} onSort={onSort} rates={rates} />
    </div>
  );
};

export default Users;
