import React from 'react';

function ListErrors({errors}) {
  
  return (
    <ul className='error-messages'>
      {errors && (
        Object.keys(errors).map(key => {
          return (
            <li key={key}>
              {key} {errors[key]}
            </li>
          )
        })
      )}
    </ul>
  )
}

export default ListErrors
