import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import ListErrors from '../ListErrors/ListErrors';
import styles from './authForm.module.scss';
import Button from '../ui-library/Buttons/Button';

const { page, container, title, formBox, form, link, submit } = styles;

function AuthForm(props) {
  const apiErrors = useSelector((state) => state.auth.errors);

  function handleSubmitForm(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <div className={page}>
      <div className={container}>
        <div className={formBox}>
          <h1 className={title}>{props.btnText}</h1>
          <p className='text-xs-center'>
            <Link to={props.oppositeLink} className={link}>
              {props.crossLinkText}
            </Link>
          </p>

          {<ListErrors errors={apiErrors} />}

          <form onSubmit={handleSubmitForm} name={props.formName} noValidate className={form}>
            <fieldset>
              {props.children}
              <div className={submit}>
                <Button onClick={handleSubmitForm} disabled={!props.isFormValid}>
                  {props.btnText}
                </Button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
