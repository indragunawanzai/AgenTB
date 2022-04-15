/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../../utils/Utils';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    });

    return (
        <View style={styles.page}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
            <View style={styles.viewVersi}>
                <Text style={styles.txtVersi}>App versi 1.6.7</Text>
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: responsiveWidth(130),
        height: responsiveHeight(130),
        resizeMode: 'contain',
    },
    viewVersi: {
        position: 'absolute',
        bottom: responsiveHeight(20),
    },
    txtVersi: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '400',
    },
});
