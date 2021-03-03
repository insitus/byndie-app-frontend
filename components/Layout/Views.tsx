import React from 'react';
import { StyleSheet, ScrollView} from "react-native";

import { View } from '../Themed';

interface Props {
  children: React.ReactNode;
}

export function ViewContainerScroll (props: Props) {
  return (
    <ScrollView style={styles.container}>
      {props.children}
    </ScrollView>
  );
}

export function ViewContainer (props: Props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

export function ViewSpace (props: Props) {
  return (
    <View style={styles.space}>
      {props.children}
    </View>
  );
}

export function ViewRow (props: Props) {
  return (
    <View style={styles.row}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily: "arial",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  space: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: "transparent",
  },
});
