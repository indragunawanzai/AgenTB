/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../../utils/Utils';

const ModalRequest = ({ modalVisible, closeModal }) => {
    return (
        <>
            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.modalText}>Request voucher telah dikirim ke Mitra, Silahkan ditunggu ya.</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => closeModal()}
                            style={{ padding: 10 }}
                        >
                            <Text style={styles.textStyle}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default ModalRequest;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(16),
    },
    modalView: {
        bottom: responsiveHeight(60),
        position: 'absolute',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(16),
        paddingVertical: responsiveHeight(12),
        backgroundColor: '#48A2D4',
        borderRadius: 8,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    modalText: {
        fontSize: 14,
        letterSpacing: 1,
        color: '#F9F9F9',
    },
});
