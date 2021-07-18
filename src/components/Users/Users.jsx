import React, { FC } from 'react';
import Table from './Table'
import mockData from '../../slices/mock-data'
import { useState } from 'react';
import lodash from 'lodash'
import s from './style.module.scss';

const Users = () => {
  React.useEffect(() => {
    console.log('dispatch get-users');
    //eslint-disable-next-line
  }, []);
  const [sortField, setSortField] = useState('id')
  const [sort, setSort] = useState('asc')
  const [data, setData] = useState(mockData.people)

  const onSort = sortField => {
    setSortField(sortField)
    const sort1 = sort === 'asc' ? 'desc' : 'asc'
    const data1 = lodash.orderBy(data, sortField, sort1)
    setData(data1)
    setSort(sort1)
    setSortField(sortField)
  }

  return (
    <div className={s.wrapper}>
      <Table  
        sort={sort}
        sortField={sortField}
        data={data} 
        onSort={onSort}/>
    </div>
  );
};

export default Users;
