import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../services/thunks";
import { useForm } from "react-hook-form";
import SignupLoginSubmitBtn from "../components/SignupLoginSubmitBtn";
import IconInput from "../UI/icon-input/icon-input";
import IconInputFile from "../UI/icon-input-file/icon-input-file";
import * as Styles from "../components/StyledComponents/settingsStyles";

interface ISettingsForm {
  setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void;
}

type FormData = {
  image: string;
  username: string;
  email: string;
  password: string;
};

const SettingsForm: FC<ISettingsForm> = ({ setIsUpdatedInfoMsg }) => {
  const { currentUser } = useSelector((state: any) => state.common)
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorsResponse, setErrorsResponse] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const { inProgress } = useSelector((state: any) => state.settings);

  const { register, setValue, getValues, formState: { errors, isValid }, handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      image: currentUser.image,
      email: currentUser.email,
      password: "",
      username: currentUser.username,
    },
  });

  const handleSubmitForm = handleSubmit(({ image, username, email, password }, e) => {
    e && e.preventDefault();
    dispatch(updateUserThunk({ image, username, email, password }))
      .unwrap()
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  });

  useEffect(() => {
    setIsError(isValid)
  })

  useEffect(() => {
    setValue('username', currentUser.username);
    setValue('email', currentUser.email);
  },[currentUser.username, currentUser.email])

  const isDisabled = getValues('password') === "" || inProgress;

  const onToggle = () => {
    setVisible((visible) => !visible);
  };

  return (
    <Styles.SettingsForm action="POST" onSubmit={handleSubmitForm}>
      <Styles.SettingsFieldSet>

        <Styles.SettingsLabel>
          URL изображения профиля
          <Styles.SettingsInputContainer>
            <Styles.SettingsInput
              isError={errors.image}
              {...register("image", {
                pattern: {
                  value: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
                  message: "Введите корректный url.",
                },
              })}
            />
            <Styles.SettingsIcon>
              <IconInputFile />
            </Styles.SettingsIcon>
          </Styles.SettingsInputContainer>
        </Styles.SettingsLabel>
        <Styles.ErrorsContainer>
          {errors?.image && <Styles.SettingsError>{errors?.image?.message}</Styles.SettingsError>}
        </Styles.ErrorsContainer>

        <Styles.SettingsLabel>
          Имя пользователя
          <Styles.SettingsInput
            isError={errors.username}
            {...register("username", {
              pattern: {
                value: /[a-zA-Z0-9]$/,
                message: "Имя пользователя может содержать буквы кириллицы и цифры.",
              },
              minLength: {
                value: 2,
                message: "Имя должно быть не менее двух букв.",
              },
            })}
          />
        </Styles.SettingsLabel>
        <Styles.ErrorsContainer>
          {errors?.username && <Styles.AutoError>{errors?.username?.message}</Styles.AutoError>}
        </Styles.ErrorsContainer>

        <Styles.SettingsLabel>
          E-mail
          <Styles.SettingsInput
            isError={errors.email}
            {...register("email", {
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Пример email: name@example.com",
              },
            })}
          />
        </Styles.SettingsLabel>
        <Styles.ErrorsContainer>
          {errors?.email && <Styles.AutoError>{errors?.email?.message}</Styles.AutoError>}
        </Styles.ErrorsContainer>

        <Styles.SettingsLabel>
          Новый пароль
          <Styles.SettingsInputContainer>
            <Styles.SettingsInput
              autoComplete="new-password"
              type={visible ? "text" : "password"}
              isError={errors.password}
              {...register("password", {
                pattern: {
                  value: /[a-zA-Z0-9]$/,
                  message: "Пароль может содержать только буквы латинского алфавита и цифры.",
                },
                minLength: {
                  value: 5,
                  message: "Пароль должен быть более 5 символов.",
                },
              })}
            />
            <Styles.SettingsIcon>
              <IconInput visible={visible} toggle={onToggle} />
            </Styles.SettingsIcon>
          </Styles.SettingsInputContainer>
        </Styles.SettingsLabel>
        <Styles.ErrorsContainer>
          {errors?.password && <Styles.AutoError>{errors?.password?.message}</Styles.AutoError>}
        </Styles.ErrorsContainer>

        <SignupLoginSubmitBtn btnText="Обновить настройки" disabled={!isError || isDisabled} />

      </Styles.SettingsFieldSet>

    </Styles.SettingsForm>
  );
  // }
};

export default SettingsForm;
