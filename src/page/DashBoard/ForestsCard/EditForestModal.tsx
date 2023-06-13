import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, TextField } from 'react-native-ui-lib';
import Modal from 'react-native-modal';

export default ({ isModalVisible, forest, handleSave, handleDelete, setModalVisible }) => {
    const [editedForest, setEditedForest] = React.useState(forest);

    React.useEffect(() => {
        setEditedForest(forest);
    }, [forest]);

    return (
        <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
                {editedForest && (
                    <>
                        <TextField
                            label="Name"
                            value={editedForest.name}
                            onChangeText={name => setEditedForest({ ...editedForest, name })}
                        />
                        <TextField
                            placeholder="Size (ha)"
                            value={editedForest.sizeHa.toString()}
                            onChangeText={sizeHa => setEditedForest({ ...editedForest, sizeHa: Number(sizeHa) })}
                            keyboardType="numeric"
                            validate={[
                                (value: any) => !isNaN(Number(value)) && Number(value) >= 0,
                            ]}
                            validationMessage={['Please enter a valid number']}
                        />

                        <Button text70 white background-green30 label="Save" marginT-20 onPress={() => handleSave(editedForest)} />
                        <Button text70 white background-orange30 label="Delete" marginT-20 onPress={() => handleDelete(editedForest)} />
                    </>
                )}
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