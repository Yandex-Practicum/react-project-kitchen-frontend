import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../services/thunks";
import { logout as logoutAction } from "../services/commonSlice";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as Styles from "../components/StyledComponents/settingsStyles";
import SignupLoginSubmitBtn from "../components/SignupLoginSubmitBtn";
import IconInput from "../UI/icon-input/icon-input";
import IconInputFile from '../UI/icon-input-file/icon-input-file'

interface ISettingsForm {
  setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void;
}

const SettingsForm: FC<ISettingsForm> = ({ setIsUpdatedInfoMsg }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.common);
  const [isError, setIsError] = useState(false);
  const [errorsResponse, setErrorsResponse] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const [formValues, setFormvalues] = useState({
    image: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormvalues({ ...currentUser, image: '', password: "" });
    }
  }, [currentUser]);

  const updateForm = (e: { target: { name: string; value: string } }) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(updateUserThunk(formValues))
      .unwrap()
      .then(() => {
        setIsUpdatedInfoMsg(true);
        setTimeout(() => {
          setIsUpdatedInfoMsg(false);
        }, 1500);
      })
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  };

  const onToggle = () => {
    setVisible((visible) => !visible);
  };

  return (
    <Styles.SettingsForm action="POST" onSubmit={onSubmit}>
      <Styles.SettingsFieldSet>
      
        <Styles.SettingsLabel>
        URL изображения профиля
        <Styles.SettingsInputContainer>
        <Styles.SettingsInput
            isError={false}
            type="url"
            placeholder="URL изображения профиля"
            value={formValues.image}
            name="image"
            onChange={updateForm}
          />
           <Styles.SettingsIcon>
              <IconInputFile/>
          </Styles.SettingsIcon>
          
        </Styles.SettingsInputContainer>
         
         
        </Styles.SettingsLabel>
        {/* second */}

        <Styles.SettingsLabel>
          Имя пользователя
          <Styles.SettingsInput
            isError={false}
            type="text"
            placeholder="Имя пользователя"
            value={formValues.username}
            name="username"
            onChange={updateForm}
          />
        </Styles.SettingsLabel>
        {/* third*/}
        <Styles.SettingsLabel>
          E-mail
          <Styles.SettingsInput
            isError={false}
            type="email"
            placeholder="Email"
            value={formValues.email}
            name="email"
            onChange={updateForm}
          />
        </Styles.SettingsLabel>

        {/* third*/}

        <Styles.SettingsLabel>
          Новый пароль
          <Styles.SettingsInputContainer>
            <Styles.SettingsInput
              isError={false}
              type={visible ? "text" : "password"}
              placeholder="Новый пароль"
              value={formValues.password}
              name="password"
              onChange={updateForm}
            />
            <Styles.SettingsIcon>
              <IconInput visible={visible} toggle={onToggle} />
            </Styles.SettingsIcon>

            <input 
              type="file"
            />
          </Styles.SettingsInputContainer>
        </Styles.SettingsLabel>
        
        <SignupLoginSubmitBtn btnText="Обновить настройки" disabled={false} />

      </Styles.SettingsFieldSet>

    </Styles.SettingsForm>
  );
  // }
};

export default SettingsForm;
