/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../utils/Utils';

const Button = ({ label, onPress, type, disable }) => {

    if (type === 'AddVoucher') {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.btnAddVoucher}
            >
                <Image
                    source={require('../assets/icon/icon-plus.png')}
                    style={styles.iconPlus}
                />
                <View style={{ width: responsiveWidth(12) }} />
                <Text style={styles.labelVoucher}>{label}</Text>
            </TouchableOpacity>
        );
    }

    if (type === 'disable') {
        return (
            <View>
                <View style={styles.buttonOff} >
                    <Text style={styles.txtLabel}>{label}</Text>
                </View>
            </View>
        );
    }

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                disable={disable}
                style={styles.button}
            >
                <Text style={styles.txtLabel}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primaryGreen,
        paddingVertical: responsiveHeight(16),
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonOff: {
        backgroundColor: '#D2D2D5',
        paddingVertical: responsiveHeight(16),
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtLabel: {
        fontSize: 16,
        color: colors.white,
    },
    btnAddVoucher: {
        flexDirection: 'row',
        backgroundColor: colors.primaryGreen,
        paddingVertical: responsiveHeight(16),
        paddingHorizontal: responsiveWidth(16),
        alignItems: 'center',
        borderRadius: 16,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconPlus: {
        width: responsiveWidth(19),
        height: responsiveHeight(19),
        resizeMode: 'contain',
    },
    labelVoucher: {
        fontSize: 14,
        color: colors.white,
        fontWeight: '500',
    },
});
