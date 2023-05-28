import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
export default function Splash({navigation}) {
  setTimeout(() => {
    navigation.navigate('SignInPage');
  }, 800);
  return (
    <View style={style.container}>
      <Image style={style.img} source={require('../Images/twitter.png')} />
      <View>
        <Text style={style.txt}>Rachana{'\n'}Ranade</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
  },
  img: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
});
