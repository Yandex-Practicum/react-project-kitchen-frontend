import React, {FunctionComponent} from "react";

import {LikeIconContainer, LikeIconNumber} from "../StyledComponents/like-icon-styles";

const Like: FunctionComponent<{counter: number, icon: string}> = (props) => {
  return (
    <LikeIconContainer>
      <LikeIconNumber>{props.counter}</LikeIconNumber>
      <img src={props.icon} alt="Иконка лайка"/>
    </LikeIconContainer>
  )
}

export default Like;
