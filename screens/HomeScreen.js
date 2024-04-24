import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.search}>
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" />
          <View style={styles.map}>
            <Icon.MapPin height="20" width="20" stroke="gray"/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    paddingHorizontal: 16, // px-4
    paddingBottom: 8, // pb-2
    
    marginHorizontal: 8,
    justifyContent:'space-between'
  },
  search: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,

  },
  map:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    alignItems: 'center', // items-center
    marginHorizontal: 4, // space-x-1
    borderLeftWidth: 0, // border-0
    
  },
});
