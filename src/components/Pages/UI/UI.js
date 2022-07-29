import React from 'react';
import Button from '../../ui-library/Buttons/Button';
import NavButton from '../../ui-library/Buttons/NavButton';
import TextButton from '../../ui-library/Buttons/TextButton';
import IconSet from '../../ui-library/Icons';
import Tag from '../../ui-library/Tag/Tag';

import styleUI from './UI.module.scss';

const UI = () => (
  <div className={styleUI.wrapper}>
    <div>
      <h2 className={styleUI.h2}>Иконки</h2>
      <div className={styleUI.group_layout}>
        <IconSet.AlertIcon />
        <IconSet.CheckIcon />
        <IconSet.ChevronLeftIcon />
        <IconSet.ChevronRightIcon />
        <IconSet.CloseIcon />
        <IconSet.CopyIcon />
        <IconSet.DislikeIcon />
        <IconSet.EditIcon />
        <IconSet.GearIcon />
        <IconSet.HeartIcon />
        <IconSet.HeartIconFilled />
        <IconSet.HideIcon />
        <IconSet.HomeIcon />
        <IconSet.LikeIcon />
        <IconSet.LoginIcon />
        <IconSet.MinusIcon />
        <IconSet.PaperclipIcon />
        <IconSet.PlusIcon />
        <IconSet.ShowIcon />
        <IconSet.TrashIcon />
        <h4 className={styleUI.h4}>:default</h4>
      </div>
      <div className={styleUI.group_layout}>
        <IconSet.AlertIcon color='secondary' />
        <IconSet.CheckIcon color='secondary' />
        <IconSet.ChevronLeftIcon color='secondary' />
        <IconSet.ChevronRightIcon color='secondary' />
        <IconSet.CloseIcon color='secondary' />
        <IconSet.CopyIcon color='secondary' />
        <IconSet.DislikeIcon color='secondary' />
        <IconSet.EditIcon color='secondary' />
        <IconSet.GearIcon color='secondary' />
        <IconSet.HeartIcon color='secondary' />
        <IconSet.HeartIconFilled color='secondary' />
        <IconSet.HideIcon color='secondary' />
        <IconSet.HomeIcon color='secondary' />
        <IconSet.LikeIcon color='secondary' />
        <IconSet.LoginIcon color='secondary' />
        <IconSet.MinusIcon color='secondary' />
        <IconSet.PaperclipIcon color='secondary' />
        <IconSet.PlusIcon color='secondary' />
        <IconSet.ShowIcon color='secondary' />
        <IconSet.TrashIcon color='secondary' />
        <h4 className={styleUI.h4}>:color=&apos;secondary&apos;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <IconSet.AlertIcon color='alert' />
        <IconSet.CheckIcon color='alert' />
        <IconSet.ChevronLeftIcon color='alert' />
        <IconSet.ChevronRightIcon color='alert' />
        <IconSet.CloseIcon color='alert' />
        <IconSet.CopyIcon color='alert' />
        <IconSet.DislikeIcon color='alert' />
        <IconSet.EditIcon color='alert' />
        <IconSet.GearIcon color='alert' />
        <IconSet.HeartIcon color='alert' />
        <IconSet.HeartIconFilled color='alert' />
        <IconSet.HideIcon color='alert' />
        <IconSet.HomeIcon color='alert' />
        <IconSet.LikeIcon color='alert' />
        <IconSet.LoginIcon color='alert' />
        <IconSet.MinusIcon color='alert' />
        <IconSet.PaperclipIcon color='alert' />
        <IconSet.PlusIcon color='alert' />
        <IconSet.ShowIcon color='alert' />
        <IconSet.TrashIcon color='alert' />
        <h4 className={styleUI.h4}>:color=&apos;alert&apos;</h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Кнопки</h2>
      <div className={styleUI.group_layout}>
        <Button></Button>
        <h4 className={styleUI.h4}>:Button</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button type='outline_alert'></Button>
        <h4 className={styleUI.h4}>:Button type=&apos;outline_alert&apos;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button disabled></Button>
        <h4 className={styleUI.h4}>:Button disabled</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button icon={<IconSet.CheckIcon />}></Button>
        <h4 className={styleUI.h4}>:Button icon=&#123;&lt;CheckIcon /&gt;&#125;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button type='outline_alert' icon={<IconSet.TrashIcon />}>
        </Button>
        <h4 className={styleUI.h4}>
          :Button type=&apos;outline_alert&apos; icon=&#123;&lt;TrashIcon /&gt;&#125;
        </h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton></NavButton>
        <h4 className={styleUI.h4}>:NavButton to=&apos;/&apos;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton to='/ui'></NavButton>
        <h4 className={styleUI.h4}>:NavButton to=&apos;/ui&apos;</h4>
      </div>
      <div className={styleUI.group_layout}>
        <TextButton></TextButton>
        <h4 className={styleUI.h4}>:TextButton</h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Теги</h2>
      <Tag></Tag>
    </div>
  </div>
);

export default UI;
