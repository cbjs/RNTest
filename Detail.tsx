/**
 * Sample React Native Detail
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { RootStackParamList } from './Navigator';

type Props = StackScreenProps<RootStackParamList, 'detail'>;
function Detail({ route, navigation }: Props) {
  const {id, title, content} = route.params;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View>
        <Text>id: {id}</Text>
        <Text>title: {title}</Text>
        <Text>content: {content}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Detail;
