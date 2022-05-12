import * as Styles from '../components/StyledComponents/DeleteArticleBtnStyles';
import Modal from './modal/modal';

type TBtnStyles = {
  mrgTop: string;
  text?: string;
  height?: string;
}

function DeleteArticleBtn (styles: TBtnStyles) {
  // const onClose = () => {
  //   console.log('ss')
  // }
  return(<>
  {/* <Modal title={"Удалить запись"} onClose={onClose} /> */}
    <Styles.button mrgTop={styles.mrgTop} height={styles.height}>
      {styles.text}
    </Styles.button>
  </>

  )
}

export default DeleteArticleBtn;
