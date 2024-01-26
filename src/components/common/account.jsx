import Footer from "./footer";
import LoginNav from "../loginNav";
import AccountPage from "../accountPage";

const Account = ({ pageName }) => {
  return (
    <div className="login__container">
      <div className="login__content">
        <LoginNav />
        <AccountPage pageName={pageName} />
        <Footer />
      </div>
    </div>
  );
};

export default Account;
