import React, {useEffect} from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    Animated,
    TouchableOpacity,
    View,
    Dimensions,
    Image,
    Pressable
} from "react-native";
import {Formik} from 'formik';
import close from "../../../../../assets/images/close.png"
import {SignupSchema} from "../../../Utils/ValidationForm";
import {fetchReservationData, returnToOriginState} from "../../../../redux/action/reservation_action_&_reducer";
import {useDispatch, useSelector} from "react-redux";

export const ReserveForm = ({navigation,tableId,date,count}) => {
    const dispatch = useDispatch()
    const width = Dimensions.get('window').width;
    const {errors,success} = useSelector(state =>state.reservation)
    const [animatedTime, setAnimatedTime] = React.useState(false)

    useEffect(()=>{
        if(errors) {
            setAnimatedTime(true)
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true
                }),
                Animated.delay(5000),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                })
            ]).start()
            dispatch(returnToOriginState())
        }
        if(success == 1){
            navigation.push('Подтверждение')
        }
    },[errors,success])
    const sendFormData = async (values) => {
        let {name, phone} = values
        let phones = phone.replace(/\D/g, '')
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phones);
        formData.append('tableId', tableId);
        formData.append('date', date);
        formData.append('guests', count);
         await dispatch(fetchReservationData(formData))
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
                    <Pressable onPress={() => setAnimatedTime(false)} style={styles.close}>
                        <Image source={close} style={{width:15, height:15}}/>
                    </Pressable>
                    <Text style={{color: '#c50000', fontSize: 20}}>Бронирование отклонено!</Text>
                    <Text style={{textAlign: 'center'}}>Ваше бронирование было отклонено, поскольку столик уже забронирован на это время </Text>
                    <Text style={{fontWeight: '700'}}>Доступное время: 14:00, 17:00, 20:00</Text>
                </Animated.View>}
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
                            <Text style={styles.label}>Имя</Text>
                            <TextInput style={[styles.input,{width:width-35}]}
                                       value={props.values.name}
                                       onChangeText={props.handleChange('name')}
                            />
                            {props.errors.name && props.touched.name ? (
                                <Text style={[styles.warning,{ bottom:225,}]}>{props.errors.name}</Text>
                            ) : null}
                            <Text style={styles.label}>Номер телефона</Text>
                            <TextInput style={[styles.input,{width:width-35}]}
                                       value={props.values.phone}
                                        textContentType='telephoneNumber'
                                        dataDetectorTypes='phoneNumber'
                                       keyboardType='phone-pad'
                                       autoCompleteType='cc-number'
                                       placeholder ="+7 (999) 999-99-99"
                                       onChangeText={(text)=> {
                                           let x = text.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                                           let num = !x[2] ? x[1] : '+ (' + x[1] + ') ' + x[2] +  (x[3]? '-' + x[3]:x[3]) + (x[4] ? '-' + x[4] : '');

                                           props.setFieldValue('phone', num)
                                       }}/>
                            {props.errors.phone && props.touched.phone ? (
                                <Text style={[styles.warning,{ bottom:135,}]}>{props.errors.phone}</Text>
                            ) : null}
                            <TouchableOpacity activeOpacity={0.5}
                                              onPress={props.handleSubmit}
                                              style={[styles.button,{width:width-35}]}>
                                <Text style={styles.textBtn}>Забронировать столик</Text>
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
        borderWidth: 1,
        borderColor: '#EEE',
        padding:5,
        marginLeft: "96%",
        borderRadius:15,
        marginVertical:-10
    },
    input: {
        borderWidth:2,
        borderRadius: 15,
        marginVertical: 10,
        borderColor:'#e5e5e5',
        fontSize: 20,
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    button: {
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
        fontSize:11
    },
    label:{
      marginLeft:15
    }
})
