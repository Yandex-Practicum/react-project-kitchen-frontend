import { Link, Redirect } from "react-router-dom";
import ListErrors from "./ListErrors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import { useForm } from "react-hook-form";
import { signupThunk } from "../services/thunks";
import { authSlice } from "../services/authSlice";
import * as Styles from "../components/StyledComponents/authStyles";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.common);
  const [errorsResponse, setErrorsResponse] = useState<any>(null);

  const actionsAuth = authSlice.actions;

  const {
    register,
    formState: { errors },
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
    console.log({ username, email, password });

    dispatch(signupThunk({ username, email, password }))
      .unwrap()
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  });

  useEffect(() => {
    return () => {
      dispatch(actionsAuth.pageWasUnloaded());
    }
  })

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  console.log(errorsResponse);


  return (
    <Styles.AuthSection>
      <Styles.AuthTitle>Зарегистрироваться</Styles.AuthTitle>
      <Styles.StyledLink to="/login">Войти</Styles.StyledLink>

      <Styles.AuthForm action="POST" onSubmit={handleSubmitForm}>
        <fieldset>

          <Styles.AuthLabel>
            Имя пользователя
            <Styles.AuthInput
              isError={errors.username}
              {...register("username", {
                required: "Это поле обязательно к заполнению.",
                minLength: {
                  value: 2,
                  message: "Имя должно быть не менее двух букв.",
                },
              })}
            />
          </Styles.AuthLabel>
          <Styles.ErrorsContainer>
            {errors?.username && <Styles.AuthError>{errors?.username?.message}</Styles.AuthError>}
          </Styles.ErrorsContainer>

          <Styles.AuthLabel>
            Email
            <Styles.AuthInput
              isError={errors.email}
              {...register("email", {
                required: "Это поле обязательно к заполнению.",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Пример Email: name@example.com",
                },
              })}
            />
          </Styles.AuthLabel>
          <Styles.ErrorsContainer>
            {errors?.email && <Styles.AuthError>{errors?.email?.message}</Styles.AuthError>}
          </Styles.ErrorsContainer>

          <Styles.AuthLabel>
            Пароль
            <Styles.AuthInput
              isError={errors.password}
              {...register("password", {
                required: "Это поле обязательно к заполнению.",
                minLength: {
                  value: 5,
                  message: "Пароль должен быть более 4 символов.",
                },
              })}
            />
          </Styles.AuthLabel>
          <Styles.ErrorsContainer>
            {errors?.password && <Styles.AuthError>{errors?.password?.message}</Styles.AuthError>}
          </Styles.ErrorsContainer>

          <SignupLoginSubmitBtn btnText="Зарегистрироваться" />

        </fieldset>
      </Styles.AuthForm>

      <ListErrors errors={errorsResponse} />
    </Styles.AuthSection>
    // <section className="auth-page">
    //   <div className="container page">
    //     <div className="row">
    //       <div className="col-md-6 offset-md-3 col-xs-12">
    //         <h1 className="text-xs-center">Sign Up</h1>
    //         <p className="text-xs-center">
    //           <Link to="/login">Have an account?</Link>
    //         </p>

    //         <ListErrors errors={errorsResponse} />

    //         <form action="POST" onSubmit={handleSubmitForm}>
    //           <fieldset>
    //             <fieldset className="form-group">
    //               <input
    //                 className="form-control form-control-lg"
    //                 type="text"
    //                 placeholder="username"
    //                 {...register("username", {
    //                   required: "Это поле обязательно к заполнению.",
    //                   minLength: {
    //                     value: 2,
    //                     message: "Имя должно быть не менее двух букв.",
    //                   },
    //                 })}
    //               />
    //             </fieldset>
    //             <div style={{ height: 40 }}>
    //               {errors?.username && <p>{errors?.username?.message}</p>}
    //             </div>

    //             <fieldset className="form-group">
    //               <input
    //                 className="form-control form-control-lg"
    //                 type="email"
    //                 placeholder="Email"
    //                 {...register("email", {
    //                   required: "Это поле обязательно к заполнению.",
    //                   pattern: {
    //                     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    //                     message: "Пример Email: name@example.com",
    //                   },
    //                 })}
    //               />
    //             </fieldset>
    //             <div style={{ height: 40 }}>
    //               {errors?.email && <p>{errors?.email?.message}</p>}
    //             </div>

    //             <fieldset className="form-group">
    //               <input
    //                 className="form-control form-control-lg"
    //                 type="password"
    //                 placeholder="Password"
    //                 {...register("password", {
    //                   required: "Это поле обязательно к заполнению.",
    //                   minLength: {
    //                     value: 5,
    //                     message: "Пароль должен быть более 4 символов.",
    //                   },
    //                 })}
    //               />
    //             </fieldset>
    //             <div style={{ height: 40 }}>
    //               {errors?.password && <p>{errors?.password?.message}</p>}
    //             </div>
    //             <SignupLoginSubmitBtn btnText="Sign up" />
    //           </fieldset>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Register;
