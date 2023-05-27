import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
export default function LoginScreen({navigation}) {
  const [eye, setEye] = useState(true);
  return (
    <View style={style.container}>
      <LinearGradient style={style.gradient} colors={['#2A2D6E', 'black']}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.back}>
          <Icon name="arrowleft" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={style.imgCont}>
          <Image style={style.img} source={require('../Images/twitter.png')} />
        </View>
        <Text style={style.create}>Create an account</Text>
        <View style={style.name}>
          <TextInput
            style={style.inputName}
            selectionColor={'black'}
            placeholder="Name"
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={style.name}>
          <TextInput
            style={style.inputName}
            selectionColor={'black'}
            placeholder="Email address"
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={style.name}>
          <TextInput
            style={style.inputName}
            selectionColor={'black'}
            placeholder="Password"
            placeholderTextColor={'grey'}
            secureTextEntry={eye}
          />
          <TouchableOpacity onPress={() => setEye(!eye)} style={style.eye}>
            <Icons name={eye ? 'eye-off' : 'eye'} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.get}>
          <Text style={style.getTxt}>Get started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  back: {
    marginLeft: 30,
    marginTop: 5,
  },
  imgCont: {
    padding: 10,
    backgroundColor: '#fff',
    height: 120,
    width: 120,
    marginTop: '5%',
    marginLeft: 40,
    borderRadius: 10,
  },
  img: {
    width: 100,
    height: 100,
  },
  create: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    marginTop: '10%',
    marginLeft: 40,
  },
  name: {
    borderWidth: 1,
    marginLeft: 40,
    backgroundColor: '#fff',
    marginRight: 40,
    borderRadius: 10,
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },

  inputName: {
    color: 'black',
    fontSize: 15,
  },
  get: {
    padding: 20,
    backgroundColor: 'crimson',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '40%',
  },
  getTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  eye: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});
