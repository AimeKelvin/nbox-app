import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Animated, { FadeIn } from 'react-native-reanimated'
import Button from '@/components/Button'

const WelcomeScreen = () => {
  return (
    <ScreenWrapper showPattern={true}>
     <View style={styles.container}>
      <View style={{alignItems: "center"}}>
         <Typo color={colors.white} size={43} fontWeight={'900'}>
          NBox
         </Typo>
      </View>

      <Animated.Image 
      entering={FadeIn.duration(1000)}
      source={require('@/assets/images/welcome.png')} 
      style={styles.welcomeImage} 
      resizeMode='contain'
      />
      <Typo color={colors.white} size={18}>
        Stay Connected with Your Loved Ones Anytime, Anywhere.
      </Typo>
<Button loading={false}>
      <Typo color={colors.white} size={20} fontWeight={'bold'}>
        Get Started
      </Typo>
</Button>

      </View>
    </ScreenWrapper>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10,
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
  welcomeImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: "center",
  },
});