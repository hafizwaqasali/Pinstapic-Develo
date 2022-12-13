import { Button, StyleSheet, Text, View } from "react-native";
import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useRef,
    useEffect,
} from "react";
import styles from "./styles";
import Modal from "react-native-modal";
import { InputFieldValidate, PrimaryBtn, LinkSentModal } from "~components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CommonStyles from "~utills/CommonStyles";
import { height, width } from "~utills/Dimension";
import { useDispatch } from "react-redux";
import { setSwitchLoader } from "~redux/slices/config";

const EmailValidation = yup.object().shape({
    email: yup
        .string()
        .email("Enter a Valid email address")
        .required("Email is Required"),
});

const ForgotPassword = ({ }, ref) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const linkRef = useRef();
    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
        setValue
    } = useForm({ mode: "all", resolver: yupResolver(EmailValidation), defaultValues: { email: '' } });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useImperativeHandle(ref, () => ({
        show: function () {
            setModalVisible(true);
        },
        hide: function () {
            setModalVisible(false);
        },
    }));



    function onSubmit(data) {
        setEmail(data)
        dispatch(setSwitchLoader(true))
        console.log(data);
        toggleModal();
        setTimeout(() => {
            setValue('email', '')
            dispatch(setSwitchLoader(false))
            linkRef.current.show();
        }, 600);
    }

    return (
        <View>
            <Modal
                isVisible={isModalVisible}
                animationIn={"zoomIn"}
                animationOut={"zoomOut"}
                backdropOpacity={0}
            >
                <View style={styles.container}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    <Text style={styles.resetText}>
                        Enter your email address and we'll send you a link to reset your
                        password.
                    </Text>
                    <InputFieldValidate
                        containerStyles={styles.inputContainerStyles}
                        formControl={control}
                        name={"email"}
                        errorMsg={errors.email}
                        inverted
                        label={"Email"}
                        placeholder={"johndoe@email.com"}
                        returnKeyType={'done'}
                    />

                    <PrimaryBtn
                        title={"Continue"}
                        containerStyle={styles.btnStyles}
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid}
                    />
                </View>
            </Modal>
            <LinkSentModal ref={linkRef} />
        </View>
    );
};

export default forwardRef(ForgotPassword);
