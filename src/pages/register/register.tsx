import { Redirect } from "react-router-dom";
import ListErrors from "../../components/ListErrors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupLoginSubmitBtn from "../../components/SignupLoginSubmitBtn";
import { useForm } from "react-hook-form";
import { signupThunk } from "../../services/thunks";
import * as Styles from "../../components/StyledComponents/authStyles";
import * as FormStyles from "../../UI/forms/form";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.common);
  //Здесь нужно получить объект ошибок от сервера.
  const [errorsResponse, setErrorsResponse] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const { inProgress } = useSelector((state: any) => state.auth);


  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const handleSubmitForm = handleSubmit(({ username, email, password }, e) => {
    e && e.preventDefault();
    dispatch(signupThunk({ username, email, password }))
      .unwrap()
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  });

  useEffect(() => {
    setIsError(isValid)
  },)

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Styles.AuthSection>
      <Styles.AuthTitle>Зарегистрироваться</Styles.AuthTitle>
      <Styles.StyledLink to="/login">Войти</Styles.StyledLink>

      <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
        <FormStyles.FieldSet>

          <FormStyles.Label>
            Имя пользователя
            <FormStyles.Input
              isError={errors.username}
              {...register("username", {
                required: "Это поле обязательно к заполнению.",
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
            Email
            <FormStyles.Input
              isError={errors.email}
              {...register("email", {
                required: "Это поле обязательно к заполнению.",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Пример Email: name@example.com",
                },
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.email && <FormStyles.Error>{errors?.email?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            Пароль
            <FormStyles.Input
              isError={errors.password}
              {...register("password", {
                required: "Это поле обязательно к заполнению.",
                minLength: {
                  value: 5,
                  message: "Пароль должен быть более 4 символов.",
                },
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.password && <FormStyles.Error>{errors?.password?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <SignupLoginSubmitBtn btnText="Зарегистрироваться" disabled={!isError || inProgress} />

        </FormStyles.FieldSet>
      </FormStyles.Form>

      {/* <ListErrors errors={errorsResponse} /> */}
    </Styles.AuthSection>
  );
};

export default Register;
