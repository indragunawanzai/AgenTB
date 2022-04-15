/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../utils/Utils';

const Input = ({
    label,
    keyboardType,
    onChangeText,
    placeholder,
    type,
    value,
    onPress,
}) => {
    if (type === 'search') {
        return (
            <View style={styles.container}>
                <View style={styles.viewLabel}>
                    <Text style={styles.txtLabel}>{label}</Text>
                </View>
                <View style={styles.viewInput} >
                    <Image
                        source={require('../assets/icon/icon-search.png')}
                        style={styles.iconSearch}
                    />
                    <TextInput
                        onPressIn={onPress}
                        style={styles.txtInputSearch}
                        placeholder={'Masukkan Kode Mitra'}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        value={value}
                    />
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <View style={styles.viewLabel}>
                    <Text style={styles.txtLabel}>{label}</Text>
                </View>
                <TextInput
                    style={styles.txtInput}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                />
            </View>
        );
    }
};

export default Input;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#848484',
        paddingHorizontal: responsiveWidth(12),
        borderRadius: 8,
        marginBottom: responsiveHeight(15),
    },
    iconSearch: {
        width: responsiveWidth(17),
        height: responsiveHeight(17),
        resizeMode: 'contain',
    },
    txtInput: {
        borderWidth: 1,
        borderColor: '#848484',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        fontSize: 14,
        color: '#1F1E2C',
        fontWeight: '500',
    },
    txtInputSearch: {
        borderColor: '#848484',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        fontSize: 14,
        color: '#1F1E2C',
        fontWeight: '500',
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewLabel: {
        backgroundColor: '#E5E5E5',
        zIndex: 1,
        position: 'absolute',
        paddingHorizontal: responsiveWidth(4),
        top: responsiveHeight(-5),
        left: responsiveWidth(15),
    },
    txtLabel: {
        color: '#1C1B1F',
        fontSize: 12,
    },
});
