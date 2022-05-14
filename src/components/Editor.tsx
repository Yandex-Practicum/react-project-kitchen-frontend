import ListErrors from "./ListErrors";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  createArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
} from "../services/thunks";
import { useForm } from "react-hook-form";
import * as Styles from "../components/StyledComponents/editorStyles";
import IconInputFile from "../UI/icon-input-file/icon-input-file";
import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import DeleteArticleBtn from "./DeleteArticleBtn";
import Modal from "./modal/modal";

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
  const params: { slug: string, id: string } = useParams();
  const { article } = useSelector((state: any) => state.article);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const onClose = (e: any) => {
    e.preventDefault();

    setIsModalOpen(false);
  }

  const deleteArticle = (e: any) => {
    e.preventDefault();
    dispatch(deleteArticleThunk(article.slug)).then(() => history.push("/"));
    setIsModalOpen(false);
  };

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
    <>
      <Styles.EditorSection>
        <Styles.EditorTitle>{params.hasOwnProperty('slug') ? "Редактировать запись" : "Название статьи"}</Styles.EditorTitle>

        <Styles.EditorForm action="POST" onSubmit={handleSubmitForm}>
          <Styles.EditorFieldSet>

            <Styles.EditorLabel>
              Название статьи
              <Styles.EditorInput
                isError={errors.title}
                {...register("title", {
                  required: "Это поле обязательно к заполнению.",
                })}
              />
            </Styles.EditorLabel>
            <Styles.ErrorsContainer>
              {errors?.title && <Styles.EditorError>{errors?.title?.message}</Styles.EditorError>}
            </Styles.ErrorsContainer>

            <Styles.EditorLabel>
              О чем статья
              <Styles.EditorInput
                isError={errors.description}
                {...register("description", {
                  required: "Это поле обязательно к заполнению.",
                })}
              />
            </Styles.EditorLabel>
            <Styles.ErrorsContainer>
              {errors?.description && <Styles.EditorError>{errors?.description?.message}</Styles.EditorError>}
            </Styles.ErrorsContainer>

            <Styles.EditorLabel>
              URL изображения (опционально)
              <Styles.EditorInputContainer>
                <Styles.EditorInput
                  isError={errors.image}
                  {...register("image", {
                    pattern: {
                      value: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
                      message: "Введите корректный url.",
                    },
                  })}
                />
                <Styles.EditorIcon>
                  <IconInputFile />
                </Styles.EditorIcon>
              </Styles.EditorInputContainer>
            </Styles.EditorLabel>
            <Styles.ErrorsContainer>
              {errors?.image && <Styles.EditorError>{errors?.image?.message}</Styles.EditorError>}
            </Styles.ErrorsContainer>
            <Styles.EditorLabel>
              Текст статьи
              <Styles.EditorTextarea
                minRows={5.4}
                isError={errors.body}
                {...register("body", {
                  required: "Это поле обязательно к заполнению.",
                })}
              />
            </Styles.EditorLabel>
            <Styles.ErrorsContainer>
              {errors?.body && <Styles.EditorError>{errors?.body?.message}</Styles.EditorError>}
            </Styles.ErrorsContainer>

            <Styles.EditorLabel>
              Теги (через запятую)
              <Styles.EditorInput
                isError={errors.tagInput}
                {...register("tagInput")}
              />
            </Styles.EditorLabel>
            <Styles.ErrorsContainer>
              {errors?.tagInput && <Styles.EditorError>{errors?.tagInput?.message}</Styles.EditorError>}
            </Styles.ErrorsContainer>

            <SignupLoginSubmitBtn
              btnText={params.hasOwnProperty('slug') ? "Сохранить  запись" : "Опубликовать запись"}
              disabled={!isError || inProgress}
            />

          </Styles.EditorFieldSet>

        </Styles.EditorForm >

        {params.slug && <DeleteArticleBtn  onClick={openModal} mrgTop="24px" text="Удалить запись" align="flex-end"/>}

      </Styles.EditorSection>

      { isModalOpen &&
        <Modal deleteArticle={deleteArticle} title={"Удалить запись"} onClose={onClose} />
      }
    </>
  )
}

export default Editor;
