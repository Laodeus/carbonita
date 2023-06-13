import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, TextField } from 'react-native-ui-lib';
import Modal from 'react-native-modal';

export default ({ isModalVisible, newForest, setNewForest, handleAddForest, setModalVisible }) => {
    return (
        <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
                <TextField
                    label="Name"
                    value={newForest.name}
                    onChangeText={name => setNewForest({ ...newForest, name })}
                />
                <TextField
                    placeholder="Size (ha)"
                    value={newForest.sizeHa.toString()}
                    onChangeText={sizeHa => setNewForest({ ...newForest, sizeHa: Number(sizeHa) })}
                    keyboardType="numeric"
                    validate={[
                        (value: any) => !isNaN(Number(value)) && Number(value) >= 0,
                    ]}
                    validationMessage={['Please enter a valid number']}
                />

                <Button text70 white background-green30 label="Add" marginT-20 onPress={handleAddForest} />
                <Button text70 white background-red30 label="Cancel" marginT-20 onPress={() => setModalVisible(false)} />
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
});
