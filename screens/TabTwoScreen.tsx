import  React, {useState} from 'react';
import {
    Button,
    StyleSheet, TextInput,

} from 'react-native';
import { WebView } from 'react-native-webview';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [name,setName]= useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO DO LIST</Text>
        <View style={styles.formView}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text)=>setName(text)}
                placeholder={'Type Name to Show :))'}
            />
            <Button
                style={{borderWidth:1}}
                title={"Show"}
                onPress={ ()=>
                {}
                }
            />
        </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
    formView: {
      flexDirection:'row',
        justifyContent:'space-between',
        width:'50%',
    },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    input: {
        borderWidth:1,
        width:"70%",
        alignSelf:'center',
        paddingLeft: 10,
        marginVertical:10,
        height: 50
    },
});
