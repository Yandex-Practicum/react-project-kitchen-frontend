import  { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../services/thunks";
import { logout as logoutAction } from "../services/commonSlice";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as Styles from "../components/StyledComponents/settingsStyles";
import SignupLoginSubmitBtn from "../components/SignupLoginSubmitBtn";

interface ISettingsForm {
  setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void
}

const SettingsForm: FC<ISettingsForm> = ({ setIsUpdatedInfoMsg }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.common);
  const [isError, setIsError] = useState(false);
  const [errorsResponse, setErrorsResponse] = useState<any>(null);
  const [formValues, setFormvalues] = useState({
    image: "",
    username: "",
    email: "",
    password: "",
  });


  useEffect(() => {
    if (currentUser) {
      setFormvalues({ ...currentUser, password: "" });
    }
  }, [currentUser]);

  const updateForm = (e: { target: { name: string; value: string }}) => {
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
        }, 1500)
      })
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      })
  };



  return (
    <form onSubmit={onSubmit}>
       <Styles.SettingsFieldSet>
          <Styles.SettingsLabel>
            URL изображения профиля
              <Styles.SettingsInput
                  isError={false}
                  type="url"
                  placeholder="URL of profile picture"
                  value={formValues.image}
                  name="image"
                  onChange={updateForm}
                 />
          </Styles.SettingsLabel>
        </Styles.SettingsFieldSet>
        {/* second */}

        <Styles.SettingsFieldSet>
          <Styles.SettingsLabel>
            Имя пользователя
            <Styles.SettingsInput
              isError={false}
              type="text"
              placeholder="username"
              value={formValues.username}
              name="username"
              onChange={updateForm}
           />

          </Styles.SettingsLabel>
        </Styles.SettingsFieldSet>
         {/* third*/}
        <Styles.SettingsFieldSet>
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

        </Styles.SettingsFieldSet>
         {/* third*/}

         <Styles.SettingsFieldSet>
          <Styles.SettingsLabel>
            Новый пароль
            <Styles.SettingsInput
              isError={false} 
              type="password"
              placeholder="Новый пароль"
              value={formValues.password}
              name="password"
              onChange={updateForm}
              
           />
          </Styles.SettingsLabel>
        </Styles.SettingsFieldSet>
        <SignupLoginSubmitBtn btnText="Обновить настройки" disabled={false} />
    
    </form>
  );
  // }
};

export default SettingsForm;