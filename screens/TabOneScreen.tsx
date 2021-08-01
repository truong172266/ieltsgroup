import  React, {useState} from 'react';

import { StyleSheet,
        TextInput,
        Button,
    TouchableOpacity,
    ViewStyle,
    Alert,
    FlatList,
    Linking,
    Clipboard,
    ScrollView,
    SafeAreaView,
    Dimensions
} from 'react-native';

import WebView from "react-native-webview/lib/WebView";
import HyperLink from "react-native-hyperlink";
import {Divider} from 'react-native-elements';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {SafeAreaProvider} from "react-native-safe-area-context";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Firebase from "../firebase/Firebase";
import * as Console from "console";


export default function TabOneScreen() {
    const [link, setLink] = useState('');
    const [pass,setPass] = useState('');
    const [account, setAccount] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [moreHistory,setMoreHistory] = useState(false);
    const [moreAccount,setMoreAccount] = useState(false);
    const [histories , setHistories] = useState(null);
    const [accounts , setAccounts] = useState(null);
    const [iconMoreHistory,setIconMoreHistory] = useState('caretdown');
    const [iconMoreAccount,setIconMoreAccount] = useState('caretdown');
    async function UpdateLink(){
        if(pass=='1702' && link != '' && name!= ''){
          await  Firebase.send('Link',
                {
                    post: link,
                    name: name,
                    time: Firebase.timeStamp(new Date()) ,
                }
            )
            await Firebase.push('Histories',
                {
                    post: link,
                    name: name,
                    time: Firebase.timeStamp(new Date()) ,
                    key:'',
                },
                )

        }
        else if(link =='' || name == '' || pass =='' ){
            alert('Không được để trống ... ')
        }
        else {alert('Mật khẩu không chính xác ...',)}
    }
    async function HistoryShow(){
          await Firebase.listen(
              'Histories',
              'value',
              async (snapshot)=>{
                  if(snapshot.val() != null )
                  {
                      var arr = Object.values(snapshot.val());
                      console.log(arr);
                      setHistories(arr);
                  }
              }
              )

    }
    async function MoreHistory(){

         setMoreHistory(!moreHistory);
         if(moreHistory ){
             setIconMoreHistory('caretdown')
         }
         else {
            await HistoryShow();
             setIconMoreHistory('caretup');
         }
    }
    async function AccountShow(){
        await Firebase.listen(
            'Accounts',
            'value',
            async (snapshot)=>{
                if(snapshot.val() != null )
                {
                    var arr = Object.values(snapshot.val());
                    console.log(arr);
                    setAccounts(arr);
                }
            }
        )

    }
    async function PushAccount(){
        await Firebase.push('Accounts',
            {
                account: account,
                password: password,
                key:'',
            },
        )
    }

    async function MoreAccount(){

        setMoreAccount(!moreAccount);
        if(moreAccount ){
            setIconMoreAccount('caretdown')
        }
        else {
            await AccountShow();
            setIconMoreAccount('caretup');
        }
    }
    function Copy(value){
        Clipboard.setString(value);
        return Clipboard.getString();
    }
    const RenderHistories =({item}) =>{
        return (
            <View >
                    <Text
                         style={ { fontSize: 12 } }>{item.time} : {item.name} posted
                        <Text  style = { { color: '#2980b9', fontSize: 12,} } onPress={()=> window.open(`${item.post}`, '_blank')}
                        > {item.post}</Text>
                    </Text>
                <Divider style={{marginVertical: 10,}} />
            </View>
            )
    }
    const RenderAccount =  ({item, index})=> {
        return (
            <View>
                <Text>{index.toString()}.</Text>
                <View style={{marginLeft: 10, }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Text>Tài Khoản: {item.account} </Text>
                        <TouchableOpacity
                            onPress={() => Copy(`${item.account}`)}
                        >
                            <AntDesign name={'copy1'} size={15}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Text>Mật Khẩu: {item.password} </Text>
                        <TouchableOpacity
                            onPress={() => Copy(`${item.password}`)}
                        >
                            <AntDesign name={'copy1'} size={15}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Divider style={{marginVertical: 10,}}/>
            </View>
        )
    }
    return (
            <SafeAreaProvider>
                <ScrollView style={{flex:1}}  >
                    <View style={styles.container}>
                        <Text style={styles.title}>Link Bài Viết :</Text>

                        <View style={styles.formView}>
                            <TextInput
                                style={styles.input}
                                value={link}
                                onChangeText={(text)=>setLink(text)}

                                placeholder={'Paste Link Here :))'}
                            />
                            <TextInput
                                style={styles.input}
                                value={pass}
                                onChangeText={(text)=>setPass(text)}
                                placeholder={'Password'}
                                maxLength={6}
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={(text)=>setName(text)}
                                placeholder={'Your Name'}
                                maxLength={10}
                            />
                            <View style ={{ flexDirection:'row', alignSelf:'center', marginVertical:20}}>
                                <Button title={"Update"}  onPress={ ()=>
                                    UpdateLink()
                                }/>

                            </View>

                        </View>
                        <View  style={{width:'100%',alignItems:'flex-start', width:'70%',}}>
                            <TouchableOpacity style={styles.formHistory}
                                              onPress={()=>MoreHistory()}
                            >
                                <AntDesign name={`${iconMoreHistory}`} size={17} color="black" />
                                <Text style={{marginLeft:10, fontSize: 17, }}>History</Text>
                            </TouchableOpacity>
                            {moreHistory ?
                                <FlatList
                                    style={styles.flatListHistory}
                                    inverted={true}
                                    data={histories}
                                    renderItem={RenderHistories}
                                    keyExtractor={(item ,index) => index.toString()}

                                />
                                :null}

                            <TouchableOpacity style={styles.formHistory}
                                              onPress={()=>
                                                  MoreAccount()
                                              }
                            >
                                <AntDesign name={`${iconMoreAccount}`} size={17} color="black" />
                                <Text style={{marginLeft:10, fontSize: 17, }}>Account</Text>
                            </TouchableOpacity>
                            {moreAccount ?
                                <View style={{borderWidth:1, width:'100%'}}>
                                    <TextInput
                                        style={styles.input}
                                        value={account}
                                        onChangeText={(text)=>setAccount(text)}
                                        placeholder={'Account'}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        value={password}
                                        onChangeText={(text)=>setPassword(text)}
                                        placeholder={'Password'}
                                    />
                                    <View style ={{ flexDirection:'row', alignSelf:'center', marginVertical:20, width: '70%'}}>
                                        <Button
                                            title={"ADD"}
                                            onPress={ ()=>
                                                PushAccount()
                                            }

                                        />

                                    </View>

                                    <FlatList
                                        style={styles.flatListHistory}
                                        data={accounts}
                                        renderItem={
                                            RenderAccount
                                        }
                                        keyExtractor={(item ,index) => index.toString()}
                                    />
                                </View>
                                :null}
                            <TouchableOpacity style={styles.formHistory}
                                              onPress={()=>
                                                  window.open('https://drive.google.com/drive/u/0/folders/1X7WorO1wAcJHogUhdndw7lA1ny5fgZrd?fbclid=IwAR3GsX-kL4PzUSmJi23MAKNUm_xTQ0b6XspCFvSb2KtgJKIf5ZuEjgywphYS')
                                              }
                            >
                                <Text  style={{marginLeft:10, fontSize: 17}}>Routine</Text>
                                <AntDesign style={{marginLeft:10}} name="arrowsalt" size={14} color="black" />
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255i,0.1)" />
                        <Text style={{}}>
                            © https://facebook.com/ieltsintelligent
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
     minHeight: Dimensions.get('window').height,
  },
  formView: {
    width:'100%',
  },
  input: {
      borderWidth:1,
      width:"70%",
      alignSelf:'center',
      height:50,
      paddingLeft: 10,
      marginVertical:10
  },
    button: {
      marginHorizontal: 100
    },
    formHistory: {
      flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height:50,

    },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    flatListHistory: {
      marginLeft: '5%'
    },
});
