import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, Dimensions, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import SignUp from './SignUp';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = (state) =>
    <View style={[ styles.container, { backgroundColor: '#ff4081', color: 'black' } ]} />;
   //  state.product.map((x, i) => {
   //     console.log(x)
   //   //   x.map((xx, ii) => {
   //   //   <Text>{xx}</Text>
   //   // })
   // });
      // <Text>jhgvjhbkjbkj</Text>
    // </View>;
const SecondRoute = (state) => {
  return (
    <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} >
      <Text>bjhbsdwdbkjsbfk</Text>
    </View>
  );
}
const ThirdRoute = (state) => {
  return (
    <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} >
      <Text>bjhbsdwdbkjsbfk</Text>
    </View>
  );
}

// const SecondRoute = (state) => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
// const ThirdRoute = (state) => <View style={[ styles.container, { backgroundColor: '#673ad9' } ]} />;

export default class Dashboard extends Component {
  state = {
    index: 0,
    activeTab: { color: 'white', padding: 20, borderBottomWidth: 3, borderBottomColor: 'yellow', backgroundColor: '#0366d6' },
    inActiveTab: { color: 'whitesmoke',  padding: 20, backgroundColor: '#0366d6' },
    // activeView: { borderBottomWidth: 5, borderBottomColor: 'blue' },
    // inActiveView: {},
    tabSelected: 0,
    routes: [
      { key: 'first', title: 'AC Services' },
      { key: 'second', title: 'RO Services' },
      { key: 'third', title: 'Other Services' },
    ],
    product: [['Split', 'Window', 'Central', 'Ductless','Portable','Hybrid'],
     ['Alkaline', 'UV', 'UF' ], ['No results found'] ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = (state) => {
    SceneMap({
      first: FirstRoute(state),
      second: SecondRoute(state),
      third: ThirdRoute(state)
    })
  }

  render() {
    const { activeTab, inActiveTab, tabSelected, product } = this.state
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight onPress={() => { this.setState({ tabSelected: 0 }) }} underlayColor="white" >
            <View>
              <Text style={(tabSelected === 0) ? activeTab : inActiveTab}>AC Service</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { this.setState({ tabSelected: 1 }) }} underlayColor="white">
            <View>
              <Text style={(tabSelected === 1) ? activeTab : inActiveTab}>Water Purifier</Text>
            </View>
            </TouchableHighlight>
          <TouchableHighlight onPress={() => { this.setState({ tabSelected: 2 }) }} underlayColor="white">
            <View>
              <Text style={(tabSelected === 2) ? activeTab : inActiveTab}>Other Service</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{flex: 5, flexDirection: 'column'}}>
             {product[tabSelected].map((x, i) => {
              return (<View key={i}>
                <Text style={{ padding: 10, borderBottomWidth: 1, borderColor: 'lightgrey', fontSize: 20, fontWeight: '400', textShadowColor: 'white' }}>{x}</Text>
              </View>
            )
          })}
        </View>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  });
