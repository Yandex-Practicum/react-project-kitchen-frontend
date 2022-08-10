/* eslint-disable no-console */
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
  MenuIcon,
} from '../../ui-library/Icons';
import TextArea from '../../ui-library/TextArea/TextArea';
import TextField from '../../ui-library/TextField/TextField';

import styleUI from './UI.module.scss';

const UI = () => (
  <div className={styleUI.wrapper}>
    <div>
      <h2 className={styleUI.h2}>Иконки</h2>
      <p className={styleUI.props}>
        {`<icon onClick, size = 'default', color = 'primary', className = ''/>`}
      </p>
      <div className={styleUI.group_layout_icons}>
        <div>
          <AlertIcon /> <h4 className={styleUI.h4}>{`<AlertIcon />`}</h4>
        </div>
        <div>
          <CheckIcon /> <h4 className={styleUI.h4}>{`<CheckIcon />`}</h4>
        </div>
        <div>
          <ChevronLeftIcon /> <h4 className={styleUI.h4}>{`<ChevronLeftIcon />`}</h4>
        </div>
        <div>
          <ChevronRightIcon /> <h4 className={styleUI.h4}>{`<ChevronRightIcon />`}</h4>
        </div>
        <div>
          <CloseIcon /> <h4 className={styleUI.h4}>{`<CloseIcon />`}</h4>
        </div>
        <div>
          <CopyIcon /> <h4 className={styleUI.h4}>{`<CopyIcon />`}</h4>
        </div>
        <div>
          <DislikeIcon /> <h4 className={styleUI.h4}>{`<DislikeIcon />`}</h4>
        </div>
        <div>
          <EditIcon /> <h4 className={styleUI.h4}>{`<EditIcon />`}</h4>
        </div>
        <div>
          <GearIcon /> <h4 className={styleUI.h4}>{`<GearIcon />`}</h4>
        </div>
        <div>
          <HeartIcon /> <h4 className={styleUI.h4}>{`<HeartIcon />`}</h4>
        </div>
        <div>
          <HeartIconFilled /> <h4 className={styleUI.h4}>{`<HeartIconFilled />`}</h4>
        </div>
        <div>
          <HideIcon /> <h4 className={styleUI.h4}>{`<HideIcon />`}</h4>
        </div>
        <div>
          <HomeIcon /> <h4 className={styleUI.h4}>{`<HomeIcon />`}</h4>
        </div>
        <div>
          <LikeIcon /> <h4 className={styleUI.h4}>{`<LikeIcon />`}</h4>
        </div>
        <div>
          <LoginIcon /> <h4 className={styleUI.h4}>{`<LoginIcon />`}</h4>
        </div>
        <div>
          <MinusIcon /> <h4 className={styleUI.h4}>{`<MinusIcon />`}</h4>
        </div>
        <div>
          <PaperclipIcon /> <h4 className={styleUI.h4}>{`<PaperclipIcon />`}</h4>
        </div>
        <div>
          <PlusIcon /> <h4 className={styleUI.h4}>{`<PlusIcon />`}</h4>
        </div>
        <div>
          <ShowIcon /> <h4 className={styleUI.h4}>{`<ShowIcon />`}</h4>
        </div>
        <div>
          <TrashIcon /> <h4 className={styleUI.h4}>{`<TrashIcon />`}</h4>
        </div>
        <div>
          <MenuIcon /> <h4 className={styleUI.h4}>{`<MenuIcon />`}</h4>
        </div>
      </div>
      <div className={styleUI.group_layout}>
        <AlertIcon onClick={() => console.log('Icon click')} />
        <CheckIcon onClick={() => console.log('Icon click')} />
        <ChevronLeftIcon onClick={() => console.log('Icon click')} />
        <ChevronRightIcon onClick={() => console.log('Icon click')} />
        <CloseIcon onClick={() => console.log('Icon click')} />
        <CopyIcon onClick={() => console.log('Icon click')} />
        <DislikeIcon onClick={() => console.log('Icon click')} />
        <EditIcon onClick={() => console.log('Icon click')} />
        <GearIcon onClick={() => console.log('Icon click')} />
        <HeartIcon onClick={() => console.log('Icon click')} />
        <HeartIconFilled onClick={() => console.log('Icon click')} />
        <HideIcon onClick={() => console.log('Icon click')} />
        <HomeIcon onClick={() => console.log('Icon click')} />
        <LikeIcon onClick={() => console.log('Icon click')} />
        <LoginIcon onClick={() => console.log('Icon click')} />
        <MinusIcon onClick={() => console.log('Icon click')} />
        <PaperclipIcon onClick={() => console.log('Icon click')} />
        <PlusIcon onClick={() => console.log('Icon click')} />
        <ShowIcon onClick={() => console.log('Icon click')} />
        <TrashIcon onClick={() => console.log('Icon click')} />
        <MenuIcon onClick={() => console.log('Icon click')} />
        <h4 className={styleUI.h4}>{`<icon onClick={Some function}/>`}</h4>
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
        <MenuIcon color='secondary' />
        <h4 className={styleUI.h4}>{`<icon color='secondary'/>`}</h4>
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
        <MenuIcon color='alert' />
        <h4 className={styleUI.h4}>{`<icon color='alert'/>`}</h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Кнопка</h2>
      <p className={styleUI.props}>
        {`icon, onClick, type = 'primary', disabled = false, className = ',
        children = 'Кнопка'`}
      </p>
      <div className={styleUI.group_layout}>
        <Button />
        <h4 className={styleUI.h4}>{`<Button />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button type='outline_alert' />
        <h4 className={styleUI.h4}>{`<Button type='outline_alert' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button disabled />
        <h4 className={styleUI.h4}>{`<Button disabled />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button icon={<CheckIcon />} />
        <h4 className={styleUI.h4}>{`<Button icon={<CheckIcon />} />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <Button icon={<TrashIcon />} type='outline_alert' />
        <h4 className={styleUI.h4}>
          {`<Button type=&apos;outline_alert&apos; icon={<TrashIcon />} />`}
        </h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Навигационная кнопка</h2>
      <p className={styleUI.props}>
        {`icon, to = '/', exact = true, className = '', children =
        'Кнопка'`}
      </p>
      <div className={styleUI.group_layout}>
        <NavButton />
        <h4 className={styleUI.h4}>{`<NavButton to='/' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton to='/ui' />
        <h4 className={styleUI.h4}>{`<NavButton to='/ui' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton icon={<HomeIcon />} />
        <h4 className={styleUI.h4}>{`<NavButton to='/' icon={<HomeIcon />} />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <NavButton icon={<HomeIcon />} to='/ui' />
        <h4 className={styleUI.h4}>{`<NavButton to='/ui' icon={<HomeIcon />} />`}</h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Текстовая кнопка</h2>
      <p
        className={styleUI.props}
      >{`<TextButton onClick, className = '', children = 'Кнопка'/>`}</p>
      <div className={styleUI.group_layout}>
        <TextButton />
        <h4 className={styleUI.h4}>{`<TextButton />`}</h4>
      </div>
    </div>
    <div>
      <h2 className={styleUI.h2}>Поле для ввода текста</h2>
      <p className={styleUI.props}>-</p>
      <div className={styleUI.group_layout}>
        <TextField name='name1' />
        <h4 className={styleUI.h4}>{`<TextField name='name1' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <TextField
          icon={<ShowIcon onClick={() => console.log('Input icon click')} />}
          name='name2'
          type='password'
        />
        <h4 className={styleUI.h4}>{`<TextField name='name2' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <TextField message='Error message' name='name3' textfieldState='error' type='password' />
        <h4
          className={styleUI.h4}
        >{`<TextField message='Error message' name='name3' textfieldState='error' type='password' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <TextField
          message='Success message'
          name='name4'
          textfieldState='success'
          type='password'
        />
        <h4
          className={styleUI.h4}
        >{`<TextField message='Success message' name='name4' textfieldState='success' type='password' />`}</h4>
      </div>
      <div className={styleUI.group_layout}>
        <TextArea />
        <h4
          className={styleUI.h4}
        >{`<TextArea message='Success message' name='name4' textareaState='success' type='password' />`}</h4>
      </div>
    </div>
  </div>
);

export default UI;
