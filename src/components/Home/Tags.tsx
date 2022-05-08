import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getArticlesByTag } from "../../api";
import { getAllArticlesByTagThunk } from "../../services/thunks";
import {
  CancelButtonDiv,
  Tag,
  TagsContainer,
} from "../StyledComponents/tagsStyles";

type TTagsProps = {
  tags: string[] | null;
  onClickTag: (tag: string, pager: (page: any) => {}, payload: any) => {};
};

type TCancelButtonProps = {
  tag: string;
};

const CancelButton: React.FC<TCancelButtonProps> = (tag, setIsActive) => {
  return <CancelButtonDiv />;
};

const Tags: React.FC<TTagsProps> = (props) => {
  const dispatch = useDispatch();
  const tags = props.tags;

  if (tags) {
    return (
      <TagsContainer>
        {tags.map((tag) => {
          const [isActive, setIsActive] = useState(false);

          const handleClick = (
            ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ) => {
            ev.preventDefault();
            dispatch(getAllArticlesByTagThunk({ tag: tag, page: 0 }))
              .unwrap()
              .then(() => {
                isActive ? setIsActive(false) : setIsActive(true);
              });
          };
          return (
            <Tag key={tag} isActive={isActive} onClick={handleClick}>
              {tag}
              {isActive && <CancelButton tag={tag} />}
            </Tag>
          );
        })}
      </TagsContainer>
    );
  } else {
    return <div>Loading Tags...</div>;
  }
};

export default Tags;
