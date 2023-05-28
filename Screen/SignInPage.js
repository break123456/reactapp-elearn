import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function SignInPage({navigation}) {
  return (
    <View style={style.container}>
      <LinearGradient style={style.gradient} colors={['#2A2D6E', 'black']}>
        <View style={style.imgCon}>
          <View style={style.imgContainer}>
            <Image
              style={style.img}
              source={require('../Images/twitter.png')}
            />
          </View>
          <Text style={style.Ca}>CA Rachana Ranade</Text>
        </View>
      </LinearGradient>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignInScreen')}
          style={style.buttonSign}>
          <Icon name="mail" size={20} color="white" />
          <Text style={style.signTxt}>Login with email</Text>
        </TouchableOpacity>
      </View>
      <View style={style.alreadyContainer}>
        <Text style={style.already}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginPage')}
          style={style.LogClick}>
          <Text style={style.login}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: '70%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imgCon: {
    top: '50%',
    left: '15%',
  },
  imgContainer: {
    padding: 10,
    backgroundColor: '#fff',
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  img: {
    height: 130,
    width: 130,
  },
  Ca: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: '600',
    color: '#fff',
  },
  buttonSign: {
    padding: 20,
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 10,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signTxt: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  alreadyContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  already: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
  },
  login: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
  },
  
});
