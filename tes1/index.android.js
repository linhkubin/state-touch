/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';



class tes1 extends Component {

      constructor(props){ // chay trc render

        super(props);
        this.state={
          number:100,
        }
      }


      componentWillMount(){
      // man hinh trc render
      }
      clickMe(){
          this.setState({
            number: this.state.number+1,
          });
      }

      render() {
        return (


         <View>
            <Text style= {{fontSize :100}} >{this.state.number}</Text>
            <TouchableOpacity onPress = {()=>{this.clickMe()}}>
            <View style={styles.textClient}> 

            </View>
            </TouchableOpacity>
           
         </View>

        );
      }



        componentDidMount(){
        // sau render
        }


};
 

  const styles = StyleSheet.create({
    textClient:{
      
      backgroundColor : 'red',
      width : 100,
      height : 50,
     
    }
  });





AppRegistry.registerComponent('tes1', () => tes1);
