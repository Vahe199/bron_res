import React from "react";
import {StyleSheet, Text, TextInput, Animated, TouchableOpacity, View, Pressable} from "react-native";
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
    const [animatedTime, setAnimatedTime] = React.useState(true)
    const sendFormData = (values) => {
        //navigation.push('Confirmation')
        setAnimatedTime(true)
        Animated.sequence([
            Animated.timing(opacity,{
                toValue:1,
                duration:200,
                useNativeDriver:true
            }),
            Animated.delay(10000),
            Animated.timing(opacity,{
                toValue:0,
                duration:200,
                useNativeDriver:true
            })
        ]).start((done) => {
            if (done.finished) {
                console.log(done,77446)
            }
        })
    }
    const opacity = React.useRef(new Animated.Value(0)).current;
    return (
            <Animated.View style={styles.container}>
                {animatedTime && <Animated.View style={[styles.animated, {
                    opacity,
                    transform: [{
                        translateY: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-20, 0]
                        }),
                    }
                    ],
                }]}>
                    <Text onPress={() => setAnimatedTime(false)} style={styles.close}>X</Text>
                    <Text style={{color: '#c50000', fontSize: 20}}>Reservation rejected !</Text>
                    <Text style={{textAlign: 'center'}}>Your reservation wos rejected because of that the table already
                        is reserved for that time </Text>
                    <Text style={{fontWeight: '700'}}>Available times: 14:00 , 17:00, 20:00</Text>
                </Animated.View>}
                <Formik
                    initialValues={{name: '', phone: ''}}
                    // validationSchema={SignupSchema}
                    onSubmit={(values, action) => {
                        sendFormData(values)
                        action.resetForm();
                    }}
                >
                    {(props) => (
                        <View>
                            <Text style={styles.label}>Reservoir Name</Text>
                            <TextInput style={styles.input}
                                       value={props.values.name}
                                       onChangeText={props.handleChange('name')}
                            />
                            {props.errors.name && props.touched.name ? (
                                <Text style={[styles.warning,{ bottom:225,}]}>{props.errors.name}</Text>
                            ) : null}
                            <Text style={styles.label}>Phone number</Text>
                            <TextInput style={styles.input}
                                       value={props.values.phone}
                                        textContentType='telephoneNumber'
                                        dataDetectorTypes='phoneNumber'
                                       keyboardType='phone-pad'
                                       autoCompleteType='cc-number'
                                       placeholder ="+   * (***) *** ** **"
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

            </Animated.View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    animated:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:"120%",
        backgroundColor:'#fff',
        padding:20,
        borderRadius:5,
        shadowColor:'black',
        shadowOffset:{
            width:0,height:3
        },
        shadowOpacity:0.15,
        shadowRadius:5,
        elevation:20,
        zIndex:99
    },
    close: {
        width:30,
        borderWidth: 1,
        borderColor: '#EEE',
        fontSize: 24,
        color: '#646464',
        textAlign: 'center',
        padding:2,
        marginLeft: "90%",
        borderRadius:15,
        marginVertical:-15
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
    },
    label:{
      marginLeft:15
    }
})