import React, { Component } from "react";
import StyledButton, {
  GetStarted,
  SubmitButton,
  ThemeProviderComp,
} from "../Components/StyleComponents/Button";
import Container from "../Components/StyleComponents/container.style";

export default class StyledComponents extends Component {
  render() {
    return (
      <>
        <StyledButton variant="outline">LOGIN</StyledButton>
        <br />
        <StyledButton variant="elseif">SIGN UP</StyledButton> <br />
        <GetStarted as={"a"} href="https://google.com/">
          LETS GO
        </GetStarted>
        <SubmitButton> FORM SUBMIT</SubmitButton>
        <ThemeProviderComp>THEME_PROVIDER</ThemeProviderComp>
        <Container>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            reiciendis quas esse nihil ab aliquid consectetur tenetur officia
            nam id aliquam facilis, magni minima nobis cumque porro beatae
            velit. Libero quo voluptatum consequatur omnis eius, quam
            dignissimos ipsam. Sapiente, ipsum inventore? Delectus veritatis
            voluptatum magnam eaque fuga minima quae consequatur, quisquam dicta
            ex quaerat aspernatur expedita, beatae dolorum? Saepe minima ipsam
            dolor deleniti nulla quisquam, veritatis labore ab sapiente
            laudantium earum dicta corporis laborum harum vero impedit aliquid
            cumque, id, sit nostrum quis cupiditate blanditiis ullam!
            Consequuntur aliquid non odit suscipit cum ipsa eaque blanditiis
            quibusdam, ea, officiis officia vitae.
          </p>
          <p>
            Our mission: to help people learn to code for free. We accomplish
            this by creating thousands of videos, articles, and interactive
            coding lessons - all freely available to the public. We also have
            thousands of freeCodeCamp study groups around the world.
          </p>
        </Container>
      </>
    );
  }
}
