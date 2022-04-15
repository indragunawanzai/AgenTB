/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../../utils/Utils';
import ReferralSection from './sections/Referral.section';
import VoucherSection from './sections/Voucher.section';

const dataVouchers = [
    {
        id: 1,
        banner: require('../../assets/images/banner-voucher.png'),
        desc: 'diskon gratis ongkir 20%',
        end_date: '12 Jan 2022',
    },
    {
        id: 2,
        banner: require('../../assets/images/banner-voucher.png'),
        desc: 'diskon gratis ongkir 20%',
        end_date: '12 Jan 2022',
    },
    {
        id: 3,
        banner: require('../../assets/images/banner-voucher.png'),
        desc: 'diskon gratis ongkir 20%',
        end_date: '12 Jan 2022',
    },
];

const HomeScreen = ({ navigation }) => {

    const [active, setActive] = useState('Referral');
    const [dataVoucher, setDataVoucher] = useState(dataVouchers);

    useEffect(() => {
        setDataVoucher;
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.txtHome}>Home</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notification')}
                >
                    <Image
                        source={require('../../assets/icon/icon-notification.png')}
                        style={styles.iconNotif}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.code}>
                <TouchableOpacity
                    onPress={() => setActive('Referral')}
                    style={active === 'Referral' ? styles.active : styles.nonActive}
                >
                    <Text style={active === 'Referral' ? styles.txtActive : styles.txtnonActive}>Referral</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setActive('Voucher')}
                    style={active === 'Voucher' ? styles.active : styles.nonActive}
                >
                    <Text style={active === 'Voucher' ? styles.txtActive : styles.txtnonActive}>Voucher</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                {active === 'Referral' && (
                    <ReferralSection />
                )}
                {active === 'Voucher' && (
                    <VoucherSection voucher={dataVoucher} navigation={navigation} />
                )}
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: responsiveWidth(20),
        paddingVertical: responsiveHeight(16),
    },
    txtHome: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
    iconNotif: {
        width: responsiveWidth(23),
        height: responsiveHeight(22),
        resizeMode: 'contain',
    },
    code: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    active: {
        flex: 1,
        borderBottomWidth: 5,
        borderBottomColor: '#E5E5E5',
        alignItems: 'center',
        paddingVertical: responsiveHeight(12),
    },
    nonActive: {
        flex: 1,
        borderBottomWidth: 5,
        borderBottomColor: colors.primary,
        alignItems: 'center',
        paddingVertical: responsiveHeight(12),
    },
    txtActive: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
    txtnonActive: {
        color: colors.white,
        fontSize: 16,
    },
});
