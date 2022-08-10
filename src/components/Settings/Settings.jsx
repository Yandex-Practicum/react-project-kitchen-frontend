import { useEffect } from 'react';
import { connect } from 'react-redux';
import ListErrors from '../ListErrors/ListErrors';
import agent from '../../agent';
import { SETTINGS_SAVED, SETTINGS_PAGE_UNLOADED, LOGOUT } from '../../constants/actionTypes';
import useForm from '../../hooks/useForm';

const SettingsForm = ({ currentUser, onSubmitForm }) => {
  const [values, handleChange, setValues] = useForm({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (currentUser) {
      setValues({
        image: currentUser.image,
        username: currentUser.username,
        bio: currentUser.bio,
        email: currentUser.email,
        password: currentUser.password,
      });
    }
  }, [currentUser]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const user = { ...values };
    if (!user.password) {
      delete user.password;
    }

    onSubmitForm(user);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <fieldset>
        <fieldset className='form-group'>
          <input
            className='form-control'
            onChange={handleChange}
            placeholder='URL of profile picture'
            type='text'
            value={values.image}
          />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            onChange={handleChange}
            placeholder='Username'
            type='text'
            value={values.username}
          />
        </fieldset>

        <fieldset className='form-group'>
          <textarea
            className='form-control form-control-lg'
            onChange={handleChange}
            placeholder='Short bio about you'
            rows='8'
            value={values.bio}
          />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            onChange={handleChange}
            placeholder='Email'
            type='email'
            value={values.email}
          />
        </fieldset>

        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            onChange={handleChange}
            placeholder='New Password'
            type='password'
            value={values.password}
          />
        </fieldset>

        <button
          className='btn btn-lg btn-primary pull-xs-right'
          // disabled={inProgress}
          type='submit'
        >
          Update Settings
        </button>
      </fieldset>
    </form>
  );
};

const mapStateToProps = (state) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user) =>
    dispatch({
      type: SETTINGS_SAVED,
      payload: agent.Auth.save(user),
    }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

const Settings = ({ errors, currentUser, onSubmitForm, onClickLogout }) => (
  <div className='settings-page'>
    <div className='container page'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 col-xs-12'>
          <h1 className='text-xs-center'>Your Settings</h1>

          <ListErrors errors={errors} />

          <SettingsForm currentUser={currentUser} onSubmitForm={onSubmitForm} />

          <hr />

          <button className='btn btn-outline-danger' onClick={onClickLogout} type='button'>
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
