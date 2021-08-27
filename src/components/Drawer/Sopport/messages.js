import React, { useEffect } from "react";
import {ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import {Formik} from 'formik';
import * as Yup from "yup";
import { changeToDefaultMessages, fetchSupportData } from "../../../redux/action/support_action_&_reducer";
import { useDispatch, useSelector } from "react-redux";
import ModalSupport from "./ModalSupport";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неверный адрес эл. почты')
        .required('Обязательное поле'),
    subject: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(70, 'Слишком долго!')
        .required('Обязательное поле'),
    message: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(200, 'Слишком долго!')
        .required('Обязательное поле'),
});
export const Form = () => {

    const {massages} = useSelector(state => state.support)
    let dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(changeToDefaultMessages());
        }, 2000)
    }, [massages])





    const sendFormData = async (values) => {
        let {email, subject, message} = values
        const formData = new FormData();
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        //console.log(formData);
        await dispatch(fetchSupportData(formData))
    }
    

    return (
        <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex: 1}}>
            {massages !== '' && <ModalSupport title={'Поздравляю'} text={'Ваше сообщение успешно доставлено'} />}
            
        <ScrollView>
            <View style={styles.container}>
                <Formik
                    initialValues={{email: '', subject: '', message: ''}}
                   validationSchema={SignupSchema}
                    onSubmit={(values, action) => {
                        sendFormData(values)
                        action.resetForm()
                    }}
                >
                    {({ errors,touched,handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            {errors.email && touched.email ? (
                                <Text style={[styles.warning,{top:5}]}>{errors.email}</Text>
                            ) : null}
                            {errors.subject && touched.subject ? (
                                <Text style={[styles.warning,{top:95}]}>{errors.subject}</Text>
                            ) : null}
                            {errors.message && touched.message ? (
                                <Text style={[styles.warning,{top:185}]}>{errors.message}</Text>
                            ) : null}
                            <Text>Эл. почта</Text>
                            <TextInput style={styles.input}
                                       value={values.email}
                                       onBlur={handleBlur('email')}
                                       onChangeText={handleChange('email')}
                            />

                            <Text>Тема</Text>
                            <TextInput style={styles.input}
                                       value={values.subject}
                                       onBlur={handleBlur('subject')}
                                       onChangeText={handleChange('subject')}/>
                            <Text>Сообщение</Text>
                            <TextInput multiline={true}
                                       style={styles.textArea}
                                       value={values.message}
                                       onBlur={handleBlur('message')}
                                       onChangeText={handleChange('message')}/>
                            <TouchableOpacity activeOpacity={0.5}
                                              onPress={()=>{handleSubmit()}}
                                              style={styles.button}>
                                <Text style={styles.textBtn}>Отправить</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>

            </View>
        </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10%'
    },
    input: {
        marginVertical: 10,
        width: 300,
        height: 50,
        borderWidth:2,
        borderRadius: 15,
        borderColor:'#e5e5e5',
        backgroundColor: '#fff',
        paddingHorizontal:10
    },
    textArea: {
        marginVertical: 10,
        width: 300,
        height: 150,
        backgroundColor: '#fff',
        borderWidth:2,
        borderRadius: 15,
        borderColor:'#e5e5e5',
        paddingHorizontal:10
    },
    button: {
        width: 300,
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
        color: '#ef5d7d',
        textAlign:'right',
    }
})