import LoginForm from "./common/loginForm";
import SignupForm from "./common/signupForm";
import Joi from "joi-browser";

const AccountPage = ({ pageName }) => {
  return (
    <div className="login__box">
      <div className="login__box--shadow">
        <div className="login__subbox">
          <h1 className="login__title">{pageName}</h1>
          {pageName === "Sign In" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
