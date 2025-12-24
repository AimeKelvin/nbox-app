import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors } from '@/constants/theme'

const Register = () => {
  return (
    <ScreenWrapper>
      <Typo color={colors.white}>Register</Typo>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({})