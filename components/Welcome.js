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
        title: "asdfadsf 1", paragraph: "It is a logn established fact that a reader will be distracted by\
    the fresuele content of a page when looking at its layout. The oint\
    of using Lorem Ipsum is that it has a more-or less normal\
    distribution of letters, as opposed to using 'Content here, content\
    here', making it look like readable English.",
        img: require("../assets/images/welcome-img.png")
    },
    {
        title: "asdfadsf 2", paragraph: `Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem ipsum'
    will uncover many web sites still in their infancy. Various versions
    have evolved over the years, sometimes by accident, sometimes on
    purpose (injected humour and the like).`
    },
    {
        title: "asdfadsf 3", paragraph: "asdfsafd afdsfs fsf adfs a sfasdfsadf",
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
        marginBottom: 20,
        color: Colors.textColor,
        fontFamily: "roboto",
        alignSelf: "flex-start",
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
