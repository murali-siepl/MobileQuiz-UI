import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import { BackToHome } from "../../components/shared/Button";
import Heading from "../../components/shared/Heading";
import { globalStyles } from "../../constants/GlobalStyles";
import Colors from "../../constants/Color";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
    {
        id: '01',
        name: 'Question 01',
        img: '',
        pts: '11',
        img: require("../../assets/images/ava.png"),
        content: ";laskdfjasdl;kf sdlfkj aslkfj aslfkj aslfkj sadlfkjsflksadj adslkf",
    },
    {
        id: '02',
        name: 'Question 02',
        img: '',
        pts: '22',
        img: require("../../assets/images/ava.png"),
        content: ";laskdfjasdl;kf sdlfkj aslkfj aslfkj aslfkj sadlfkjsflksadj adslkf",
    },
    {
        id: '03',
        name: 'Question 03',
        img: '',
        pts: '33',
        img: require("../../assets/images/ava.png"),
        content: ";laskdfjasdl;kf sdlfkj aslkfj aslfkj aslfkj sadlfkjsflksadj adslkf",
    },

];

const FaqAndContact = (props) => {

    const [activeSections, setActiveSections] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    const _renderSectionTitle = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    const _renderHeader = (section, index, isActive, sections) => {
        return (
            <View style={isActive ? styles.headerActive : styles.header}>
                <Text style={styles.headerIndex}>{section.id}</Text>
                <Text style={styles.headerText}>{section.name}</Text>
                {isActive ?
                    <Image
                        style={styles.arrowDown}
                        source={require("../../assets/images/arrow-up.png")}
                    /> :
                    <Image
                        style={styles.arrowDown}
                        source={require("../../assets/images/arrow-down.png")}
                    />}

            </View>
        );
    };

    const _renderContent = (section, i, isActive, sections) => {
        return (
            <Animatable.View
                style={styles.content}
                duration={300}
                transition="backgroundColor">
                <Animatable.Text
                    style={styles.contentText}
                    duration={300}
                    easing="ease-out"
                    animation={isActive ? 'zoomIn' : false}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    };

    const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    ...globalStyles.scrollView,
                    ...styles.scrollView,
                }}
            >
                <View style={styles.containerBlock}>
                    <Heading style={styles.heading}>FAQs</Heading>
                    <Accordion
                        style={styles.accordion}
                        sections={SECTIONS}
                        activeSections={activeSections}
                        renderHeader={_renderHeader}
                        renderContent={_renderContent}
                        onChange={_updateSections}
                    />
                </View>
                <View style={styles.containerBlock}>
                    <Heading style={styles.heading}>Contact Us</Heading>
                    <Text style={styles.text}>
                        If you have any queries, feel free to ask us.
                    </Text>
                    <View style={styles.spaceBetween}>
                        <Image
                            style={styles.imgLeft}
                            source={require("../../assets/images/contact-web.png")}
                        />
                        <Text style={styles.subName}>https://www.quizcompany.com</Text>
                    </View>
                    <View style={styles.spaceBetween}>
                        <Image
                            style={styles.imgLeft}
                            source={require("../../assets/images/contact-mob.png")}
                        />
                        <Text style={styles.subName}>+1 8888888888</Text>
                    </View>
                    <View style={styles.spaceBetween}>
                        <Image
                            style={styles.imgLeft}
                            source={require("../../assets/images/contact-mail.png")}
                        />
                        <Text style={styles.subName}>test@mail.com</Text>
                    </View>
                    <View style={styles.spaceBetween}>
                        <Image
                            style={styles.imgLeft}
                            source={require("../../assets/images/contact-loc.png")}
                        />
                        <Text style={styles.subName}>location</Text>
                    </View>

                    <View>
                        <BackToHome {...props} />
                    </View>
                    <Image
                        style={styles.ads}
                        source={require("../../assets/images/ads.png")}
                    />
                </View>
            </ScrollView>
        </View>

    );
};

export default FaqAndContact;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.inputBackGround,
        flex: 1,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView: {
        width: "100%",
    },
    containerBlock: {
        borderWidth: 1,
        borderColor: "#2E4150",
        borderRadius: 5,
        padding: 20,
        margin: 10,
    },
    heading: {
        marginTop: 0,
        marginBottom: 10,
        fontSize: 24,
        color: "white",
        fontWeight: "300",
        alignSelf: "flex-start",
    },
    text: {
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 20,
        color: Colors.textColor,
        fontFamily: "roboto",
    },
    imgBackground: {
        height: 180,
        opacity: 0.9,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "left",
        paddingVertical: 10,
    },
    accordion: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    header: {
        marginTop: 15,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#23313C",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    headerActive: {
        marginTop: 15,
        height: 60,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    headerIndex: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        width: "60%",
    },
    pImg: {
        borderRadius: 50,
    },
    content: {
        borderBottomColor: "#2E4150",
        borderBottomWidth: 1,
    },
    contentText: {
        margin: 12,
        color: "#ccc",
        fontWeight: "500",
        alignSelf: "center",
        justifyContent: "center",
    },
    spaceBetween: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    imgLeft: {
        width: 25,
        height: 25,
        marginRight: 25,
    },
    subName: {
        fontSize: 14,
        color: "white",
        marginVertical: 15,
        fontWeight: "bold",
        alignSelf: "flex-start",
        textAlign: "left",
    },
    ads: {
        width: 286,
        height: 152,
        marginVertical: 20,
        borderRadius: 10,
        alignSelf: "center",
    }
});
