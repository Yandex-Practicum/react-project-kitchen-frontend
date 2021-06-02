import styles from './Form.module.scss';

const Form = ({children, onSubmit}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset>
        {children}
      </fieldset>
    </form>
  );
}

export default Form;