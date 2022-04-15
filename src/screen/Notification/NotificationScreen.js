/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import {
    StyleSheet,
    Text, View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { colors } from '../../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../../utils/Utils';

const data = [
    { id: 1, status: 'disetujui', kode_voucher: 'MB-JKT-00001' },
    { id: 2, status: 'disetujui', kode_voucher: 'MB-JKT-00002' },
    { id: 3, status: 'ditolak', kode_voucher: 'MB-JKT-00003' },
    { id: 4, status: 'ditolak', kode_voucher: 'MB-JKT-00004' },
];

const NotificationScreen = ({ navigation }) => {

    const [dataNotif, setDataNotif] = useState(data);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                {item.status === 'disetujui' ? (
                    <>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={styles.line} />
                            <Image
                                source={require('../../assets/icon/icon-check.png')}
                                style={styles.iconCheck}
                            />
                        </View>
                        <View style={styles.viewDesc}>
                            <Text style={styles.request}>Request telah disetujui</Text>
                            <Text style={styles.txtDisc}>{item.kode_voucher} menyetujui request voucher</Text>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={styles.lineClose} />
                            <Image
                                source={require('../../assets/icon/icon-close.png')}
                                style={styles.iconCheck}
                            />
                        </View>
                        <View style={styles.viewDesc}>
                            <Text style={styles.request}>Request ditolak</Text>
                            <Text style={styles.txtDisc}>{item.kode_voucher} menolak request voucher</Text>
                        </View>
                    </>
                )}
            </View>
        );
    };

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/icon/icon-back.png')}
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHome}>Notifikasi</Text>
            </View>

            <FlatList
                data={dataNotif}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: responsiveHeight(24),
                    paddingHorizontal: responsiveWidth(16),
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingVertical: responsiveHeight(20),
        paddingHorizontal: responsiveWidth(20),
    },
    txtHome: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        marginLeft: responsiveWidth(12),
    },
    iconBack: {
        width: responsiveWidth(24),
        height: responsiveHeight(24),
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        paddingHorizontal: responsiveWidth(24),
    },
    card: {
        backgroundColor: colors.white,
        paddingHorizontal: responsiveWidth(8),
        paddingVertical: responsiveHeight(10),
        marginBottom: responsiveHeight(16),
        flexDirection: 'row',
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    iconCheck: {
        height: responsiveHeight(28),
        width: responsiveWidth(28),
        marginLeft: responsiveWidth(12),
        resizeMode: 'contain',
    },
    line: {
        borderWidth: 2,
        borderColor: '#3D8824',
        borderRadius: 4,
        width: 1,
        height: responsiveHeight(48),
    },
    lineClose: {
        borderWidth: 2,
        borderColor: '#E60013',
        borderRadius: 4,
        width: 1,
        height: responsiveHeight(48),
    },
    viewDesc: {
        flex: 1,
        marginLeft: responsiveWidth(12),
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    request: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    txtDisc: {
        color: '#61616A',
        fontSize: 12,
        fontWeight: '500',
    },
});
