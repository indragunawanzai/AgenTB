/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { colors } from '../../../utils/Colors';
import { responsiveHeight, responsiveWidth } from '../../../utils/Utils';

const ModalKodeMitra = ({
    modalVisible,
    listKodeMitra,
    closeModal,
    selectedItem,
}) => {
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {listKodeMitra.map((item, index) => (
                            <TouchableOpacity
                                onPress={() => {
                                    selectedItem(item);
                                    closeModal();
                                }}
                                key={index}
                            >
                                <Text style={styles.modalText}>{item.kode}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalKodeMitra;

const styles = StyleSheet.create({
    centeredView: {
        paddingHorizontal: responsiveWidth(24),
        top: responsiveHeight(130),
    },
    modalView: {
        backgroundColor: colors.white,
        padding: 12,
        paddingTop: 25,
        borderRadius: 8,
    },
    modalText: {
        marginBottom: 24,
        color: '#000000',
        fontWeight: '400',
    },
});
