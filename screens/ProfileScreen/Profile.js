import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Platform,
  SafeAreaView
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Color from "../../constants/Color";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../../components/shared/Button";
// import Dropdown from "../../components/shared/Dropdown";

const Profile = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: 'Subscribe Now',
      bg: require('../../assets/images/profile/iconionic-ios-add-circle-outline.png')
    },
    {
      id: 2,
      name: 'Quiz 1 set',
      bg: require('../../assets/images/profile/Path18131.png'),
    },
    {
      id: 3,
      name: 'Quiz 2 set',
      bg: require('../../assets/images/profile/Path18132.png')
    },
    {
      id: 4,
      name: 'Quiz 3 set',
      bg: require('../../assets/images/profile/Path18131.png')
    },
    {
      id: 5,
      name: 'Quiz 4 set',
      bg: require('../../assets/images/profile/Path18132.png')
    },
    {
      id: 6,
      name: 'Quiz 5 set',
      bg: require('../../assets/images/profile/Path18131.png')
    },
    {
      id: 7,
      name: 'Quiz 6 set',
      bg: require('../../assets/images/profile/Path18132.png')
    },
    {
      id: 8,
      name: 'Quiz 7 set',
      bg: require('../../assets/images/profile/Path18131.png')
    }

  ];

  const ItemRender = ({ name, bgImage }) => (
    <View
      style={styles.horizontalBox}
    >
      <Image
        source={bgImage}
        fadeDuration={0}
        style={styles.scrollBg}
      />
      <Text style={styles.itemText}>{name}</Text>

    </View>
  );

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>

      {/* profile */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          {image &&
            <Image
              source={{ uri: image }}
              fadeDuration={0}
              style={styles.profileImage}
            />
          }
          {!image &&
            <Image
              source={require('../../assets/images/profile/noProfilePhoto.png')}
              fadeDuration={0}
              style={styles.noProfileImage}
            />
          }
          <View style={styles.editProfileBg}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={require('../../assets/images/profile/iconfeather-camera.png')}
                fadeDuration={0}
                style={styles.editProfile}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Aditi Gupta</Text>
          <View>
            <View style={styles.row}>
              <Text style={styles.textWhite}>98976 53425</Text>
              <View style={styles.verified}>
                <Text style={styles.textGreen}>VERIFIED</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.textWhite}>aditigupta@gmail.com</Text>
              <View style={styles.verified}>
                <Text style={styles.textGreen}>VERIFIED</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* profile */}

      <Text style={styles.myPurchases}>My Purchases</Text>

      {/* ScrollView */}
      <SafeAreaView style={styles.MainContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <>
              <ItemRender name={item.name} bgImage={item.bg} />

              {item.id !== 1 ?
                <Image
                  source={require('../../assets/images/profile/sub-image.png')}
                  fadeDuration={0}
                  style={styles.scrollIcon}
                /> : null}
            </>
          }
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

      </SafeAreaView>
      {/* ScrollView */}

      {/* mydetails container */}
      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.myDetails} onPress={() => {
          // props.data.navigation.navigate("");
          console.log("button pressed")
        }}>
          <Image
            source={require('../../assets/images/profile/user.png')}
            fadeDuration={0}
            style={styles.userImage}
          />
          <Text style={styles.myDetailsText}>
            My Details
          </Text>
          <Image
            source={require('../../assets/images/arrow-right.png')}
            fadeDuration={0}
            style={styles.arrowDown}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.myPaymentProfile} onPress={() => {
          // props.data.navigation.navigate("");
          console.log("button pressed")
        }}>
          <Image
            source={require('../../assets/images/profile/card-outline.png')}
            fadeDuration={0}
            style={styles.card}
          />
          <Text style={styles.myPaymentText}>
            My Payment Profile
          </Text>
          <Image
            source={require('../../assets/images/arrow-right.png')}
            fadeDuration={0}
            style={styles.arrowUp}
          />
        </TouchableOpacity>
      </View>
      {/* mydetails container */}

      {/* visa */}
      <View style={styles.visaView}>
        <Image
          source={require('../../assets/images/profile/rectangle147009.png')}
          fadeDuration={0}
          style={styles.rect}
        />
        <Image
          source={require('../../assets/images/profile/iconpayment-visa-electron.png')}
          fadeDuration={0}
          style={styles.visa}
        />
        <Text style={styles.visaNum}>
          1100-112-0088
        </Text>
        <TouchableOpacity
          onPress={() => { }}>
          <Image
            source={require('../../assets/images/profile/iconmaterial-delete.png')}
            fadeDuration={0}
            style={styles.deleteVisa}
          />
        </TouchableOpacity>
      </View>
      {/* visa */}

      {/* upi */}
      <View style={styles.upiView}>
        <Image
          source={require('../../assets/images/profile/rectangle147009.png')}
          fadeDuration={0}
          style={styles.rect}
        />
        <Image
          source={require('../../assets/images/profile/UPI.png')}
          fadeDuration={0}
          style={styles.upi}
        />
        <Text style={styles.phonepeText}>
          Phone Pe
        </Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => { }}>
          <Image
            source={require('../../assets/images/profile/iconmaterial-delete.png')}
            fadeDuration={0}
            style={styles.delete}
          />
        </TouchableOpacity>
      </View>
      {/* upi*/}

      <View style={styles.addBtn}>
        <CustomButton
          // touchWidth="100%"
          style={styles.addButton}
          onPress={() => {
          }}
        >
          Add New
        </CustomButton>
      </View>


      {/* rewards container */}
      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.rewards} onPress={() => {
          // props.data.navigation.navigate("");
          console.log("button pressed")
        }}>
          <Image
            source={require('../../assets/images/profile/trophy-outline.png')}
            fadeDuration={0}
            style={styles.userImage}
          />
          <Text style={styles.myDetailsText}>
            Rewards
          </Text>
          <Image
            source={require('../../assets/images/arrow-right.png')}
            fadeDuration={0}
            style={styles.arrowDown}
          />
        </TouchableOpacity>
        {/* ////////////////////My privacy///////////////////  */}
        {/* <TouchableOpacity style={styles.myPaymentProfile} onPress={() => {
          // props.data.navigation.navigate("");
          console.log("button pressed")
        }}>
          <Image
            source={require('../../assets/images/profile/finger-print-outline.png')}
            fadeDuration={0}
            style={styles.fingerPrint}
          />
          <Text style={styles.myPrivacy}>
            My Privay
          </Text>
          <Image
            source={require('../../assets/images/arrow-right.png')}
            fadeDuration={0}
            style={styles.arrowDown}
          />
        </TouchableOpacity> */}
        {/* ////////////////////My privacy///////////////////  */}
      </View>
      {/* rewards container */}

    </ScrollView>
  );
};

export default Profile;
export const ProfilenavigationOptions = (navData) => {
  return {
    headerTitle: "Profile",
    headerLeft: () => {},
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="black"
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  scrollIcon: {
    position: 'absolute',
    left: 45,
    bottom: 48
  },
  scrollBg: {
    width: 37.28,
    height: 37.99,
    alignSelf: 'center'
  },
  MainContainer: {
    position: 'absolute',
    top: 160
  },
  itemText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  fingerPrint: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 16
  },
  card: {
    width: 21,
    height: 15,
    alignSelf: 'center',
    marginLeft: 16,
    padding: 1
  },
  scrollMain: {
    position: 'absolute',
    top: 150,
    zIndex: 2000
  },
  profileDetails: {
    marginLeft: 30,
    width: '100%',
  },
  arrowUp: {
    width: 9.26,
    height: 16.2,
    alignSelf: 'center',
    marginRight: 16,
    transform: [{ rotate: '-90deg' }]
  },
  arrowDown: {
    width: 9.26,
    height: 16.2,
    alignSelf: 'center',
    marginRight: 16,
    transform: [{ rotate: '90deg' }]
  },
  userImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 16
  },
  myDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.lightGrey,
    width: 324,
    height: 63,
    marginTop: 120
  },
  rewards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.lightGrey,
    width: 324,
    height: 63,
  },
  delete: {
    width: 14,
    height: 18,
    alignSelf: 'center',
    marginRight: 16
  },
  deleteVisa: {
    width: 14,
    height: 18,
    alignSelf: 'center',
    margin: 20
  },
  upi: {
    width: 37,
    height: 20,
    position: 'absolute',
    left: 30,
    top: 20
  },
  visa: {
    width: 57,
    height: 20,
    position: 'absolute',
    left: 18,
    top: 22
  },
  rect: {
    width: 67,
    height: 30,
    alignSelf: 'center',
    marginLeft: 16,
  },
  addBtn: {
    alignSelf: 'center',
    marginBottom:-30
  },
  addButton: {
    width: 284.7,
    height: 48,
  },
  textGreen: {
    color: 'green',
    fontSize: 8,
    fontWeight: 'bold',
    borderRadius: 50,
    width: 74,
    height: 20,
    backgroundColor: Color.lightGrey,
    textAlign: 'center',
    padding: 4
  },
  textWhite: {
    color: 'white',
    fontSize: 12,
    marginTop: 10
  },
  verified: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: 140,
  },
  myPurchases: {
    color: Color.textWhite,
    fontSize: 14,
    marginLeft: 17,
    marginTop: 25,
    marginBottom: 10
  },
  profileName: {
    color: Color.orange,
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileMainContainer: {
    flexDirection: 'row',
  },
  profileContainer: {
    width: 96,
    height: 96,
    backgroundColor: Color.textWhite,
    borderRadius: 50,
    marginLeft: 10
  },
  editProfile: {
    width: 17,
    height: 13.91,
    marginLeft: 6
  },
  editProfileBg: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 29,
    height: 29,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1000,
    bottom: 4,
    right: -6,
    backgroundColor: Color.textWhite,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 50,
    backgroundColor: Color.textWhite,
    borderWidth: 2,
    borderColor: Color.textWhite,
    position: 'absolute'
  },
  noProfileImage: {
    width: 96,
    height: 96,
    borderRadius: 50,
    backgroundColor: Color.textWhite,
    borderWidth: 2,
    borderColor: Color.textWhite,
    position: 'relative'
  },
  thumbnailBackground: {
    width: 50,
    height: 50,
    backgroundColor: Color.textWhite,
    borderRadius: 30
  },
  horizontalBox: {
    width: 100,
    height: 100,
    backgroundColor: "#2B4559",
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
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
    color: Color.textWhite,
    fontSize: 25,
    fontWeight: "bold",
  },
  detailsContainer: {
    alignSelf: "center",
    width: 323,
    height: 236,
    backgroundColor: Color.lightGrey,
    marginTop: 60,
    position: 'relative',
    zIndex: -1000
  },
  rewardContainer: {
    alignSelf: "center",
    width: 323,
    height: 236,
    backgroundColor: Color.lightGrey,
    marginTop: 60,
    position: 'relative',
    zIndex: -1000
  },
  container: {
    backgroundColor: '#1A232A',
    height: '100%',
    paddingTop:30
  },
  noPruchaseText: {
    color: Color.textColor,
    justifyContent: 'center',
    alignSelf: "center",
    alignContent: 'center',
  },
  subsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "center",
    backgroundColor: Color.lightGrey,
    width: 324,
    height: 63,
    borderWidth: 1,
    borderColor: Color.darkGray,
  },
  myPaymentProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "center",
    backgroundColor: Color.lightGrey,
    width: 324,
    height: 63,
    borderTopWidth: 1,
    borderColor: Color.darkGray,
  },
  visaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "center",
    backgroundColor: Color.lightGrey,
    width: 324,
    height: 63,
    borderWidth: 1,
    borderColor: Color.darkGray,
    marginTop: 25,
    marginBottom: 10
  },
  upiView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "center",
    backgroundColor: Color.lightGrey,
    width: 324,
    height: 63,
    borderWidth: 1,
    borderColor: Color.darkGray,
    marginBottom: 20
  },
  subscriptions: {
    color: Color.textWhite,
    alignSelf: 'center',
    marginLeft: -80
  },
  myPaymentText: {
    color: Color.textWhite,
    alignSelf: 'center',
    marginLeft: -110,
  },
  myPrivacy: {
    color: Color.textWhite,
    alignSelf: 'center',
    marginLeft: -150,
  },
  myDetailsText: {
    color: Color.textWhite,
    alignSelf: 'center',
    marginLeft: -160
  },
  visaNum: {
    color: Color.textWhite,
    alignSelf: 'center',
    marginLeft: -60
  },
  phonepeText: {
    color: Color.textWhite,
    alignSelf: 'center',
    marginLeft: -120
  },
  row: {
    flexDirection: 'row',
  }
});
