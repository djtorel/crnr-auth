// Import libraries for making a component
import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{ props.headerText }</Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    position: 'relative',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: 60,
    paddingTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to other parts of app
export { Header };
