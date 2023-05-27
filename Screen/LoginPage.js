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

export default function App({navigation}) {
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
        <TouchableOpacity style={style.buttonSign}>
          <Icon name="mail" size={20} color="white" />
          <Text style={style.signTxt}>Sign up with email</Text>
        </TouchableOpacity>
      </View>
      <View style={style.alreadyContainer}>
        <Text style={style.already}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={style.LogClick}>
          <Text style={style.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={style.privacy}>
        <Text style={style.privacyText}>
          By continuing, you agree to our{' '}
          <Text style={style.privacyLink}>Terms of service</Text> and
          <Text style={style.privacyLink}>{''} privacy policy</Text>
        </Text>
      </View>
    </View>
  );
}
const height = Dimensions.get('screen').height;
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
  LogClick: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  privacy: {
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  privacyText: {
    color: 'grey',
    fontSize: 17,
    textAlign: 'center',
  },
  privacyLink: {
    color: '#2A2D6E',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 2,
    marginLeft: 2,
    textDecorationLine: 'underline',
  },
  term: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 2,
    marginLeft: 2,
    textDecorationLine: 'underline',
  },
});
