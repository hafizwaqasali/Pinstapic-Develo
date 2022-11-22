import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import styles from './styles'
import Modal from "react-native-modal";
import { InputFieldValidate, InputField } from "../../index"
import { PrimaryBtn } from "../../index"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { LinkSentModal } from "../../index"
import { useRef } from 'react';


const EmailValidation = yup.object().shape({
    email: yup.string().email("Enter a Valid email address").required("Email is Required")
})

const ForgotPassword = ({ }, ref) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const linkRef = useRef()
    const { control, formState: { errors, isValid }, handleSubmit, } = useForm({ mode: "all", resolver: yupResolver(EmailValidation) })

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

    function onSubmit(data) {
        console.log(data);
        toggleModal()
        setTimeout(() => {
            linkRef.current.show()
        }, 600);


    };

    return (
        <View>
            <Modal isVisible={isModalVisible} animationIn={'zoomIn'} animationOut={"zoomOut"} backdropOpacity={0} >
                <View style={styles.container}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    <Text style={styles.resetText}>Enter your email address and we'll send you a link to reset your password.</Text>
                    <InputFieldValidate formControl={control} name={"email"} errorMsg={errors.email} inverted label={"Email"} placeholder={"johndoe@email.com"} />
                    <PrimaryBtn title={"Continue"} containerStyle={styles.btnStyles} onPress={handleSubmit(onSubmit)} disabled={!isValid} />
                </View>
            </Modal>
            <Linksent ref={linkRef} />
        </View>
    )
}

export default forwardRef(ForgotPassword)