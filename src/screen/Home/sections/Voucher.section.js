/* eslint-disable prettier/prettier */

import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';
import { colors } from '../../../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../../../utils/Utils';

const VoucherSection = ({ voucher, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image
                    source={item.banner}
                    style={styles.banner}
                />
                <View style={styles.viewDesc}>
                    <Text style={styles.txtDisc}>{item.desc}</Text>
                    <View style={styles.viewTouch}>
                        <Text style={styles.txtBerlaku}>Berlaku Hingga : <Text style={styles.txtEnddate}>{item.end_date}</Text></Text>
                        <TouchableOpacity
                            style={styles.touch}
                        >
                            <Text style={styles.txtSalin}>Salin Kode</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {voucher !== [] ? (
                <FlatList
                    data={voucher}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingTop: responsiveHeight(24),
                    }}
                    keyExtractor={item => item.id}
                />
            ) : (
                <View style={styles.viewDataKosong}>
                    <Image
                        source={require('../../../assets/images/data-empty.png')}
                        style={styles.dataEmpty}
                    />
                    <Text style={styles.txtVoucher}>Tidak ada voucher diskon</Text>
                </View>
            )}
            <View style={styles.btnAddVoucher}>
                <Button
                    onPress={() => navigation.navigate('AddVoucher')}
                    type="AddVoucher"
                    label="Add Voucher"
                />
            </View>
        </View>
    );
};

export default VoucherSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: responsiveWidth(24),
    },
    card: {
        backgroundColor: colors.white,
        marginBottom: responsiveHeight(24),
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
    banner: {
        height: responsiveHeight(138),
        width: '100%',
        resizeMode: 'stretch',
    },
    dataEmpty: {
        width: responsiveWidth(210),
        height: responsiveHeight(192),
        resizeMode: 'contain',
    },
    txtVoucher: {
        marginTop: 10,
        fontSize: 20,
        color: '#1A191D',
        fontWeight: 'bold',
    },
    viewDesc: {
        borderTopWidth: 1,
        borderStyle: 'dashed',
        padding: responsiveHeight(16),
    },
    viewDataKosong: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtDisc: {
        color: '#1D1D21',
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: '500',
    },
    txtBerlaku: {
        color: '#61616A',
        fontSize: 12,
        fontWeight: '400',
    },
    txtEnddate: {
        fontWeight: 'bold',
    },
    viewTouch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: responsiveHeight(12),
    },
    touch: {
        backgroundColor: colors.secondaryBlue,
        paddingHorizontal: responsiveWidth(12),
        paddingVertical: responsiveHeight(8),
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
    txtSalin: {
        fontSize: 12,
        color: colors.white,
        fontWeight: '500',
    },
    btnAddVoucher: {
        position: 'absolute',
        bottom: responsiveHeight(40),
        right: responsiveWidth(16),
    },
});
