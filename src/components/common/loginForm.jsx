import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "./input";
import Joi from "joi-browser";
import FormButton from "./formButton";
import { handleSubmit, handleChange } from "../../utils/formValidation";
import { doLogin } from "../../services/database";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(6).label("Password"),
  };

  const doSubmit = async () => {
    const submitResult = await doLogin(data);
    if (submitResult.status) {
      navigate(`/home?id=${submitResult.data.username}`);
    } else {
      return;
    }
  };

  const onHandleSubmit = (e) => {
    const handleResult = handleSubmit(e, data, schema);
    setErrors(handleResult.errors);
    if (handleResult.status) doSubmit();
  };

  const onHandleChange = ({ currentTarget: input }) => {
    const handleResult = handleChange(input, data, input.name, schema);
    setData(handleResult.retData);
    setErrors(handleResult.errors);
  };

  return (
    <form onSubmit={(e) => onHandleSubmit(e)}>
      <Input
        type="text"
        name="username"
        label="Username"
        data={data}
        errors={errors}
        onChange={(e) => onHandleChange(e)}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        data={data}
        errors={errors}
        onChange={(e) => onHandleChange(e)}
      />
      <FormButton label="Sign In" />

      <div className="login__help">
        <div className="login__checkbox">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div className="login__needHelp">Need help?</div>
      </div>

      <div className="login__newAccount-message">
        <div className="login__signup-message">
          <span className="login__new-to-netflix">New to Netflix? </span>
          <Link to="/signup" className="login__signup-link">
            <span>Sign up now.</span>
          </Link>
        </div>

        <p className="login__protect-messge">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
