import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import CustomButton, { BackToHome } from "../components/shared/Button";
import Heading from "../components/shared/Heading";
import Color from "../constants/Color";
import { globalStyles } from "../constants/GlobalStyles";
import Colors from "./../constants/Color";
import FastImage from 'react-native-fast-image';

const result = [
    {
        title: "QUARTS MOBILE", paragraph: `QUARTS MOBILE is the latest knowledge-based fun learning and gaming app in India containing number of questions from different branches of studies, languages and exciting formats on the platform. QUARTS MOBILE is only available for people who are above 18 years of age and upto the age of 25 years. the interactive entertainment platform in India. Launched in early 2022, the Company provides a platform to students play quiz games and earn rewards. Users can enjoy personalized and interactive quiz gameplay experiences. The platform is available in different languages such as English, Hindi and etc., with over many registered users. The QUARTS MOBILE platform facilitates over many micro-transactions per month across a portfolio`,
        img: require("../assets/images/welcome-img.png")
    },
    {
        title: "QUARTS MOBILE", paragraph: `QUARTS MOBILE is focused on building an enthusiastic community of quiz gamers and quiz gaming influencers across the world. The Company envisions a future where the platform can deliver a fun learning culturally relevant and enjoyable experience in the Indian gaming ecosystem and in the other countries as well, through a unique micro- transaction led monetization model.`
    },
    {
        title: "QUARTS MOBILE", paragraph: `All the games and formats offered on QUARTS MOBILE are those that involve preponderance of skill. QUARTS MOBILE is an absolutely safe and secure quiz gaming platform which ensures that all the quiz games on the platform are fair. Laden with a real time and secure deposits and withdrawals ecosystem, we partner with trusted payment partners such as PayTM, Google Pay, PhonePe, BHIM etc. We also have enhanced levels of fraud detection mechanisms to restrict fraudulent play and/or players thereby making QUARTS MOBILE a fair and safe platform.`,
        img: require("../assets/images/welcome-img.png")
    },
    {
        title: "QUARTS MOBILE", paragraph: `The QUARTS MOBILE app is available for both Android and iOS users. Android users can download the app from the Download Button on this page, while iOS users can download the app directly from the Apple App Store.`,
        img: require("../assets/images/welcome-img.png")
    },
];

const Welcome = (props) => {
    const [para, addPara] = useState(0);
    const [paras, addParas] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            if (para < result.length) {
                let setArray = [];
                for (let i = 0; i <= para; i++) {
                    setArray.push(result[i]);
                }
                addParas(setArray);
            }
        }, 1000);


    }, [para])
    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 1, borderColor: "#2E4150", borderRadius: 5 }}>
                <ScrollView
                    contentContainerStyle={{
                        ...globalStyles.scrollView,
                        ...styles.scrollView,
                    }}
                >
                    <ImageBackground
                        source={require("../assets/images/welcome-img.png")}
                        style={styles.imgBackground}
                    >
                        <Text style={styles.textImg}>
                            Welcome to Quarts Quiz !!
                        </Text>
                    </ImageBackground>
                    <View style={styles.innerContent}>
                        {paras.map((p, i) => (
                            <>
                                <Heading style={styles.heading}>{p.title}</Heading>
                                <Text style={styles.text}>
                                    {p.paragraph}
                                </Text>
                                {p.img &&
                                    <Image
                                        style={styles.innerImgs}
                                        source={p.img}
                                    />
                                }
                            </>
                        ))}
                    </View>

                    <CustomButton
                        touchWidth="100%"
                        onPress={() => {
                            addPara(para + 1);
                        }}
                    >
                        View More
                    </CustomButton>
                </ScrollView>
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.inputBackGround,
        flex: 1,
        padding: 20,
    },
    scrollView: {
        backgroundColor: Color.lightGrey,
        padding: 10,
        borderRadius: 5,
    },
    innerContent: {
        marginBottom: 20,
    },
    heading: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        color: "white",
        fontWeight: "300",
        alignSelf: "flex-start",
    },
    text: {
        fontSize: 14,
        lineHeight: 22,
        // marginBottom: 20,
        color: Colors.textColor,
        fontFamily: "roboto",
        alignSelf: "flex-start",
        textAlign: 'justify',
        
    },
    textImg: {
        fontSize: 20,
        lineHeight: 22,
        marginBottom: 0,
        padding: 20,
        color: "white",
        fontFamily: "roboto",
        backgroundColor: "#000004",
        width: "100%",
        opacity: 0.8,
    },
    imgBackground: {
        flex: 1,
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 30,
    },
    innerImgs: {
    },
});
