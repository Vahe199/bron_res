import React from "react";
import {StyleSheet, ImageBackground, Text, View, ScrollView} from "react-native";

function TermsOfUseScreen({ navigation }) {
    return (
        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>!!!!!!!! ?</Text>
                    <Text style={styles.text}>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.             </Text>
                    <Text style={styles.textTitle}>!!!!!! ?</Text>
                    <Text style={styles.text}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum"             </Text>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}
const styles= StyleSheet.create({
    background:{
        flex:1
    },
    container:{
        flex: 1,
        flexDirection:'column',
        padding:20
    },
    textTitle:{
        fontSize:20,
        fontWeight:'700',
        marginVertical:20
    },
    text:{
        fontSize: 14
    }
})
export default TermsOfUseScreen;