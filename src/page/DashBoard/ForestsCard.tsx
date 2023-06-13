import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Card, Button, TextField } from 'react-native-ui-lib';

import { Forests, IForest } from '../../models/Forest';
import { useAppContext } from '../../storage/storage';

import AddForestModal from './ForestsCard/AddForestModal';
import EditForestModal from './ForestsCard/EditForestModal';

import ForestsList from './ForestsCard/ForestsList';


export default () => {
    const { getForest, addNewForest, editForest, deleteForest } = useAppContext();
    const [forests, setForests] = useState<Forests>(new Forests());

    const [newForest, setNewForest] = useState<IForest>({ name: '', sizeHa: 0 });

    const [isModalVisible, setModalVisible] = useState(false);
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [selectedForest, setSelectedForest] = useState<IForest | null>(null);

    useEffect(() => {
        const fetchForests = async () => {
            const fetchedForests = await getForest();
            setForests(fetchedForests);
        };

        fetchForests();
    }, []);

    const handleAddForest = async () => {
        const updatedForests = await addNewForest(newForest);
        setForests(updatedForests);
        setNewForest({ name: '', sizeHa: 0 });
        setModalVisible(false);
    };

    const handleSaveForest = async (editedForest: IForest) => {
        const updatedForests = await editForest(editedForest);
        setForests(updatedForests);
        setEditModalVisible(false);
    };

    const handleDeleteForest = async (forestToDelete: IForest) => {
        const updatedForests = await deleteForest(forestToDelete);
        setForests(updatedForests);
        setEditModalVisible(false);
    };

    return (
        <View>
            <AddForestModal
                isModalVisible={isModalVisible}
                newForest={newForest}
                setNewForest={setNewForest}
                handleAddForest={handleAddForest}
                setModalVisible={setModalVisible}
            />

            <EditForestModal
                isModalVisible={isEditModalVisible}
                forest={selectedForest}
                handleSave={handleSaveForest}
                handleDelete={handleDeleteForest}
                setModalVisible={setEditModalVisible}
            />

            <Card
                borderRadius={10}
                style={{ margin: "10%", padding: 20, width: "80%" }}
                enableShadow
            >
                <View>
                    <Text text20 blue60>
                        My Forest
                    </Text>
                </View>

                <ForestsList
                    forests={forests}
                    setSelectedForest={setSelectedForest}
                    setEditModalVisible={setEditModalVisible}
                />

                <Button text70 white background-orange30 label="Add Forest" marginT-20 onPress={() => setModalVisible(true)} />
            </Card>
        </View>
    );
}
