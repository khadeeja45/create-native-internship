import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput,StatusBar, Image ,StylesSheet,ScrollView} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {  
  render() {
    return (
      
		<View style={{backgroundColor: 'white', height: 640, width:400,flex:1}}>
		<ScrollView>

	
       <Text style = {{color :'white', backgroundColor: 'blue', textAlign: 'center', marginTop: 40, width:200}}>Admission Form CIC Hub</Text>
   
  
        <TextInput
      placeholder='Enter Name'
      style={{width:200,height:70,bordercolor:'blue',textweight:'bold',flex:1}}
      />
       <TextInput
      placeholder='Email-address'
      style={{width:200,height:70,bordercolor:'blue',textweight:'bOLD'}}
      />
         <TextInput
      placeholder='contact number'
      style={{width:200,height:70,bordercolor:'blue',textweight:'bold'}}
      />
       <TextInput
      placeholder='Department'
      style={{width:200,height:70,bordercolor:'blue',textweight:'bold',paddingleft:100}}
      />
        <TextInput
      placeholder='In  '
      style={{width:200,height:70,bordercolor:'blue',textweight:'bold'}}
      />
      <TouchableOpacity
      style={{backgroundColor:'green',height:50,width:200, marginTop:200,}}
      ><Text style = {{color :'white', textAlign:'center',  marginTop:10}}>Submit</Text></TouchableOpacity>	
    
      </ScrollView>
      </View>
    );
     
}
}
