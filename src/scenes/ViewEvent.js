import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ViewEventDetails from "../components/organisms/ViewEventDetails";

function ViewEvent({ route, navigation, ...props }) {
  return (
    <SafeAreaView style={styles.container}>
      <ViewEventDetails
        title="Event Details"
        source={source}
        name={name}
        date={date}
        time={time}
        location={location}
        description={description}
        leftButton="Delete"
        rightButton="Edit"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ViewEvent;
