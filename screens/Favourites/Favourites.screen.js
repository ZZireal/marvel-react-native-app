import React, { useEffect } from 'react';
import {
  Text, View, TouchableOpacity, ScrollView, Image, FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import inactiveHeart from '../../assets/inactive_heart.png';
import activeHeart from '../../assets/active_heart.png';
import { getFavouriteCharacters } from '../../resources/characters/characters.selectors';
import { fetchCharacters, setFavouriteCharacter } from '../../resources/characters/characters.actions';
import marvelLogo from '../../assets/marvel-logo.png';
import styles from './Favourites.styles';

function MyMarvelScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favouritesCharacters = useSelector(getFavouriteCharacters);

  return (
    <View style={styles.container}>
      <Image
          style={styles.marvelLogo}
          source={marvelLogo}
      />
      {!favouritesCharacters[0] && (<Text style={styles.title}>No favourite characters</Text>)}
      {favouritesCharacters[0
      ] && (
      <>
      <Text style={styles.title}>Favourite characters</Text>
      <FlatList
        data={favouritesCharacters}
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
              source={item.isFavourite ? activeHeart : false}
            />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={({ item }, key) => key.toString()}
        showsVerticalScrollIndicator={false}
        >
      </FlatList>
      </>
      )}
    </View>
  );
}

export default MyMarvelScreen;
