import React from "react";
import {TArticleProperties} from "../services/types";

export const sortArrayOfObjects = (array: Array<any>, keyName: string) => {
  array.sort((a, b) => {
    return b[keyName] - a[keyName]
  })
  return array;
}

