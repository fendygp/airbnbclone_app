import React from "react";

//import components
import * as Button from "../components/Button";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Main>
        <Header>
          <Logo source={require("../assets/rent-sign.png")}></Logo>
          <Typography.H1 color={colors.green}>Welcome to GreenHouse</Typography.H1>
        </Header>
        <Options>
          <Btn>
            <Button.BtnContain
              label="Continue with Google"
              color={colors.green}
              labelcolor="white"
              onPress={() => console.log("tbd")}
            />
          </Btn>
          <Btn>
            <Button.BtnOutline
              label="Create Account"
              color={colors.green}
              labelcolor={colors.green}
              fontSize={13}
              onPress={() => navigation.navigate("Signup")}
            />
          </Btn>
          <Btn>
            <Center>
              <Button.BtnText
                label="Login"
                color={colors.green}
                onPress={() => navigation.navigate("Login")}
              />
            </Center>
          </Btn>
        </Options>
        <Terms>
          <Typography.P color={colors.gray}>
            By tapping Continue, Create Account or More options, I agree to
            GreenHouse's Terms of Service, Payments Terms of Service, Privacy Policy
            and Nondiscrimination Policy.
          </Typography.P>
        </Terms>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const Main = styled.View`
  padding: 30px;
`;

const Header = styled.View`
  padding-top: 80px;
`;

const Logo = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
  margin: 10px 0;
`;

const Options = styled.View`
  margin: 30px 0;
`;

const Btn = styled.View`
  margin: 10px 0;
  display: flex;
`;

const Center = styled.View`
  margin: 0 auto;
`;

const Terms = styled.View`
  margin-top: 20px;
`;

export default WelcomeScreen;
