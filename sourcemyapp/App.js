/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect,useState} from 'react';

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

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App() {
const [data, setData]=useState();
const Getdata =async() => {
  try {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const json =await response.json();
    setData(json);
    console.log(data)




  }catch(error){
    console.error(error);

  }







};

useEffect(()=> {
  Getdata();
}, []);





  return (
    <View style={styles.loginview}>

      <View style={styles.loginview}>
        <Text style={styles.title}>
          Login

        </Text>
      </View>

      <View style={styles.loginview}>
        <Text style={styles.mail}>
          Username
        </Text>
      </View>

      <View style={styles.loginview}>
        <TextInput
          style={styles.input}
          placeholder='____________________________'
          

        />
      </View>

      <View style={styles.loginview}>
        <Text style={styles.pass}>
          Password
        </Text>
      </View>

      <View style={styles.loginview}>
        <TextInput
          style={styles.input2}
          placeholder='____________________________'
          secureTextEntry={true}
          
        />
        <Button
          onPress={() => Alert.alert("Welcome")}
          title='Login'

        />
      </View>
      <View >
        <Text>
          AAAAAA
        </Text>
        <FlatList
          data={data}
          keyExtractor={({id})=>id}
          renderItem={({item})=>(
            <Text>
             {item.userId},{item.id},{item.title},{item.body}
              
            
            </Text>

          )}
          
        />
        


      </View>

    </View>
    


  );
    
    

};

const styles=StyleSheet.create({
  loginview:{
    alignItems:'center',
    margin:10,

  },
  title: {
    fontSize:20,
    alignItems:'center',
    padding:50,

  },
  mail:{
    fontSize:15,
    marginRight:145,
    

  },
  input:{
    

  },
  pass:{
    fontSize:15,
    marginRight:115,

  },
  input2:{

    marginLeft:55,

  }

})

export default App;
