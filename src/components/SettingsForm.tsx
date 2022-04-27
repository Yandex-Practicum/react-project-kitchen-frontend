import React, { useEffect, useState, useMemo } from "react";

interface TSettingsFormProps {
  currentUser: any;
  onSubmitForm: any;
}

const SettingsForm: React.FC<TSettingsFormProps> = (props: any) => {

  const [ state, setState ] = useState ({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: ''
  });
  const [ isProgress, setIsProgress ] = useState(false);

  const updateState = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [field]: e.target.value})
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.password) {
      setState({...state, password: ''})
    };

    setIsProgress(true);

    props.onSubmitForm(state);
  };


  useEffect(() => {
    if (props.currentUser) {
      Object.assign(state, {
        image: props.currentUser.image || '',
        username: props.currentUser.username,
        bio: props.currentUser.bio,
        email: props.currentUser.email
      });
    }
  }, [])

 useMemo(()=> {
  if (props.currentUser) {
    setState(Object.assign({}, state, {
      image: props.currentUser.image || '',
      username: props.currentUser.username,
      bio: props.currentUser.bio,
      email: props.currentUser.email
    }));
  }
 },[props])

    return (
      <form onSubmit={submitForm}>
        <fieldset>

          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
              value={state.image}
              onChange={updateState('image')} />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              value={state.username}
              onChange={updateState('username')} />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              placeholder="Short bio about you"
              value={state.bio}
              onChange={updateState('bio')}>
            </textarea>
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={updateState('email')} />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
              value={state.password}
              onChange={updateState('password')} />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isProgress}
            //нужно написать переключение dissabled кнопки
            >
            Update Settings
          </button>

        </fieldset>
      </form>
    );
}

export { SettingsForm };
