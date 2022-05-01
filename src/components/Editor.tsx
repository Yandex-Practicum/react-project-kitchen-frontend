import ListErrors from "./ListErrors";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  createArticleThunk,
  getArticleThunk,
  updateArticleThunk,
} from "../services/thunks";
import { clearEditor } from "../services/editorSlice";
import { clearArticle } from "../services/articleSlice";

type TEditorProps = {
  match: {
    params: {
      slug: string;
    };
  };
};

const Editor: React.FC<TEditorProps> = (props) => {
  const dispatch = useDispatch();
  const { article } = useSelector((state: any) => state.article);
  const history = useHistory();

  const [form, setForm] = useState({
    title: "",
    description: "",
    body: "",
    tagInput: "",
  });
  const [inProgress, setInProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [tagList, setTagList] = useState([]);
  const params: { slug: string } = useParams();

  const onChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onRemoveTagClick = (index: number) => {
    const updatedTagList = tagList.filter((t: string, i) => i !== index);
    setTagList(updatedTagList);
  };

  const updateArticle = () => {
    setInProgress(true);
    dispatch(
      updateArticleThunk({
        ...form,
        tagList: [...tagList, ...form.tagInput.split(" ").filter((t) => t)],
        slug: params.slug,
      })
    )
      .unwrap()
      .then((data: any) => {
        setInProgress(false)
        history.push(`/article/${data.article.slug}`)
      })
      .catch((err: any) => {
        setErrors({ error: err.message });
        setInProgress(false);
      });
  };

  const createArticle = () => {
    setInProgress(true);
    dispatch(
      createArticleThunk({
        ...form,
        tagList: [...tagList, ...form.tagInput.split(" ").filter((t) => t)],
      })
    )
      .unwrap()
      .then((data: any) => {
        setInProgress(false);
        history.push(`/article/${data.article.slug}`);
      })
      .catch((err: any) => {
        setErrors({ error: err.message });
        setInProgress(false);
      });
  };

  const watchForEnter = (ev: {
    keyCode: number;
    preventDefault: () => void;
  }) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      if (params.slug) {
        updateArticle();
      } else {
        createArticle();
      }
    }
  };

  const onSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (params.slug) {
      updateArticle();
    } else {
      createArticle();
    }
  };

  useEffect(() => {
    if (params.slug) {
      dispatch(getArticleThunk(params.slug));
    }
    return () => {
      setForm({ title: "", description: "", body: "", tagInput: "" });
      setInProgress(false);
      dispatch(clearEditor());
      dispatch(clearArticle());
    };
  }, [params.slug]);

  useEffect(() => {
    if (article.slug) {
      const { body, description, title } = article;
      setForm({ body, description, title, tagInput: "" });
      setTagList(article.tagList);
    }
  }, [article]);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ListErrors errors={errors} />

            <form onSubmit={onSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={form.title}
                    name={"title"}
                    onChange={onChange}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    value={form.description}
                    name={"description"}
                    onChange={onChange}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={form.body}
                    name={"body"}
                    onChange={onChange}
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags separated by spaces"
                    value={form.tagInput}
                    name={"tagInput"}
                    onChange={onChange}
                    onKeyUp={watchForEnter}
                  />

                  {article.slug && (
                    <div className="tag-list">
                      {tagList.map((tag: string, i) => {
                        return (
                          <span className="tag-default tag-pill" key={i}>
                            <i
                              className="ion-close-round"
                              onClick={() => onRemoveTagClick(i)}
                            ></i>
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                  disabled={inProgress}
                >
                  {article.slug ? "Update" : "Publish"} Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
