import React from "react";
import * as Components from './Components'

function App() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type='text' placeholder='Name'/>
          <Components.Input type='email' placeholder='Email'/>
          <Components.Input type='password' placeholder='Password'/>
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign In</Components.Title>
          <Components.Input type='email' placeholder="Email"/>
          <Components.Input type="password" placeholder="Password"/>
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Hello!</Components.Title>
            <Components.Paragraph>Already have an account? please Sign In</Components.Paragraph>
            <Components.HiddenButton
              onClick={() => toggle(true)}>
                Sign In
            </Components.HiddenButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>Don't have an account yet? Please Sign Up</Components.Paragraph>
            <Components.HiddenButton
              onClick={() => toggle (false)}>
                Sign Up
            </Components.HiddenButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default App;
