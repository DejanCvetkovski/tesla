import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/";
import styles from "./style";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelS.jpeg")}
      />

      <View style={styles.titlesContainer}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Strarts from $69 420</Text>
      </View>
      <StyledButton
        type="primary"
        title={"Custom Order"}
        onPress={() => console.warn("Custom order was pressed")}
      />
      <StyledButton
        type="secondary"
        title={"Existing Inventory"}
        onPress={() => console.warn("Existing Inventory was pressed")}
      />
    </View>
  );
};

export default CarItem;
