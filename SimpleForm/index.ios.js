'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  SegmentedControlIOS
} from 'react-native';

import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomSegmentedControl} from 'react-native-custom-segmented-control'

var SimpleForm = React.createClass({
  render() {
   return(
    <View style={{flex: 1, marginTop:30}}>
      <View style={{flex: 1, backgroundColor: '#00B140'}} />
      <View style={{flex: 11 }}>
        <ProgressBar />
      </View>
    </View>


   )
  }
});

var ProgressBar = React.createClass({
  getInitialState() {
    return {
      values: ['Step 1', 'Step 2', 'Step 3'],
      selectedTab: 'Step 1',
      firtNameText: ' ',
      lastNameText: ' ',
      contactNoText: ' ',
      addressText: ' ',
      firstNameError: '',
      lastNameError: '',
      contactNoError: '',
      addressError: '',
      photoError: '',
    };
  },

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:0.8}}>
          <SegmentedControlIOS
            style={styles.segmentedControlIOS}
            values={this.state.values}
            selectedIndex={undefined}
            momentary={true}
            tintColor= '#00B140'

            onValueChange={(val) => {
              this.setState({
                selectedTab: val
              })
            }} />
        </View>
        <View style={{flex: 10.2, backgroundColor: '#F7F9FB'}}>

          {this.renderStepView()}
        </View>

      </View>
    );
  },

  renderStepView: function() {

    if (this.state.selectedTab === 'Step 1') {
      return (
        <View style={styles.container}>
          <View style={{flex: 4}}>
            <Text style={styles.text} >Upload Photo</Text>
            <Text style={styles.errorMsg} >{this.state.photoError}</Text>
            <View style={styles.photoPlaceholder}>
              <Icon name="plus-circle" size={32} color="#00B140" />
              <Text style={{color: "#00B140", fontSize: 14 }}t>Add photo</Text>
            </View>
            <Text style={styles.desc}>Please upload any photo here.</Text>
          </View>

          <View style={{flex: 1}}>
            <Button style={styles.button} textStyle={styles.buttonText} isDisabled={false} disabledStyle={styles.buttonDisable}
              onPress= {(event) => this.setState({selectedTab: 'Step 2'})} >
              NEXT
            </Button>
          </View>

        </View>
        )
    } else if (this.state.selectedTab === 'Step 2') {
      return (
        <View style={styles.container}>
          <View style={{flex: 4}}>

            <Text style={styles.text} >Your Contact Information</Text>
            <Text style={styles.desc} >Fill in the following details</Text>

            <TextInput
              style={styles.textInput}
              placeholder= "Your First Name"
              placeholderTextColor = '#A3A9B2'
              autoFocus= {true}
              onChangeText={(text) => this.setState({firtNameText: text})}
              onEndEditing={(event) => this.checkFirstName(event.nativeEvent.text)}

            />
            <Text style={styles.errorMsg} >{this.state.firstNameError}</Text>

            <TextInput
              style={styles.textInput}
              placeholder= "Your Last Name"
              placeholderTextColor = '#A3A9B2'
              onChangeText={(text) => this.setState({lastNameText: text})}
              onEndEditing={(event) => this.checkLastName(event.nativeEvent.text)}
            />
            <Text style={styles.errorMsg} >{this.state.lastNameError}</Text>

            <TextInput
              style={styles.textInput}
              placeholder= "Contact Number"
              placeholderTextColor = '#A3A9B2'
              keyboardType={'phone-pad'}
              onChangeText={(text) => this.setState({contactNoText: text})}
              onEndEditing={(event) => this.checkContactNo(event.nativeEvent.text)}
            />
            <Text style={styles.errorMsg} >{this.state.contactNoError}</Text>

            <TextInput
              style={[styles.textInput, styles.multiline]}
              placeholder= "Address"
              placeholderTextColor = '#A3A9B2'
              numberOfLines={5}
              multiline={true}
              onChangeText={(text) => this.setState({addressText: text})}
              onEndEditing={(event) => this.checkAddress(event.nativeEvent.text)}
            />
            <Text style={styles.errorMsg} >{this.state.addressError}</Text>
          </View>

          <View style={{flex: 1}}>
            <Button style={styles.button} textStyle={styles.buttonText} isDisabled={false} disabledStyle={styles.buttonDisable}
              onPress= {(event) => this.setState({selectedTab: 'Step 3'})} >
              NEXT
            </Button>
          </View>

        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.completeMsg} >Complete.</Text>
        </View>
        )
    }
  },

  checkFirstName(text) {
    if (this.state.firtNameText=== null || this.state.firtNameText=== '') {
      this.setState({firstNameError: 'This field cannot be empty'})
    } else {
      this.setState({firstNameError: ''})
    }
  },

  checkLastName(text) {
    if (this.state.lastNameText=== null || this.state.lastNameText=== '') {
      this.setState({lastNameError: 'This field cannot be empty'})
    } else {
      this.setState({lastNameError: ''})
    }
  },

  checkContactNo(text) {
    if (this.state.contactNoText=== null || this.state.contactNoText=== '') {
      this.setState({contactNoError: 'This field cannot be empty'})
    } else {
      this.setState({contactNoError: ''})
    }
  },

  checkAddress(text) {
    if (this.state.addressText=== null || this.state.addressText=== '') {
      this.setState({addressError: 'This field cannot be empty'})
    } else {
      this.setState({addressError: ''})
    }
  },

});

var styles = StyleSheet.create({
  segmentedControlIOS: {
    flex: 1,
    borderWidth:0,
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
  buttonDisable: {
    backgroundColor: '#ccd6dd',

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
exports.examples = [
  {
    title: 'Change events can be detected',
    render(): ReactElement { return <ProgressBar />; }
  }
];



AppRegistry.registerComponent('SimpleForm', () => SimpleForm);

module.exports = SimpleForm;
