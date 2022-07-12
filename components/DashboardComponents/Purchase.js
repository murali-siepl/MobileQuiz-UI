import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { purchase } from "../../dummy-data/dashboard";
import Color from "../../constants/Color";


const renderItem = (itemData, navigation) => (
  <TouchableNativeFeedback onPress={() => navigation.navigate("Leadboard")}>
    <View
      style={{ ...styles.item, ...{ backgroundColor: itemData.item.color } }}
    >
      <View>
        <Text style={styles.title}>{itemData.item.title}</Text>
        <Text style={styles.title}>Subscription</Text>
      </View>
      <Text style={styles.title}>{itemData.item.cost}</Text>
    </View>
  </TouchableNativeFeedback>
);

const Purchase = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.noPurchase}>
      <Text style={styles.noPruchaseText}>No Purchase Have Been Made</Text>
     {/* <FlatList
       data={purchase}
       keyExtractor={(item) => item.title}
       renderItem={(itemData) => renderItem(itemData, navigation)}
    <> */}
    </View>
     {/* <TouchableOpacity style={styles.subsButton}  onPress={() => {
              // props.data.navigation.navigate("");
              console.log("button pressed")
            }}>
     <Image
              source={require('../../assets/images/Iconmaterial-subscriptions.png')}
              fadeDuration={0}
              style={{ width: 11.4, height: 11.4, alignSelf:'center', marginLeft:16, }}
            />
     <Text style={styles.subscriptions}>
              My Subscriptions plans
     </Text>
     <Image
              source={require('../../assets/images/arrow-right.png')}
              fadeDuration={0}
              style={{ width: 9.26, height: 16.2, alignSelf:'center', marginRight:16 }}
            />
     </TouchableOpacity> */}
     <TouchableOpacity style={styles.subsButton} 
      onPress={() => {
        navigation.navigate("Subscription");
      }}
      >
     <Image
              source={require('../../assets/images/Iconmaterial-subscriptions.png')}
              fadeDuration={0}
              style={{ width: 11.4, height: 11.4, alignSelf:'center', marginLeft:16, }}
            />
     <Text style={styles.subscriptions}>
             Subscription
     </Text>
     <Image
              source={require('../../assets/images/arrow-right.png')}
              fadeDuration={0}
              style={{ width: 9.26, height: 16.2, alignSelf:'center', marginRight:16 }}
            />
     </TouchableOpacity>
    </View>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 20,
    borderRadius: 6,
    paddingLeft: 30,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  noPurchase:{
    alignSelf:"center",
    width:323,
    height:136,
    backgroundColor:"#23313C",
    borderRadius:5,
    marginTop:30,
    justifyContent:'center',
    alignSelf:"center"
  },
  container:{
    backgroundColor:'#1A232A',
    height:'100%'
  },
  noPruchaseText:{
    color:Color.textColor,
    justifyContent:'center',
    alignSelf:"center",
    alignContent:'center',
  },
  subsButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:"center",
    backgroundColor:'#1A232A',
    width:323,
    height:61,
    borderWidth:1,
    borderColor:'#161E25',
    marginTop:30,
  },
  subscriptions:{
    color:'#FFFFFF',
    alignSelf:'center',
    marginLeft:-80
  },
  row:{
    flexDirection:'row',
  } 
});
