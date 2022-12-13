import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import styles from "./styles"
import Modal from "react-native-modal";
import { PrimaryBtn } from "../../buttons/primary";


const Linksent = ({ }, ref) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useImperativeHandle(ref, () => ({
        show: function () {
            setModalVisible(true)
        },
        hide: function () {
            setModalVisible(false)
        },
    }))
    return (
        <View>
            <Modal isVisible={isModalVisible} animationIn={'zoomIn'} animationOut={"zoomOut"} backdropOpacity={0} >
                <View style={styles.container}>
                    <TouchableOpacity style={styles.logoWrapper}>
                        <Image
                            source={require("../../../assets/images/checkmark.png")}
                            style={styles.iconImg}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={styles.linkText}>Link sent</Text>
                    <PrimaryBtn title={"Continue"} containerStyle={styles.btnStyles} onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    )
}

export default forwardRef(Linksent)

