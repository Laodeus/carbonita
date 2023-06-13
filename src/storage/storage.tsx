import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IForest, Forest, Forests } from '../models/Forest';

const defaultValue = {}
const AppContext = createContext(defaultValue);

// Hook personnalisé pour gérer le stockage et les props partagées
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext doit être utilisé à l\'intérieur du AppProvider.');
    }

    return context;
};

export const AppProvider = ({ children }) => {
    const [storage, setStorage] = useState({});
    const [sharedProps, setSharedProps] = useState({});

    
    useEffect(() => {
        const loadStorage = async () => {
            try {
                const storedData = await AsyncStorage.getItem('appStorage');
                if (storedData) {
                    const parsedDatas = JSON.parse(storedData);
                    parsedDatas ? setStorage(parsedDatas) : setStorage(new Object());
                }
            } catch (error) {
                console.log('Erreur lors du chargement du stockage :', error);
            }
        };

        loadStorage();
    }, []);

    useEffect(() => {
        const saveStorage = async () => {
            try {
                await AsyncStorage.setItem('appStorage', JSON.stringify(storage));
            } catch (error) {
                console.log('Erreur lors de l\'enregistrement du stockage :', error);
            }
        };

        saveStorage();
    }, [storage]);


    const updateStorage = (newData: any) => {
        setStorage(newData);
    };

    const updateSharedProps = (newProps: any) => {
        setSharedProps(newProps);
    };

    const getForest = async (): Promise<Forests> => {
        let forest = storage ? storage['forest'] : undefined;
        if (forest === undefined) {
            forest = [];
            if (storage) {
                storage['forest'] = forest;
                await AsyncStorage.setItem('appStorage', JSON.stringify(storage));
            }
        }
        // Create a new Forests object from the forest array
        const forests = new Forests();
        forest.forEach((forestData: IForest) => {
            forests.push(new Forest(forestData));
        });
        return forests;
    };

    const addNewForest = async (newForest: IForest): Promise<Forests> => {
        const forests = await getForest();
        forests.push(new Forest(newForest));
        setStorage({ ...storage, forest: forests });
        return forests;
    };

    const editForest = async (editedForest: IForest) => {
        const forests = await getForest();
        const forestIndex = forests.findIndex(forest => forest.id === editedForest.id);  // Utilise l'identifiant au lieu du nom
        if (forestIndex !== -1) {
            forests[forestIndex] = new Forest(editedForest);
            setStorage({ ...storage, forest: forests });
        }
    
        return forests;
    };

    const deleteForest = async (forestToDelete: IForest): Promise<Forests> => {
        const forests = await getForest();
        const updatedForests = forests.filter(forest => forest.id !== forestToDelete.id);
        setStorage({ ...storage, forest: updatedForests });
        return updatedForests;
    };

    const contextValues = {
        storage,
        sharedProps,
        updateStorage,
        updateSharedProps,
        getForest,
        addNewForest,
        editForest,
        deleteForest
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};