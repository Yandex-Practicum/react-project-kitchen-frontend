import ListErrors from './ListErrors';
import React, { useEffect, useState } from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT
} from '../constants/actionTypes';

function SettingsForm(props) {

  const [formState, setFormState] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: ''
  })
  
  const updateState = field => ev => {
    const newState = Object.assign({}, formState, { [field]: ev.target.value })
    setFormState(newState)
  }

  const submitForm = (event) => {
    event.preventDefault()

    const user = Object.assign({}, formState)
    if (!user.password) {
      delete user.password
    }
    props.onSubmitForm(user)
  }
  
  useEffect(() => {
    if (props.currentUser) {
      Object.assign(formState, {
        image: props.currentUser.image || '',
        username: props.currentUser.username,
        bio: props.currentUser.bio,
        email: props.currentUser.email
      })
    }
  }, [])

  useEffect(() => {
    if (props.currentUser) {
      setFormState(Object.assign({}, formState, {
        image: props.currentUser.image || '',
        username: props.currentUser.username,
        bio: props.currentUser.bio,
        email: props.currentUser.email
      }));
    }
  }, [props.currentUser])
  
  return (
    <form onSubmit={submitForm}>
      <fieldset>

        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL of profile picture"
            value={formState.image}
            onChange={updateState('image')} />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username"
            value={formState.username}
            onChange={updateState('username')} />
        </fieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows="8"
            placeholder="Short bio about you"
            value={formState.bio}
            onChange={updateState('bio')}>
          </textarea>
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={updateState('email')} />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="New Password"
            value={formState.password}
            onChange={updateState('password')} />
        </fieldset>

        <button
          className="btn btn-lg btn-primary pull-xs-right"
          type="submit"
          disabled={formState.inProgress}>
          Update Settings
        </button>

      </fieldset>
    </form>
  )
}

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: user =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
});

function Settings(props) {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">

            <h1 className="text-xs-center">Your Settings</h1>

            <ListErrors errors={props.errors}></ListErrors>

            <SettingsForm
              currentUser={props.currentUser}
              onSubmitForm={props.onSubmitForm} />

            <hr />

            <button
              className="btn btn-outline-danger"
              onClick={props.onClickLogout}>
              Or click here to logout.
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
