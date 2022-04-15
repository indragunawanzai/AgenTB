/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../../components/Button';
import { responsiveHeight, responsiveWidth } from '../../../utils/Utils';

const ReferralSection = () => {

    let kode = 'Y66AZ';
    const copyToClipboard = () => {
        Clipboard.setString(kode)
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Image
                        source={require('../../../assets/images/hands-phone.png')}
                        style={styles.imgHandsPhone}
                    />
                </View>
                <View style={{ marginTop: responsiveHeight(8) }}>
                    <Text style={styles.txtBold}>Undang customer untuk</Text>
                    <Text style={styles.txtBold}>menginstall Aplikasi Trawlbens</Text>
                </View>
                <View style={{ marginTop: responsiveHeight(12) }}>
                    <Text style={styles.txt}>Anda dapat membagikan referral code anda</Text>
                    <Text style={styles.txt}>dengan mengajak calon customer</Text>
                </View>
            </View>
            <View style={styles.viewCode}>
                <Text style={styles.txtReferal}>{kode}</Text>
                <TouchableOpacity
                    onPress={() => copyToClipboard()}
                    style={{
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                    <Image
                        source={require('../../../assets/icon/icon-copy.png')}
                        style={styles.iconCopy}
                    />
                    <View style={{ width: responsiveWidth(10) }} />
                    <View>
                        <Text style={styles.txtSalinCode}>Salin Kode</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ height: responsiveHeight(48) }} />
            <Button
                label="Undang Customer"
            />
        </View>
    );
};

export default ReferralSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: responsiveHeight(16),
        paddingHorizontal: responsiveWidth(20),
        justifyContent: 'space-between',
    },
    imgHandsPhone: {
        width: responsiveWidth(100),
        height: responsiveHeight(178),
        resizeMode: 'contain',
    },
    txtBold: {
        fontSize: 20,
        color: '#1A191D',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    txt: {
        fontSize: 16,
        color: '#61616A',
        textAlign: 'center',
    },
    viewCode: {
        marginTop: responsiveHeight(32),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E60013',
        borderStyle: 'dashed',
        backgroundColor: '#FFDADD',
        paddingHorizontal: responsiveWidth(12),
        paddingVertical: responsiveHeight(16),
    },
    iconCopy: {
        width: responsiveWidth(20),
        height: responsiveHeight(20),
        resizeMode: 'contain',
    },
    txtSalinCode: {
        fontSize: 16,
        color: '#61616A',
    },
    txtReferal: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '500',
    },
})