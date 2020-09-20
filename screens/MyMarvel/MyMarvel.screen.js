import React, { useEffect } from 'react';
import {
  Text, Image, View, TouchableOpacity, ScrollView, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import inactiveHeart from '../../assets/inactive_heart.png';
import activeHeart from '../../assets/active_heart.png';
import { getCharacters } from '../../resources/characters/characters.selectors';
import { fetchCharacters, setFavouriteCharacter } from '../../resources/characters/characters.actions';

import styles from './MyMarvel.styles';
import marvelLogo from '../../assets/marvel-logo.png';

// const heroes = [
//   { key: 'a', name: 'Hero 1 (Some name)' },
//   { key: 'b', name: 'Hero 2 (Some name)' },
//   { key: 'c', name: 'Hero 3' },
//   { key: 'd', name: 'Hero 4' },
//   { key: 'e', name: 'Hero 5 (Some name)' },
//   { key: 'f', name: 'Hero 6 (Some name)' },
//   { key: 'j', name: 'Hero 7 (Some name)' },
//   { key: 'k', name: 'Hero 8' },
//   { key: 'k', name: 'Hero 9 (Some name)' },
//   { key: 'k', name: 'Hero 10 (Some name)' },
//   { key: 'k', name: 'Hero 11 (Some name)' },
//   { key: 'k', name: 'Hero 12' },
//   { key: 'k', name: 'Hero 13 (Some name)' },
//   { key: 'k', name: 'Hero 14' },
//   { key: 'k', name: 'Hero 15 (Some name)' },
//   { key: 'k', name: 'Hero 16 (Some name)' },
//   { key: 'k', name: 'Hero 17 (Some name)' },
//   { key: 'k', name: 'Hero 18' },
// ];

function MyMarvelScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const charactersData = useSelector(getCharacters);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <View style={styles.container}>
        <Image
          style={styles.marvelLogo}
          source={marvelLogo}
        />
        <Text style={styles.title}>Featured characters</Text>
        <FlatList
        data={charactersData}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.character}
            onPress={() => navigation.navigate('Details', { item })}
            >
            <View style={styles.characterWrapper}>
              <Image
                style={styles.photo}
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <View style={styles.name}>
                <Text style={styles.heroName}>{item.name.split(' (')[0]}</Text>
                <Text style={styles.personName}>{ item.name.split(' (')[1] && item.name.split(' (')[1].slice(0, -1)}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.heart}
              onPress={() => dispatch(setFavouriteCharacter(item.id))}
              >
            <Image
              style={styles.heartSize}
              source={item.isFavourite ? activeHeart : inactiveHeart}
            />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={({ item }, key) => key.toString()}
        showsVerticalScrollIndicator={false}
        >
      </FlatList>
    </View>
  );
}

export default MyMarvelScreen;
