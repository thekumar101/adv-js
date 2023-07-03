import { Fragment } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <Fragment>
      <h2>Sign in</h2>
      <button onClick={logGoogleUser}>Sign In using Google</button>
      <SignUp />
    </Fragment>
  );
};

export default SignIn;
