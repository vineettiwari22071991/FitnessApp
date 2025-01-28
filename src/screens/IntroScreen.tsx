import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from 'expo-status-bar';
import LinearGradient from "react-native-linear-gradient";
import Animated , {FadeIn, FadeInDown, FadeOut} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from "../navigation/RootStackParamList";

export const IntroScreen: React.FC = () => {


  const naviagtion = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const onGetStartedButtonClick  = () => {
    naviagtion.navigate("HomeScreen")
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../../assets/welcome.png')}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{
          width: wp(100),
          height: hp(70),
          justifyContent: 'flex-end',
          padding: 12,
          marginVertical: 8,
          elevation: 80

        }
        }
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} style={{
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row'
        }}>
          <Text style={styles.welcomeText}>Best</Text>
          <Text style={{
            ...styles.welcomeText,
            color: '#F50057',
            textTransform: 'uppercase'
          }}> Workouts</Text>
        </Animated.View>
        <Text style={styles.welcomeText}>For You</Text>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
           style={styles.bottomButton}
           onPress={()=> onGetStartedButtonClick()}
          >
            <Text style={styles.bottomButtonTextColor}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  welcomeText: {
    color: 'white',
    fontSize: hp(5),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomButton:{
    backgroundColor:'#F50057',
    padding:12,
    borderRadius:20,
    marginVertical:hp(4),
    marginHorizontal: wp(4),
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'gray'
   },
   bottomButtonTextColor:{
    fontSize: hp(3),
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
  }
})