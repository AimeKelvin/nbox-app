
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Animated, {FadeInDown} from 'react-native-reanimated'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/(auth)/welcome')
    }, 1500)
  }, [])
  return (
    <View style={styles.container}>
     <StatusBar barStyle={'light-content'} backgroundColor={colors.neutral900} />
     <Animated.Image
        source={require('../assets/images/splashImage.png')}
        entering={FadeInDown.duration(1000).springify()}
        style={{ width: 150, height: 150 }}
        resizeMode={'contain'}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.neutral900
  }
})