import React from "react";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import { isAndroid } from "../common/plateformChecker";

const PlaceList = () => {
  return (
    <View>
      <Text>PlaceList</Text>
    </View>
  );
};

/**
 * Export navigationOptions from here and import in navigation file to use it
 * Erliear we set like 
 * Ex.
 <ScreenName>.navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderButtons
        HeaderButtonComponent={HeaderButton}
    >
        <Item iconName='ios-menu' title='menu' onPress={() => { navigation.toggleDrawer(); }} />
    </HeaderButtons>
}) 
 * But in new react navigation v5 we have to export like one function 
 * https://reactnavigation.org/docs/header-buttons#adding-a-button-to-the-header
 * in options props of stack we have to pass this function above link show how we can set options 
 * @param {object} navData
 */
export const placeListOptions = navData => ({
  title: "All Places",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Add Place"
        iconName={isAndroid() ? "md-add" : "ios-add"}
        onPress={() => navData.navigation.navigate("newPlace")}
      />
    </HeaderButtons>
  )
});

export default PlaceList;
