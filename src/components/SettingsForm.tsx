import ListErrors from "./ListErrors";
import  { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../services/thunks";
import { logout as logoutAction } from "../services/commonSlice";
import { useHistory } from "react-router";

interface ISettingsForm {
  setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void
}

const SettingsForm: FC<ISettingsForm> = ({ setIsUpdatedInfoMsg }) => {
  const { currentUser } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();
  const [formValues, setFormvalues] = useState({
    image: "",
    username: "",
    bio: "",
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
        }, 1500);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL of profile picture"
            value={formValues.image}
            name="image"
            onChange={updateForm}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="username"
            value={formValues.username}
            name="username"
            onChange={updateForm}
          />
        </fieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows={8}
            placeholder="Short bio about you"
            value={formValues.bio}
            name="bio"
            onChange={updateForm}
          ></textarea>
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            value={formValues.email}
            name="email"
            onChange={updateForm}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="New Password"
            value={formValues.password}
            name="password"
            onChange={updateForm}
          />
        </fieldset>

        <button
          className="btn btn-lg btn-primary pull-xs-right"
          type="submit"
          disabled={false}
        >
          Update Settings
        </button>
      </fieldset>
    </form>
  );
  // }
};

const Settings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isUpdatedInfoMsg, setIsUpdatedInfoMsg] = useState(false);

  const logout = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {isUpdatedInfoMsg && <h4 className="text-xs-center">Updated</h4>}

            {/* <ListErrors errors={this.props.errors}></ListErrors> */}

            <SettingsForm setIsUpdatedInfoMsg={setIsUpdatedInfoMsg} />

            <hr />

            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default Settings;