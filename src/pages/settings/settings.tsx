import ListErrors from "../../components/ListErrors";
import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../services/thunks";
import { logout as logoutAction } from "../../services/commonSlice";
import { useHistory } from "react-router";
import SettingsForm from "../../components/settings-form";
import * as Styles from "../../components/StyledComponents/settingsStyles";
// interface ISettingsForm {
//   setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void
// }

const Settings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isUpdatedInfoMsg, setIsUpdatedInfoMsg] = useState(false);


  return (
    <Styles.SettingsSection>
      <Styles.SettingsTitle>Ваши настройки</Styles.SettingsTitle>

      {isUpdatedInfoMsg && <h4 className="text-xs-center">Updated</h4>}

      {/* <ListErrors errors={this.props.errors}></ListErrors> */}

      <SettingsForm setIsUpdatedInfoMsg={setIsUpdatedInfoMsg} />
    </Styles.SettingsSection>
  );
  // }
};

export default Settings;
