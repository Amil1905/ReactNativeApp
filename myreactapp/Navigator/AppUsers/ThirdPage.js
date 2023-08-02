import React, {useEffect,useState} from 'react';
import * as pictures from './index';
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


} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
function ThirdPage (props) {
    const [postff, SetPostid]=useState([]);
    const items =props.route.params.item;
    const [countlike, setCount] = useState(0);
    const [countlikes, setCounts] = useState(0);
    const GetPostId= async() =>{
        try {
            const response= await fetch('https://jsonplaceholder.typicode.com/comments');
            const json = await response.json(); 
            SetPostid(json);
          }
          catch(error) {
            console.error(error);
          }
    }
    useEffect(()=> {
        GetPostId();
      }, []);
      function counter (k) {
        if(k==1) {
          setCount(countlike + 1);
        }
        else {
          setCounts(countlikes + 1);
        }
      }
      const [randomNumbers, setRandomNumbers] = useState({});
      const [randomNumberss, setRandomNumberss] = useState({});
      function randomgenerator(item) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumbers((prevState) => ({
          ...prevState,
          [item.id]: randomNumber,
        }));
      }
      function randomgenerators(item) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumberss((prevState) => ({
          ...prevState,
          [item.id]: randomNumber,
        }));
      }
    return(
        <View style={styles.anapage}>
            <View style={styles.imgview}>
                <Image style={styles.Img}
                    source={pictures[`picture${items.userId}`]}
                />
            </View>
            <View>
                <Text style= {styles.bodytext}>
                    {items.body}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() =>counter(1)}>
                          <Image style={styles.imgs}
                            source={pictures['picture26']}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>counter(0)}>
                          <Image style={styles.imgs}
                            source={pictures['picture27']}
                           />
                        </TouchableOpacity>
                      </View>
            <View style={styles.flatview}>
                <FlatList
                    data={postff.filter((item) => item.postId === items.id && item.body !== null)}
                    keyExtractor={({id}) => id}
                    ItemSeparatorComponent={ItemDivider}
                    renderItem={({item}) => 
                      {
                      return <View style={styles.newview}>
                        {
                          item.postId == items.id ? 
                          
                          <Text style={styles.userfff} numberOfLines={5} ellipsizeMode='tail'>
                                        {item.body != null ? item.body: null}
                                    </Text>
                             : null
                            }
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() =>randomgenerator(item)}>
                          <Image style={styles.imgs}
                            source={pictures['picture26']}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>randomgenerators(item)}>
                          <Image style={styles.imgs}
                            source={pictures['picture27']}
                           />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.textter}> {randomNumbers[item.id] || 0} </Text>
                      <Text style={styles.textters}> {randomNumberss[item.id] || 0}</Text>
                      </View>
                      }
                    }
                />   
            </View>
            <View style={styles.son}>
            <Text style={styles.likestyle}>
                             Likes: {countlike}
                           </Text>
                           <Text style={styles.sontext}>
                            Dislikes: {countlikes}
                           </Text>
            </View>
        </View>
    );
}
const styles =StyleSheet.create ({
    anapage: {
        backgroundColor:'#ffdab9',
        flex:2  
    },
    bodytext: {
      height:120,
      width: 350,
      color:'#FFFAFA',
      fontWeight:'bold',
      fontSize:15,
      margin:10,
      padding:7,
      backgroundColor:'#8B008B',
      borderRadius:5,
      borderWidth:3,
      borderColor:'white',
      alignItems:'center',
      marginLeft:10,
    },
    Img: {
      height:150,
      width:155,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "white",
      margin:8
    },
    imgview: {
        alignItems:'center',
        margin:10
    },
    flatview: {
      flex:1,
    },
    son: {
      color:'#808000',
      flex:0.5,
      backgroundColor:'#ffdab9',
      borderRadius:5,
      borderWidth:3,
      borderColor:'white',
      alignItems:'center',
      justifyContent:'center',
      height:50,
      width: 420,
    },
    imgs: {
      height:50,
      width: 50,
      marginLeft:100,
      alignItems:'center',
      justifyContent:'center',
    },
    imgss: {
      height:50,
      width: 50,
      marginLeft:365,
      alignItems:'center',
      justifyContent:'center'
    },
    userfff: {
      height:120,
      width: 350,
      color:'#FFFAFA',
      fontWeight:'bold',
      fontSize:15,
      margin:15,
      padding:15,
      backgroundColor:'#7B68EE',
      borderRadius:5,
      borderWidth:3,
      borderColor:'white',
      alignItems:'center',
      justifyContent:'center',
      flex:1
    },
    textter: {
      marginLeft:110,
    },
    textters: {
      marginLeft:265,
      marginTop:-20
    },
    likestyle: {
      color:'black',
      fontWeight:'bold',
      height:30,
      width: 110,
      padding:5,
      backgroundColor:'#ADFF2F',
      borderRadius:10,
      borderWidth:3,
      borderColor:'white',
      alignItems:'center',
      justifyContent:'center',
    },
    sontext: {
      color:'white',
      height:30,
      width: 110,
      padding:5,
      backgroundColor:'red',
      borderRadius:10,
      borderWidth:3,
      borderColor:'white',
      alignItems:'center',
      justifyContent:'center',
      
    },
});
const ItemDivider = () => {
  return (
    <View
      style={{
        height: 5,
        width: "100%",
        backgroundColor: "#E0FFFF",
      }}
    />
  );
}
export default ThirdPage;