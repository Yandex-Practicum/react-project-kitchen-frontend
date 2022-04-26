import ListErrors from './ListErrors';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  ARTICLE_SUBMITTED } from '../services/commonSlice'
import { getArticle } from '../api';
import { updateArticle } from '../api';
import { createArticle } from '../api';

type TEditorProps = {
  match: {
    params: {
      slug: string;
    };
  };
}

const Editor: React.FC<TEditorProps> = (props) => {
  const dispatch = useDispatch();

  const [form, setForm] = React.useState({ title: "", description: "", body: "", tagInput: ""});
  const [tagList, setTagList] = React.useState<Array<string>>([]);
  const [articleSlug, setArticleSlug] = React.useState('');
  const [inProgress, setInProgress] = React.useState(false);
  const [errors, setErrors] = React.useState();


  const onChange = (e: { target: { name: string; value: string; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const watchForEnter = (ev: { keyCode: number; preventDefault: () => void; }) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      setTagList(tagList.concat([form.tagInput]));

      setForm({...form, tagInput: ''});
    }
  };

  const removeTagHandler = (e: any) => {
    setTagList(tagList.filter(tag => tag !== e.target.parentElement.textContent));
  };

  const onSubmit = (payload: any) =>
    dispatch({ type: ARTICLE_SUBMITTED, payload })

  const submitForm = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault();

    const article = {
      title: form.title,
      description: form.description,
      body: form.body,
      tagList: tagList
    };

    setInProgress(true);

    const slug = { slug: articleSlug };
    const promise = articleSlug ?
      updateArticle(Object.assign(article, slug)) :
      createArticle(article);

    promise.catch((err) => {
      setErrors(err)
    })

    onSubmit(promise);
  };

  React.useEffect(() => {
    if (props.match.params.slug) {

      const article = getArticle(props.match.params.slug);
      article.then((res) => {
        setForm({
          title: res.article.title,
          description: res.article.description,
          body: res.article.body,
          tagInput: ''
        })
        setTagList(res.article.tagList);
        setArticleSlug(res.article.slug)
      })
    }

    return () =>  {
      setForm({ title: "", description: "", body: "", tagInput: ""});
      setTagList([]);
      setArticleSlug('');
      setInProgress(false);
    }
  }, [props.match.params.slug])

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">

            <ListErrors errors={errors}></ListErrors>

            <form>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={form.title}
                    name={'title'}
                    onChange={onChange} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    value={form.description}
                    name={'description'}
                    onChange={onChange} />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={form.body}
                    name={'body'}
                    onChange={onChange}>
                  </textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    value={form.tagInput}
                    name={'tagInput'}
                    onChange={onChange}
                    onKeyUp={watchForEnter} />

                  <div className="tag-list">
                    {
                      (tagList || []).map((tag: string) => {
                        return (
                          <span className="tag-default tag-pill" key={tag}>
                            <i  className="ion-close-round"
                                onClick={(e: any) => {
                                  removeTagHandler(e)
                                }}>
                            </i>
                            {tag}
                          </span>
                        );
                      })
                    }
                  </div>
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  disabled={inProgress}
                  onClick={submitForm}
                  >
                  Publish Article
                </button>

              </fieldset>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
