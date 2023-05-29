import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Account({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.cont}>
        <View style={style.contn3}>
          <Icon name="account" size={35} color="#fff" />
          <Text style={style.profileTtx}>Profile</Text>
        </View>
        <View style={style.container4}>
          <Text style={style.boxTtx}>NA</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <View style={style.setting}>
          <Ionicons name="ios-settings-outline" size={30} color="black" />
          <Text style={style.settingTxt}>Settings</Text>
          <Ionicons
            style={style.right}
            name="chevron-forward"
            size={30}
            color="grey"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignInPage')}>
        <View style={style.setting}>
          <Icon name="login" size={30} color="black" />
          <Text style={style.settingTxt}>Login</Text>
          <Ionicons
            style={style.right}
            name="chevron-forward"
            size={30}
            color="grey"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont: {
    height: '35%',
    backgroundColor: '#2A2D6E',
  },
  contn3: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTtx: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 10,
  },
  container4: {
    width: 120,
    height: 140,
    backgroundColor: '#82C4E4',
    marginTop: 'auto',
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTtx: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  setting: {
    height: 100,
    marginLeft: 30,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTxt: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
  },
  right: {
    marginLeft: 'auto',
  },
});
