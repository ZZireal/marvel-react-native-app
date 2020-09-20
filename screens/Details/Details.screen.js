import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import marvelLogo from '../../assets/marvel-logo.png';
import styles from './Details.styles';
import { fetchComics } from '../../resources/characters/characters.actions';
import { getCharacter } from '../../resources/characters/characters.selectors';

function DetailsScreen() {
  const dispatch = useDispatch();
  const { params } = useRoute();
  const { item } = params;

  const characterData = useSelector((store) => getCharacter(store, item.id));

  useEffect(() => {
    dispatch(fetchComics(item.id));
  }, []);

  return (
    <View style={styles.container}>
       <Image
          style={styles.marvelLogo}
          source={marvelLogo}
        />
      <View style={styles.hero}>
        <Image
          style={styles.photo}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <View>
          <Text style={styles.heroName}>{item.name.split(' (')[0]}</Text>
          <Text style={styles.personName}>{ item.name.split(' (')[1] && item.name.split(' (')[1].slice(0, -1)}</Text>
        </View>
      </View>
      <Text style={styles.comics}>COMICS</Text>
      <ScrollView
       showsVerticalScrollIndicator={false}>
        {characterData.comicsArray
        && <View>
        {characterData.comicsArray.map(({ id, thumbnail, title }) => (
          <View style={styles.comicsContent} key={id}>
            <View style={styles.comicsInfoWrapper}>
              <View style={styles.comicsInfo}>
                <View>
                  <Image
                    style={styles.comicsImg}
                    source={{
                      uri: `${thumbnail.path}.${thumbnail.extension}`,
                    }}
                  />
                </View>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
          </View>
        ))}
        </View>}
      </ScrollView>
    </View>
  );
}

export default DetailsScreen;
