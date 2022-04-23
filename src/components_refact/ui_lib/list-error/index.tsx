import React, { FC } from "react";

export const ListErrors: FC<{
  errors: {
    [key: string]: string;
  };
}> = ({ errors }) => {
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
