/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StackScreenProps } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { RootStackParamList } from './Navigator';

const researchTitles = [
  "AI",
  "Machine Learning",
  "Data Science",
  "Metaverse",
  "Crypto",
  "Tech"
];
const getRandomResearchTitle = () => {
  return researchTitles[Math.floor(Math.random() * researchTitles.length)];
};

const generateData = (size: number) => {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push({ id: i, title: getRandomResearchTitle(), content: getRandomResearchTitle() })
  }
  return data;
}

type Props = StackScreenProps<RootStackParamList, 'home'>;
function Home({ route, navigation }: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const data = useMemo(() => generateData(50), []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={data}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ index, item: { id, title, content } }) =>
          <TouchableWithoutFeedback onPress={() => { navigation.navigate('detail', {id, title, content}) }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              borderBottomWidth: 0.5, padding: 10
            }}>
              <Text>{id}</Text>
              <Text>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
        }
      />
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

export default Home;
