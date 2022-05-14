import React, {CSSProperties, FunctionComponent} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-responsive-carousel";
import SidebarInformation from "./sidebar-information";
import {composeCreatedDate} from "../utils/utils";
import ArticleSidebarView from "./article-sidebar-view";
import {useAppSelector} from "../services/hooks";
import {TArticleProperties} from "../services/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SidebarSlider: FunctionComponent<{ articles: Array<TArticleProperties> }> = (props) => {

  const baseChildren = <div style={{margin: '0'}}>{props.articles.map((article =>
    <ArticleSidebarView article={article}
                        articleDate={composeCreatedDate(article.createdAt)}/>))}</div>

  const indicatorStyles: CSSProperties = {
    background: '#ccc',
    width: 12,
    height: 12,
    display: 'inline-block',
    margin: '0 6px',
    borderRadius: '50%',
  };

  return (
    <Carousel
      statusFormatter={() => ''} // отменить отображение "1 из 5"
      autoFocus={false}
      showArrows={false}
      showIndicators
      emulateTouch={true}
      showStatus
      swipeable={true}
      showThumbs={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#008AFF' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
      renderItem={}
    >
      {baseChildren.props.children}
    </Carousel>
  );
}
