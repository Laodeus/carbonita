import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/core';
import Routes from '../navigator/Routes';

export default ()=>{
    const navigation = useNavigation();

    return (
        <View flex center>
          <Text blue20 text10>Carbonita</Text>
    
          <View marginT-10 center>
            <Text blue50 text20>Welcome</Text>
          </View>
          <View marginT-80 center>
            <Button text70 white background-orange30 label="Go to the app." marginT-20 onPress={()=>{
              navigation.navigate(Routes.DASHBOARD);
            }}/>
          </View>
        </View>
      ); 
}