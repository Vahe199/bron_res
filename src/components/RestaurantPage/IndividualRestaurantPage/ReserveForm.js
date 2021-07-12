import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Formik} from 'formik';
import * as Yup from "yup";

const phoneRegExp = /^(\+\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required field'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(12, 'Phone number is not valid')
        .max(18, 'Phone number is not valid')
        .required('Required field'),
});
export const ReserveForm = ({navigation}) => {
    const sendFormData = (values) => {
        console.log(values,4444);
        navigation.push('Confirmation')
    }
    return (
            <View style={styles.container}>
                <Formik
                    initialValues={{name: '', phone: ''}}
                    validationSchema={SignupSchema}
                    onSubmit={(values, action) => {
                        sendFormData(values)
                        action.resetForm();
                    }}
                >
                    {(props) => (
                        <View>
                            <Text>Reservoir Name</Text>
                            <TextInput style={styles.input}
                                       value={props.values.name}
                                       onChangeText={props.handleChange('name')}
                            />
                            {props.errors.name && props.touched.name ? (
                                <Text style={[styles.warning,{ bottom:225,}]}>{props.errors.name}</Text>
                            ) : null}
                            <Text>Phone number</Text>
                            <TextInput style={styles.input}
                                       value={props.values.phone}
                                        textContentType='telephoneNumber'
                                        dataDetectorTypes='phoneNumber'
                                       keyboardType='phone-pad'
                                       autoCompleteType='cc-number'
                                       placeholder ="+ x (xxx) xxx-xx-xx"
                                       onChangeText={props.handleChange('phone')}/>
                            {props.errors.phone && props.touched.phone ? (
                                <Text style={[styles.warning,{ bottom:135,}]}>{props.errors.phone}</Text>
                            ) : null}
                            <TouchableOpacity activeOpacity={0.5}
                                              onPress={props.handleSubmit}
                                              style={styles.button}>
                                <Text style={styles.textBtn}>Reserve a table</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>

            </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    input: {
        borderWidth:2,
        borderRadius: 15,
        marginVertical: 10,
        borderColor:'#e5e5e5',
        fontSize: 24,
        width: 330,
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    button: {
        width: 330,
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#c50000',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },
    textBtn: {
        fontSize: 22,
        lineHeight: 25,
        fontWeight: "600",
        color: '#fff',
    },
    warning: {
        position:'absolute',
        right:15,
        color: '#f44336',
        textAlign:'right',
    }
})