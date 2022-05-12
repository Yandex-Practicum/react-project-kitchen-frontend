import ListErrors from "./ListErrors";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  createArticleThunk,
  updateArticleThunk,
} from "../services/thunks";
import { useForm } from "react-hook-form";
import * as Styles from "../components/StyledComponents/editorStyles";
import * as FormStyles from "../UI/forms/form";
import IconInputFile from "../UI/icon-input-file/icon-input-file";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import DeleteArticleBtn from "./DeleteArticleBtn";

type FormData = {
  title: string;
  description: string;
  image: string;
  body: string;
  tagInput: string;
}

function Editor() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errorsResponse, setErrorsResponse] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [tagList, setTagList] = useState([]);
  const { inProgress } = useSelector((state: any) => state.article);
  const params: { slug: string } = useParams();
  const { article } = useSelector((state: any) => state.article);

  const {
    register,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      image: "",
      body: "",
      tagInput: ""
    }
  });

  useEffect(() => {
    if (!params.slug) {
      setValue("title", "");
      setValue("description", "");
      setValue("body", "");
      setValue("tagInput", "");
    }
    else {
      setValue("title", article.title);
      setValue("description", article.description);
      setValue("body", article.body);
      setValue("tagInput", article.tagList[0]);
    }
  }, [article, params])

  useEffect(() => {
    setIsError(isValid)
  })

  const handleSubmitForm = handleSubmit(({ title, description, image, body, tagInput }, e) => {
    e && e.preventDefault();
    if (params.hasOwnProperty('slug')) {
      updateArticle(title, description, image, body, tagInput);
    }
    else {
      createArticle(title, description, image, body, tagInput);
    }
  });

  const createArticle = (title: string, description: string, image: string, body: string, tagInput: string) => {
    dispatch(createArticleThunk({
      title, description, image, body,
      tagList: [...tagList, tagInput.split(",").filter((t) => t)],
    })
    )
      .unwrap()
      .then((data: any) => {
        history.push(`/article/${data.article.slug}`);
      })
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  }

  const updateArticle = (title: string, description: string, image: string, body: string, tagInput: string) => {
    dispatch(updateArticleThunk({
      title, description, image, body,
      tagList: [...tagList, tagInput.split(",").filter((t) => t)],
      slug: params.slug,
    })
    )
      .unwrap()
      .then((data: any) => {
        history.push(`/article/${data.article.slug}`);
      })
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  }

  return (
    <Styles.EditorSection>
      <Styles.EditorTitle>{params.hasOwnProperty('slug') ? "Редактировать запись" : "Название статьи"}</Styles.EditorTitle>

      <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
        <FormStyles.FieldSet>

          <FormStyles.Label>
            Название статьи
            <FormStyles.Input
              isError={errors.title}
              {...register("title", {
                required: "Это поле обязательно к заполнению.",
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.title && <FormStyles.Error>{errors?.title?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            О чем статья
            <FormStyles.Input
              isError={errors.description}
              {...register("description", {
                required: "Это поле обязательно к заполнению.",
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.description && <FormStyles.Error>{errors?.description?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            URL изображения (опционально)
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
            Текст статьи
            <Styles.EditorTextarea
              minRows={5.4}
              isError={errors.body}
              {...register("body", {
                required: "Это поле обязательно к заполнению.",
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.body && <FormStyles.Error>{errors?.body?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            Теги (через запятую)
            <FormStyles.Input
              isError={errors.tagInput}
              {...register("tagInput")}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.tagInput && <FormStyles.Error>{errors?.tagInput?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <SignupLoginSubmitBtn
            btnText={params.hasOwnProperty('slug') ? "Сохранить  запись" : "Опубликовать запись"}
            disabled={!isError || inProgress}
          />

        </FormStyles.FieldSet>

      </FormStyles.Form >

      {params.slug && <DeleteArticleBtn mrgTop="24px" text="Удалить запись" />}

    </Styles.EditorSection>
  )
}

export default Editor;
