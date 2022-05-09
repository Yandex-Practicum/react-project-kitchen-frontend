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

type FormData = {
  image: string,
  username: string;
  email: string;
  password: string;
};


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


  // const {register, formState: { errors, isValid }, handleSubmit,
  // } = useForm<FormData>({
  //   mode: "onChange",
  //   defaultValues: {
  //     image: "",
  //     email: "",
  //     password: "",
  //     username: "",
  //   },
  // });


  // const handleSubmitForm = handleSubmit(({...formData}, e) => {

  //   e && e.preventDefault();
  //   setFormvalues({...formData})
  //   dispatch(updateUserThunk({...formData} ))
  //     .unwrap()
  //     .catch((error: any) => {
  //       setErrorsResponse({ [error.name]: error.message });
  //     });
  // });


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
    <Styles.SettingsForm action="POST" onSubmit={ onSubmit }>
      <Styles.SettingsFieldSet>
        <Styles.SettingsLabel>
        URL изображения профиля
        <Styles.SettingsInputContainer>
          <Styles.SettingsInput
            isError={false}
            type="url"
            placeholder="url"
            value={formValues.image}
            name="image"
            onChange={updateForm}
            />
            {/* // isError={errors.email}
            // isError={errors.image}
            // {...register("image", { */}
            {/* //   // required: "Это поле обязательно к заполнению.",
            //   pattern: { */}
            {/* //     value:  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
            //     message: "Введите URL изображения",
            //   },
            //   minLength: { */}
            {/* //     value: 5,
            //     message: "Имя должно быть не менее двух букв.",
            //   },
            // })} */}
           
            <Styles.SettingsIcon>
                <IconInputFile/>
            </Styles.SettingsIcon>
          </Styles.SettingsInputContainer>
        {/* <Styles.ErrorsContainer>
            {errors?.image && <Styles.SettingsError>{errors?.image?.message}</Styles.SettingsError>}
        </Styles.ErrorsContainer>  */}
         
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
            // isError={errors.username}
            // {...register("username", {
            //   pattern: {
            //     value: /[a-zA-Z0-9]$/,
            //     message: "Имя пользователя может содержать буквы кириллицы и цифры.",
            //   },
            //   minLength: {
            //     value: 2,
            //     message: "Имя должно быть не менее двух букв.",
            //   },
            // })}
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
            // isError={errors.email}
            // placeholder={"Пример email: name@example.com"}
            // {...register("email", {
            //   pattern: {
            //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            //     message: "Пример email: name@example.com",
            //   },
            // })}
          />
        </Styles.SettingsLabel>

        {/* third*/}

        <Styles.SettingsLabel>
          Новый пароль
          <Styles.SettingsInputContainer>
            <Styles.SettingsInput
            // isError={errors.password}
            // {...register("password", {
            //   pattern: {
            //     value: /[a-zA-Z0-9]$/,
            //     message: "Имя пользователя может содержать буквы кириллицы и цифры.",
            //   },
            //   minLength: {
            //     value: 5,
            //     message: "Пароль должен быть более 5 символов.",
            //   },
            // })}
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
          </Styles.SettingsInputContainer>
        </Styles.SettingsLabel>
        
        <SignupLoginSubmitBtn btnText="Обновить настройки" disabled={false} />

      </Styles.SettingsFieldSet>

    </Styles.SettingsForm>
  );
  // }
};

export default SettingsForm;
