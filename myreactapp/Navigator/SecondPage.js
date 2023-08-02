import React from 'react'
import { View,Text,FlatList,StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useState,useEffect } from "react";
import { useRoute } from '@react-navigation/native';
import * as pictures from './AppUsers';
function SecondPage (props) {
    const datak=props.route.params.item
        function navigation2 (item) {
            props.navigation.navigate('ThirdPage',{item: item});            
        }
    return (
        <View style={sytles.container}>
            <View >
                <FlatList
                    data={datak}
                    keyExtractor={datak=>datak.id}
                    ItemSeparatorComponent={ItemDivider}
                    renderItem={({ item }) =>                    
                    {
                        return <View style={sytles.SecondView}> 
                            <Image style={sytles.img}
                                    source={pictures[`picture${item.userId}`]}
                                />
                                <View style={sytles.textsview}>
                                    <Text style={sytles.texttitle} numberOfLines={1}>
                                        {item.title.length <40 ? `${item.title}`:`${item.title.substring(0, 38)}`+'...'}
                                    </Text>
                                    <Text style={sytles.userf} numberOfLines={2} ellipsizeMode='tail'>
                                        {item.body.length<50 ?`${item.body}`:`${item.body.substring(0, 65)}`+'...' }
                                    </Text>
                                </View>
                                <View style={sytles.arrowview}>
                                    <TouchableOpacity onPress={() => navigation2(item)}>
                                        <Image style= {sytles.arrowimg}
                                            source={pictures['picture13']}
                                        />
                                    </TouchableOpacity>                                 
                                </View>
                        </View>
                        }
                }
                />      
            </View>
        </View>
    );
}
const sytles =StyleSheet.create({
    container: {
        backgroundColor:'#ffdab9',       
    },
    arrowview:
    {
        marginRight:5,
        justifyContent:'center',
    },
    texttitle:{
        fontSize:15,
        fontWeight:'bold',
        color:'#000080',
    },
    userf: {
        color:'#4682b4'
    },
    img:{
        height:55,
        width:55,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
        margin:8     
    },
    SecondView: {
        flexDirection:'row',
    }, arrowimg:{
        height:25,
        width: 25,
        marginRight:20,
        alignItems:'center',
        justifyContent:'center'     
    },
    textsview:{
        flex:1
    }
});
const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "grey",
        }}
      />
    );
  }
export default SecondPage;
