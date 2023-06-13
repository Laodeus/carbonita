import React from 'react';
import { Card, Text, GridList } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

export default({ forests, setSelectedForest, setEditModalVisible}) => {

    const truncateName = (name) => {
        if (name.length > 6) {
          return name.substring(0, 6) + '...';
        }
        return name;
    };

    return (
      <GridList
        data={forests}
        numColumns={1}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => {
            setSelectedForest(item);
            setEditModalVisible(true);
          }}>
            <Text text70 grey10>{`${truncateName(item.name)}, ${item.sizeHa}ha`}</Text>
          </Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
};

const styles = StyleSheet.create({
  card: {
   
  },
});