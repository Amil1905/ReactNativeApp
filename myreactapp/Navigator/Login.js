import React, {useEffect,useState} from 'react';
import * as pictures from './AppUsers';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  string
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

function Login(props) {
  const [data, setData]=useState([]);
  const [data2, setDatausers]=useState([]);
  const Getdata =async() => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const response=await fetch('https://jsonplaceholder.typicode.com/posts');
      const json= response.json()
      json.then(jsonbody=> setData(jsonbody));
    }catch(error){
      console.error(error);  
    }  
  };  
  useEffect(()=> {
    Getdata();
    Getusers();

  }, []);
  const Getusers= async() => {
    try {
      const response2= await fetch('https://jsonplaceholder.typicode.com/users');
      const json= response2.json();
      json.then(jsons => setDatausers(jsons));
    }
    catch(error) {
      console.error(error);
    }
  }
  function navigateto() {
    props.navigation.navigate('SecondPage',{item:data});
  }
  function openWebsite(url2) {
    Linking.openURL(url2);
}
 const [emails, SetEmail]=useState("")
 const [checkValidEmail, setCheckValidemail] =useState(false);
 const [seepass, setSeePass]=useState(false);
 const [newpass, setpass]=useState("");
 const [validation, setValidation]=useState(false);
 const [passer, setPasser]=useState(false);
 const CheckEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  SetEmail(text);
  if (reg.test(text) || text=="Admin") {
    setCheckValidemail(true);
  }else {
    setCheckValidemail(false);
  }
 };
 const checkpassvalidity =(text1) => {
  setpass(text1);
  if(newpass.length >= 0 && newpass.length <= 11) {
    setSeePass(true);
  }
  else {
    setSeePass(false);
  }
 }
 async => a=[];
 const Checkvalidity=(text) => {
  SetEmail(text);
  a=[];
  for(i =0; i<10; i++) {
    if(text==data2[i].email || text=="Admin") {
      setValidation(true);
      a.push(text); 
      break;
    }
    else {
      setValidation(false);
      setpass("");
      setPasser(false);
    }
  }
 }
 const checkpasser=(text1)=> {
  setpass(text1);
  if(validation==true) {
    setPasser(false);
    for(i =0; i<10; i++) {
      if(a[0]==data2[i].email) {
        K=data2[i].address.zipcode;
        if(text1==K) {
          setPasser(true);
          break;
        }
        else {
          setPasser(false);        
        }
      }
      else if(a[0]=="Admin"){     
        K="12345";
        if(text1==K){
          setPasser(true);

          break;
        }
      }
      else {
        setPasser(false);    
      }
    }
  }else {       
  }
 }
  return (
      <View style={styles.loginview2}>
          <View style={styles.loginview}>
            <Text style={styles.mail}>
             Email
            </Text>
            <View style={styles.input}>
                <TextInput
                value={emails}onChangeText = { 
                  (text) => {
                    CheckEmail(text);
                    Checkvalidity(text)}
                }
                />
            </View>
            {checkValidEmail ?  <Text style={styles.wrongformat}> </Text>:  <Text style={styles.wrongformat}>Wrong format email </Text>}
            {validation ? <Text>  </Text>: null}          
            <Text style={styles.pass}>
                Password
            </Text>
            <View style={styles.input2}>
              <TextInput
                value= {newpass}  onChangeText={
                  (text)=> {
                    checkpassvalidity(text);
                    checkpasser(text);
                  }
                }
                secureTextEntry={true}
              />
            </View>
            {seepass ? <Text> </Text>: <Text style={styles.wrongformat}>invalid Password format</Text>}           
            <View style={styles.title}>
            {(checkValidEmail && seepass &&validation&&passer) ? (
              <Button
                
                style={styles.newstyle}
                title="Login"
                onPress={navigateto}
                />
          ) : (
              <Button
                disabled
                title="Login"
                onPress={navigateto}
              />
              )}
            </View>
            <View style={styles.newimgview}>
            <TouchableOpacity  onPress={() => openWebsite('https://www.google.com.tr/?hl=tr')}>
              <Image
                source={pictures['picture22']}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => openWebsite('https://tr-tr.facebook.com/')} >
              <Image style={styles.facebookImage}
                source={pictures['picture23']}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => openWebsite('https://www.linkedin.com/login')} >
              <Image style={styles.facebookImage}
                source={pictures['picture24']}
              />
            </TouchableOpacity>
            </View>
          </View>
      </View>
  );
};
const styles=StyleSheet.create({
  loginview2:{
    flex:1,
    backgroundColor:'#ffdab9',
    justifyContent:'center',
    alignItems:'center'
  },
  loginview:{
    flex:0.7,
    width:300,
    height:175,
    backgroundColor:'white',
    gap:10,
    borderRadius:5,
    borderWidth:3,
  },
  wrongformat:{    
    marginLeft:140,
    color:'red',
    fontWeight:'bold',
  },
  title: {
    width:250,
    height:41,
    borderRadius:7,
    borderWidth:3,
    backgroundColor:'white',
    marginLeft:20,
    marginTop:10
  },
  mail:{
    marginLeft:5,
    fontWeight:'bold',
    fontSize:15,
  },
  input:{
    width:250,
    height:50,
    borderRadius:15,
    borderWidth:3,
    backgroundColor:'white',
    marginLeft:20
  },
  pass:{
    marginLeft:5,
    fontWeight:'bold',
  },
  input2:{
    width:250,
    height:50,
    borderRadius:15,
    borderWidth:3,
    backgroundColor:'white',
    marginLeft:20,
  },
  newstyle: {
    color:'pink'
  },
  newimgview: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  facebookImage: {
    top:2
  }
})
export default Login;
