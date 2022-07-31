import React from 'react';
import Button from '../../ui-library/Buttons/Button';
import NavButton from '../../ui-library/Buttons/NavButton';
import TextButton from '../../ui-library/Buttons/TextButton';
import {
  AlertIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CopyIcon,
  DislikeIcon,
  EditIcon,
  GearIcon,
  HeartIcon,
  HeartIconFilled,
  HideIcon,
  HomeIcon,
  LikeIcon,
  LoginIcon,
  MinusIcon,
  PaperclipIcon,
  PlusIcon,
  ShowIcon,
  TrashIcon,
} from '../../ui-library/Icons';

import styleUI from './UI.module.scss';

const UI = () => (
  <div className={styleUI.wrapper}>
    <div>
      <h2 className={styleUI.h2}>Иконки</h2>
      <p className={styleUI.props}>
        onClick, size = &apos;default&apos;, color = &apos;primary&apos;, className = &apos;&apos;
      </p>
      <div className={styleUI.group_layout_icons}>
        <div>
          <AlertIcon /> <h4 className={styleUI.h4}>&lt;AlertIcon /&gt;</h4>
        </div>
        <div>
          <CheckIcon /> <h4 className={styleUI.h4}>&lt;CheckIcon /&gt;</h4>
        </div>
        <div>
          <ChevronLeftIcon /> <h4 className={styleUI.h4}>&lt;ChevronLeftIcon /&gt;</h4>
        </div>
        <div>
          <ChevronRightIcon /> <h4 className={styleUI.h4}>&lt;ChevronRightIcon /&gt;</h4>
        </div>
        <div>
          <CloseIcon /> <h4 className={styleUI.h4}>&lt;CloseIcon /&gt;</h4>
        </div>
        <div>
          <CopyIcon /> <h4 className={styleUI.h4}>&lt;CopyIcon /&gt;</h4>
        </div>
        <div>
          <DislikeIcon /> <h4 className={styleUI.h4}>&lt;DislikeIcon /&gt;</h4>
        </div>
        <div>
          <EditIcon /> <h4 className={styleUI.h4}>&lt;EditIcon /&gt;</h4>
        </div>
        <div>
          <GearIcon /> <h4 className={styleUI.h4}>&lt;GearIcon /&gt;</h4>
        </div>
        <div>
          <HeartIcon /> <h4 className={styleUI.h4}>&lt;HeartIcon /&gt;</h4>
        </div>
        <div>
          <HeartIconFilled /> <h4 className={styleUI.h4}>&lt;HeartIconFilled /&gt;</h4>
        </div>
        <div>
          <HideIcon /> <h4 className={styleUI.h4}>&lt;HideIcon /&gt;</h4>
        </div>
        <div>
          <HomeIcon /> <h4 className={styleUI.h4}>&lt;HomeIcon /&gt;</h4>
        </div>
        <div>
          <LikeIcon /> <h4 className={styleUI.h4}>&lt;LikeIcon /&gt;</h4>
        </div>
        <div>
          <LoginIcon /> <h4 className={styleUI.h4}>&lt;LoginIcon /&gt;</h4>
        </div>
        <div>
          <MinusIcon /> <h4 className={styleUI.h4}>&lt;MinusIcon /&gt;</h4>
        </div>
        <div>
          <PaperclipIcon /> <h4 className={styleUI.h4}>&lt;PaperclipIcon /&gt;</h4>
        </div>
        <div>
          <PlusIcon /> <h4 className={styleUI.h4}>&lt;PlusIcon /&gt;</h4>
        </div>
        <div>
          <ShowIcon /> <h4 className={styleUI.h4}>&lt;ShowIcon /&gt;</h4>
        </div>
        <div>
          <TrashIcon /> <h4 className={styleUI.h4}>&lt;TrashIcon /&gt;</h4>
        </div>
      </div>
      <div className={styleUI.group_layout}>
        <AlertIcon color='secondary' />
        <CheckIcon color='secondary' />
        <ChevronLeftIcon color='secondary' />
        <ChevronRightIcon color='secondary' />
        <CloseIcon color='secondary' />
        <CopyIcon color='secondary' />
        <DislikeIcon color='secondary' />
        <EditIcon color='secondary' />
        <GearIcon color='secondary' />
        <HeartIcon color='secondary' />
        <HeartIconFilled color='secondary' />
        <HideIcon color='secondary' />
        <HomeIcon color='secondary' />
        <LikeIcon color='secondary' />
        <LoginIcon color='secondary' />
        <MinusIcon color='secondary' />
        <PaperclipIcon color='secondary' />
        <PlusIcon color='secondary' />
        <ShowIcon color='secondary' />
        <TrashIcon color='secondary' />
        <h4 className={styleUI.h4}>color=&apos;secondary&apos;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <AlertIcon color='alert' />
        <CheckIcon color='alert' />
        <ChevronLeftIcon color='alert' />
        <ChevronRightIcon color='alert' />
        <CloseIcon color='alert' />
        <CopyIcon color='alert' />
        <DislikeIcon color='alert' />
        <EditIcon color='alert' />
        <GearIcon color='alert' />
        <HeartIcon color='alert' />
        <HeartIconFilled color='alert' />
        <HideIcon color='alert' />
        <HomeIcon color='alert' />
        <LikeIcon color='alert' />
        <LoginIcon color='alert' />
        <MinusIcon color='alert' />
        <PaperclipIcon color='alert' />
        <PlusIcon color='alert' />
        <ShowIcon color='alert' />
        <TrashIcon color='alert' />
        <h4 className={styleUI.h4}>color=&apos;alert&apos;</h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Кнопка</h2>
      <p className={styleUI.props}>
        icon, onClick, type = &apos;primary&apos;, disabled = false, className = &apos;&apos;,
        children = &apos;Кнопка&apos;,
      </p>
      <div className={styleUI.group_layout}>
        <Button></Button>
        <h4 className={styleUI.h4}>&lt;Button /&gt;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button type='outline_alert'></Button>
        <h4 className={styleUI.h4}>&lt;Button type=&apos;outline_alert&apos; /&gt;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button disabled></Button>
        <h4 className={styleUI.h4}>&lt;Button disabled /&gt;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button icon={<CheckIcon />}></Button>
        <h4 className={styleUI.h4}>&lt;Button icon=&#123;&lt;CheckIcon /&gt;&#125; /&gt;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button type='outline_alert' icon={<TrashIcon />}></Button>
        <h4 className={styleUI.h4}>
          &lt;Button type=&apos;outline_alert&apos; icon=&#123;&lt;TrashIcon /&gt;&#125; /&gt;
        </h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Навигационная кнопка</h2>
      <p className={styleUI.props}>
        icon, to = &apos;/&apos;, exact = true, className = &apos;&apos;, children =
        &apos;Кнопка&apos;,
      </p>
      <div className={styleUI.group_layout}>
        <NavButton></NavButton>
        <h4 className={styleUI.h4}>&lt;NavButton to=&apos;/&apos; /&gt;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton to='/ui'></NavButton>
        <h4 className={styleUI.h4}>&lt;NavButton to=&apos;/ui&apos; /&gt;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton icon={<HomeIcon />}></NavButton>
        <h4 className={styleUI.h4}>
          &lt;NavButton to=&apos;/&apos; icon=&#123;&lt;HomeIcon /&gt;&#125; /&gt;
        </h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton to='/ui' icon={<HomeIcon />}></NavButton>
        <h4 className={styleUI.h4}>
          &lt;NavButton to=&apos;/ui&apos; icon=&#123;&lt;HomeIcon /&gt;&#125; /&gt;
        </h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Текстовая кнопка</h2>
      <p className={styleUI.props}>
        onClick, className = &apos;&apos;, children = &apos;Кнопка&apos;
      </p>
      <div className={styleUI.group_layout}>
        <TextButton></TextButton>
        <h4 className={styleUI.h4}>&lt;TextButton /&gt;</h4>
      </div>
    </div>
  </div>
);

export default UI;
