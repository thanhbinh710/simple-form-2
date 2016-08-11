'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  SegmentedControlIOS
} from 'react-native';

import Button from 'apsl-react-native-button';

var SimpleForm = React.createClass({
  render() {
   return(
    <View style={{flex: 1, marginTop:30}}>
      <View style={{flex: 1, backgroundColor: '#00B140'}} />
      <View style={{flex: 10 }}>
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
      selectedIndex: 0,
      text: '',
    };
  },

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.8, backgroundColor: '#fff'}}>
          <SegmentedControlIOS
            style={{flex: 1 }}
            values={this.state.values}
            selectedIndex={0}

            onValueChange={(val) => {
              this.setState({
                selectedTab: val
              })
            }} />
        </View>

        <View style={{flex: 9.2, backgroundColor: '#F7F9FB'}}>
          {this.renderStepView()}
        </View>

      </View>
    );
  },

  renderStepView: function() {

    if (this.state.selectedTab === 'Step 1') {
      return (
        <View style={{flex: 1}}>

          <Text>Upload Photo</Text>
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
          <Text>Please upload any photo here.</Text>
          <Button style={{backgroundColor: '#00B140'}}>
            NEXT
          </Button>
        </View>
        )
    } else if (this.state.selectedTab === 'Step 2') {
      return (
        <View style={{flex: 1}}>

          <Text>Your Contact Information</Text>
          <Text>Fill in the following details</Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Your First Name"
            onChangeText={(text) => this.setState({text})}
          />

          <Button style={{backgroundColor: '#00B140'}}>
            NEXT
          </Button>

        </View>
        )
    } else {
      return (
        <View style={{flex: 1}}>
          <Text>Complete.</Text>
        </View>
        )
    }
  },

});

var styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FB',
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
