import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    id: '1',
    name: 'First',
    img: '',
    pts: '11',
    img: require("../../assets/images/ava.png"),
    content: 'Lorem ipsum...',
  },
  {
    id: '2',
    name: 'Second',
    img: '',
    pts: '22',
    img: require("../../assets/images/ava.png"),
    content: 'Lorem ipsum...',
  },
];

const Leadboard = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.id}</Text>
        <Image
          style={styles.pImg}
          source={section.img}
        />
        <View style={styles.nameAndPts}>
          <Text style={styles.headerText}>{section.name}</Text>
          <Text style={styles.pts}>{section.pts} pts</Text>
        </View>
        <Image
          style={styles.arrowDown}
          source={require("../../assets/images/gray-arrow-down.png")}
        />
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Leadership Board</Text>
          <Accordion
            style={styles.accordion}
            sections={SECTIONS}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Leadboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkBlack,
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: "100%",
  },
  containerContent: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2E4150",
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  scrollView: {
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
  accordion: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    padding: 10,
    marginTop: 15,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    borderRadius: 10,
    height: 60,
    backgroundColor: "#2E4150",
    borderColor: "#23313C",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  pImg: {
    borderRadius: 50,
  },
  pts: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "gold",
  },
  nameAndPts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
  },
  content: {
    padding: 20,
    backgroundColor: "#2E4150",
    color: "#fff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: "#2E4150",
  },
  contentText: {
    color: "#fff",
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});


