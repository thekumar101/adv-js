import { Fragment } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss';
const Authentication = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
