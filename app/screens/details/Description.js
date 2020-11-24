import React from "react";
import { View, Text, ScrollView } from "react-native";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../../config/Typography";

const Description = () => {
  return (
    <Container>
      <ScrollView>
        <Typography.H1>Accommodation description</Typography.H1>
        <Spacing />
        <Typography.P>
          A quiet, Denpasar-like stone wall located on the west side of Denpasar
          Just in front of Gwideok-ri beach, where you can see the sea from your accommodation,
          Accommodation. 30 minutes by car from Denpasar Airport, 8 minutes on foot
          There is a bus stop on the street, and a convenience store is a 10-minute walk away.
        </Typography.P>
        <Spacing />
        <Typography.P>
          A quiet, Denpasar-like stone wall located on the west side of Denpasar
          Just in front of Gwideok-ri beach, where you can see the sea from your accommodation,
          Accommodation. 30 minutes by car from Denpasar Airport, 8 minutes on foot
          There is a bus stop on the street, and a convenience store is a 10-minute walk away.
        </Typography.P>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const Spacing = styled.View`
  padding: 10px 0;
`;

export default Description;
