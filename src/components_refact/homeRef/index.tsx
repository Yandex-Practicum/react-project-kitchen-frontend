import { FC } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';
import agent from '../../agent';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from '../../constants/actionTypes';
const { Promise } = global;

export const Home: FC = (props: any) => {
  const dispatch = useDispatch()
  const { currentUser, token } = useSelector((state: any) => state.common);
  const onClickTag = (tag: any, pager: any, payload: any) => {
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload })
  }

  return (
    <div className='home-page'>

      <Banner token={props.token} appName={props.appName} />
      <div className='container page'>

        <div className='row'>
          <MainView />
          <div className='col-md-3'>
            <div className='sidebar'>
              <p>Popular Tags</p>
              <Tags
                tags={props.tags}
                onClickTag={props.onClickTag} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
} 