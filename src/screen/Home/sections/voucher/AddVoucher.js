/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { colors } from '../../../../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../../../../utils/Utils';
import ModalKodeMitra from '../../components/ModalKodeMitra';
import ModalRequest from '../../components/ModalRequest';

const kodeMitra = [
    { id: 1, kode: 'MB-JKT-00001' },
    { id: 2, kode: 'MB-JKT-00002' },
    { id: 3, kode: 'MB-JKT-00003' },
    { id: 4, kode: 'MB-JKT-00004' },
    { id: 5, kode: 'MB-JKT-00005' },
];

const AddVoucher = ({ navigation }) => {

    const [listKodeMitra, setListKodeMitra] = useState(kodeMitra);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalRequest, setModalRequest] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [diskon, setDiskon] = useState('');

    const onSubmit = () => {
        if (selectedItem && diskon) {
            setModalRequest(true);
            navigation.goBack();
        } else {
            console.log('data harus di isi');
        }
    };

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../../../../assets/icon/icon-back.png')}
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHome}>Add Voucher</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Input
                        type="search"
                        label="Mitra"
                        value={selectedItem !== {} ? selectedItem.kode : ' Masukkan Kode Mitra'}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    />
                    <Input
                        label="Diskon"
                        placeholder="Masukkan Diskon"
                        onChangeText={(diskon) => setDiskon(diskon)}
                    />
                </View>
                {selectedItem && diskon ? (
                    <Button
                        label="Request"
                        onPress={() => onSubmit()}
                    />
                ) : (
                    <Button
                        type="disable"
                        label="Request"
                    />
                )}
            </View>

            <View>
                <ModalKodeMitra
                    modalVisible={modalVisible}
                    closeModal={() => setModalVisible(false)}
                    listKodeMitra={listKodeMitra}
                    selectedItem={(item) => setSelectedItem(item)}
                />

                <ModalRequest
                    modalVisible={modalRequest}
                    closeModal={() => setModalRequest(false)}
                />
            </View>
        </View>
    );
};

export default AddVoucher;

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
        paddingVertical: responsiveHeight(24),
        paddingHorizontal: responsiveWidth(24),
        justifyContent: 'space-between',
        flex: 1,
    },
});
