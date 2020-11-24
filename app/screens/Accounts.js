import React from "react";
import { View, FlatList, Text, SectionList, StatusBar } from "react-native";

import * as List from "../components/List";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { Cap } from "../config/Typography";

const AccountItems = [
  {
    title: "Introduction Management",
    data: [
      {title: "Personal Information", icon: "user", screen: "Hosting" },
      {title: "Notification", icon: "bell", screen: "Hosting" },
      {title: "Payment and payment", icon: "credit-card", screen: "Hosting" },
    ],
  },
  {
    title: "hosting",
    data: [
      {title: "Switch to Hosting Mode", icon: "refresh", screen: "Hosting" },
      {title: "Register accommodation", icon: "plus", screen: "Hosting" },
    ],
  },
  {
    title: "Help",
    data: [
      {title: "How to use GreenHouse", icon: "question", screen: "Hosting" },
    ],
  },
];

const Accounts = ({ navigation }) => {
  return (
    <Container>
      <SectionList
        contentContainerStyle={{ paddingVertical: 40, paddingHorizontal: 20 }}
        ListHeaderComponent={
          <List.UserList
            title="Jinah"
            subtitle="View Profile"
            // image={require("../assets/profile.jpg")}
          />
        }
        sections={AccountItems}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginTop: 30, marginBottom: 10 }}>
            <Cap color={colors.gray}>{title}</Cap>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <List.Default
            title={item.title}
            icon={item.icon}
            iconcolor={colors.darkgray}
            // onPress={() => console.log("selected", item)}
            // onPress={() => navigation.navigate(`${item.screen}`)}
          />
        )}
        ItemSeparatorComponent={() => <HLine />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 20px;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${colors.lightgray};
`;

export default Accounts;
