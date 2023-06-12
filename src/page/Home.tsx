import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';


export default ()=>{
    return (
        <View flex center>
          <Text blue80 text10>Carbonita</Text>
    
          <View marginT-10 center>
            <Text blue50 text20>Welcome</Text>
          </View>
          <View marginT-80 center>
            <Button text70 white background-orange30 label="Go to the app." marginT-20 onPress={()=>{
              console.log("ok")
            }}/>
          </View>
        </View>
      ); 
}