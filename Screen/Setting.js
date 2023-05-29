import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
export default function Setting({navigation}) {
  return (
    <View>
      <View style={style.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Icon
            style={{marginLeft: 13}}
            name="arrowleft"
            color="#fff"
            size={30}
          />
        </TouchableOpacity>
        <Ionicon
          style={{marginLeft: 17}}
          name="ios-settings-outline"
          size={30}
          color="#fff"
        />
        <Text style={style.settingText}>Settings</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <View style={style.setting}>
          <Entypo name="block" size={25} color="black" />
          <Text style={style.settingTxt}>Blocked accounts</Text>
          <Ionicon
            style={style.right}
            name="chevron-forward"
            size={30}
            color="grey"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <View style={style.setting}>
          <Entypo name="info-with-circle" size={25} color="black" />
          <Text style={style.settingTxt}>Terms of use</Text>
          <Ionicon
            style={style.right}
            name="chevron-forward"
            size={30}
            color="grey"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <View style={style.setting}>
          <Entypo name="info-with-circle" size={25} color="black" />
          <Text style={style.settingTxt}>Privacy Pollicy</Text>
          <Ionicon
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
  header: {
    backgroundColor: '#2A2D6E',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 25,
    color: '#fff',
    marginLeft: 10,
  },
  setting: {
    height: 100,
    marginLeft: 30,
    marginRight: 20,
    borderBottomWidth: 0.5,
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