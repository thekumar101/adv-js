import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFileds = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFileds();
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Passoword"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
