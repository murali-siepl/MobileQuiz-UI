import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image,
    Alert, Modal, Pressable, TouchableOpacity
} from "react-native";
import CustomButton from "../../components/shared/Button";
import Colors from "../../constants/Color";

const ModalScreen = (props) => {
    ///////model/////
    const [modalVisible, setModalVisible] = useState(true);
    /////model///////

    const handleModalVisible = () => {
        setModalVisible(false);
        props.handleModalOnly();
    }

    const handleExitNav = () => {
        setModalVisible(false);
        props.handleExit();
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    handleModalVisible();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => handleModalVisible()}>
                            <Text
                                style={styles.CloseLogo}
                            >X</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.tinyLogo}
                            source={require("../../assets/images/rocket.png")}
                        />
                        <Text style={styles.ExitQuartText}>Exit quarts ?</Text>

                        <Text style={styles.modalText}>Sure you want to exit?</Text>
                        <View style={styles.yesNobtn}>
                            <CustomButton
                                style={{
                                    marginVertical: 30,
                                    marginBottom: 0,
                                    marginRight: 10
                                }}
                                touchWidth="45%"
                                onPress={handleExitNav}
                            >
                                Yes
                            </CustomButton>
                            <CustomButton
                                style={{
                                    marginVertical: 30,
                                    marginBottom: 0,
                                    backgroundColor: Colors.transparent,
                                    borderWidth: 1,
                                    borderColor: Colors.darkGreen,
                                    color: Colors.darkGreen
                                }}
                                touchWidth="45%"
                                onPress={() => handleModalVisible()}
                            >
                                No
                            </CustomButton>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalScreen;

const styles = StyleSheet.create({
    ////////////////model///////////////////////
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        backgroundColor:'#23313C',
    },
    modalView: {
        margin: 20,
        backgroundColor: "#23313C",
        borderRadius: 10,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        width: 320,
        height: 266,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginTop: 0,
        textAlign: "center",
        color: '#999999',
        fontSize: 14,
    },
    ExitQuartText: {
        marginTop: 70,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: "center",
        color: "white"
    },
    tinyLogo: {
        position: 'absolute',
        top: -15,
        width: 110,
        height: 110
    },
    CloseLogo: {
        width: 20.1,
        height: 20.1,
        marginTop: -10,
        marginLeft: '95%',
        fontSize: 18,
        fontWeight: "900",
        color: 'white'
    },
    yesNobtn: {
        flexDirection: 'row'
    }
    /////////model////////////
});
