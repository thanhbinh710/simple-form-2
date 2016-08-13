'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TabLayoutAndroid, TabAndroid} from "react-native-android-kit";


class SimpleForm extends Component {
  render() {
   return(
    <View style={{flex: 1, marginTop:30}}>
      <View style={{flex: 1, backgroundColor: '#00B140'}} />
      <View style={{flex: 11 }}>
        <SimpleSegmentedControl />
      </View>
    </View>
   )
  }
}

var SimpleSegmentedControl = React.createClass({

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F7F9FB'}}>
        <TabLayoutAndroid style={styles.tabLayoutAndroid} backgroundColor='white' indicatorTabColor='white'
                                indicatorTabHeight={2} scrollable={false} center={false}>
          <TabAndroid text='Step 1' textSize={16} textColor="#9B9B9B" selectedTextColor='#363A45'>
            <View style={styles.container}>
              <View style={{flex: 4}}>
                <Text style={styles.text} >Upload Photo</Text>
                <Text style={styles.errorMsg} >You need to upload a photo</Text>
                <View style={styles.photoPlaceholder}>
                  <Icon name="plus-circle" size={32} color="#00B140" />
                  <Text style={{color: "#00B140", fontSize: 14 }}t>Add photo</Text>
                </View>
                <Text style={styles.desc}>Please upload any photo here.</Text>
              </View>

              <View style={{flex: 1}}>
                <Button style={styles.button} textStyle={styles.buttonText}>
                  NEXT
                </Button>
              </View>

            </View>
          </TabAndroid>

          <TabAndroid text='Step 2' textSize={16} textColor='#9B9B9B' selectedTextColor='#363A45'>
            <View style={styles.container}>
              <View style={{flex: 4}}>

                <Text style={styles.text} >Your Contact Information</Text>
                <Text style={styles.desc} >Fill in the following details</Text>

                <TextInput
                  style={styles.textInput}
                  placeholder= "Your First Name"
                  placeholderTextColor = '#A3A9B2'
                  onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.errorMsg} >This ﬁeld cannot be empty</Text>

                <TextInput
                  style={styles.textInput}
                  placeholder= "Your Last Name"
                  placeholderTextColor = '#A3A9B2'
                  onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.errorMsg} >This ﬁeld cannot be empty</Text>

                <TextInput
                  style={styles.textInput}
                  placeholder= "Contact Number"
                  placeholderTextColor = '#A3A9B2'
                  keyboardType={'phone-pad'}
                  onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.errorMsg} >This ﬁeld cannot be empty</Text>

                <TextInput
                  style={[styles.textInput, styles.multiline]}
                  placeholder= "Address"
                  placeholderTextColor = '#A3A9B2'
                  numberOfLines={5}
                  multiline={true}

                  onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.errorMsg} >This ﬁeld cannot be empty</Text>


              </View>

              <View style={{flex: 1}}>
                <Button style={styles.button} textStyle={{color: '#FFFFFF',fontSize: 14, fontWeight: '700'}}>
                  NEXT
                </Button>
              </View>

            </View>
          </TabAndroid>

          <TabAndroid text='Step 3' textSize={16} textColor='#9B9B9B' selectedTextColor='#363A45'>
            <View style={styles.container}>
              <Text style={styles.completeMsg} >Complete.</Text>
            </View>
          </TabAndroid>

        </TabLayoutAndroid>
      </View>

    );
  }
});

var styles = StyleSheet.create({
  tabLayoutAndroid: {

  },
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#363A45',
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  errorMsg: {
    color: '#D64425',
    fontSize: 13,
    margin: 10,
    marginTop: 0,
    fontWeight: '500',
  },
  desc: {
    color: '#565D6B',
    fontSize: 14,
    margin: 10,
    fontWeight: '500',
  },
  photoPlaceholder: {
    borderColor: '#CCD6DD',
    borderWidth: 1,
    height: 152,
    backgroundColor: '#eaeff2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00B140',
    borderWidth: 0,

    alignItems: 'stretch',
    height: 50,
    borderRadius: 3,

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  textInput: {
    height: 42,
    borderColor: '#CCD6DD',
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: '#eaeff2',
    color: '#333',
    fontSize: 16,
    paddingLeft: 10,
  },
  multiline: {
    height: 87,
  },
  completeMsg: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


exports.title = '<SimpleForm>';
exports.displayName = 'SimpleForm';


AppRegistry.registerComponent('SimpleForm', () => SimpleForm);

module.exports = SimpleForm;
