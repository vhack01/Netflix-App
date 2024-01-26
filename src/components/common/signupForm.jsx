import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "./input";
import Joi from "joi-browser";
import FormButton from "./formButton";
import { handleSubmit, handleChange } from "../../utils/formValidation";
import { doSignup } from "../../services/database";

const SignupForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    fname: Joi.string().required().label("First name"),
    lname: Joi.string().required().label("Last name"),
    username: Joi.string().required().min(6).label("Username"),
    password: Joi.string().required().min(6).label("Password"),
  };

  const doSubmit = async () => {
    const signupResult = await doSignup(data);
    console.log("signupResult: ", signupResult);
    if (signupResult.status) {
      navigate(`/login`);
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
        name="fname"
        label="First Name"
        data={data}
        errors={errors}
        onChange={(e) => onHandleChange(e)}
      />
      <Input
        type="text"
        name="lname"
        label="Last Name"
        data={data}
        errors={errors}
        onChange={(e) => onHandleChange(e)}
      />
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
      {/* <Input
        type="password"
        name="password"
        label="Confirm Password"
        data={data}
        errors={errors}
        onChange={(e) =>
          handleChange(e, data, "password", schema, setData, setErrors)
        }
      /> */}
      <FormButton label="Sign Up" />

      <div className="login__signup-message signup__login-link">
        <span className="login__new-to-netflix"> or </span>
        <Link to="/login" className="login__signup-link">
          <span>Sign In </span>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
