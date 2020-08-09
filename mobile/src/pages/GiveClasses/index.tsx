import React from "react";
import {View, ImageBackground, Text} from "react-native";
import {useNavigation} from "@react-navigation/native"

import styles from "../GiveClasses/styles";

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import {RectButton} from "react-native-gesture-handler";

function GiveClasses() {
    const {goBack} = useNavigation();

    function handleNavigationBack() {
        goBack();
    }
    
    return <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
            <Text style={styles.title}>
                Quer ser um Proffy?
            </Text>
            <Text style={styles.description}>
                Para começar, você precisa primeiro se cadastrar como professor na nossa plataforma web.
            </Text>
        </ImageBackground>

        <RectButton style={styles.okButton} onPress={handleNavigationBack}>
            <Text style={styles.okButtonText}>Tudo bem</Text>
        </RectButton>
    </View>
}

export default GiveClasses;