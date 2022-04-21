import React from "react";

type TListErrorsProps = {
  errors: any
}

const ListErrors: React.FC<TListErrorsProps> = ({errors}) => {
  if (errors) {
    return (
      <ul className="error-messages">
        {Object.keys(errors).map((key) => {
          return (
            <li key={key}>
              {key} {errors[key]}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default ListErrors;
