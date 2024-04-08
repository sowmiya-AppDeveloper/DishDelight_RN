import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "../Link/PaymentScreen";
const Links = () => {
  const publishableKey =
    "pk_test_51OeXjwSBwPh1XcIUR6V4j67rvE4Xyq6H9BeibKfdlHqL5aszVtxUSC4AH77eMCRkX9ENY8awol95nPH48nBp7Ahj00z5S5CuLF";
  return (
    <View>
      <StripeProvider publishableKey={publishableKey}>
        <PaymentScreen />
      </StripeProvider>
    </View>
  );
};

export default Links;

const styles = StyleSheet.create({});
