import * as Styles from '../components/StyledComponents/DeleteArticleBtnStyles';

type TBtnStyles = {
  mrgTop: string;
  text?: string;
  height?: string;
}

function DeleteArticleBtn (styles: TBtnStyles) {

  return(
    <Styles.button mrgTop={styles.mrgTop} height={styles.height}>
      {styles.text}
    </Styles.button>
  )
}

export default DeleteArticleBtn;
