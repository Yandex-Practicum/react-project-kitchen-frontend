import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../services/thunks";
import { useForm } from "react-hook-form";
import SignupLoginSubmitBtn from "../components/SignupLoginSubmitBtn";
import IconInput from "../UI/icon-input/icon-input";
import IconInputFile from "../UI/icon-input-file/icon-input-file";
import * as Styles from "../components/StyledComponents/settingsStyles";
import * as FormStyles from "../UI/forms/form";
import Preloader from "./Preloader";

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
  }, [currentUser.username, currentUser.email])

  const isDisabled = getValues('password') === "" || inProgress;

  const onToggle = () => {
    setVisible((visible) => !visible);
  };

  return (
    <>
      {inProgress && (
        <Preloader />
      )}

      <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
        <FormStyles.FieldSet>

          <FormStyles.Label>
            URL изображения профиля
            <FormStyles.InputContainer>
              <FormStyles.Input
                isError={errors.image}
                {...register("image", {
                  pattern: {
                    value: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
                    message: "Введите корректный url.",
                  },
                })}
              />
              <FormStyles.Icon>
                <IconInputFile />
              </FormStyles.Icon>
            </FormStyles.InputContainer>
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.image && <FormStyles.Error>{errors?.image?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            Имя пользователя
            <FormStyles.Input
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
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.username && <FormStyles.Error>{errors?.username?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            E-mail
            <FormStyles.Input
              isError={errors.email}
              {...register("email", {
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Пример email: name@example.com",
                },
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.email && <FormStyles.Error>{errors?.email?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            Новый пароль
            <FormStyles.InputContainer>
              <FormStyles.Input
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
              <FormStyles.Icon>
                <IconInput visible={visible} toggle={onToggle} />
              </FormStyles.Icon>
            </FormStyles.InputContainer>
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.password && <FormStyles.Error>{errors?.password?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <SignupLoginSubmitBtn btnText="Обновить настройки" disabled={!isError || isDisabled} />

        </FormStyles.FieldSet>

      </FormStyles.Form>
    </>
  );
};

export default SettingsForm;
