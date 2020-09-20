import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  marvelLogo: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 105,
    height: 40,
    marginTop: 21,
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    height: '100%',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 21,
  },
  hero: {
    display: 'flex',
    flexDirection: 'row',
  },
  photo: {
    margin: 6,
    width: 70,
    height: 80,
  },
  heroName: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 12,
    marginLeft: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
  personName: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 12,
    marginLeft: 20,
    color: '#BBBBBB',
  },
  comics: {
    marginTop: 20,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
  comicsContent: {
    backgroundColor: '#2F2F2F',
    marginBottom: 22,
    padding: 6,
    borderRadius: 4,
  },
  comicsInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comicsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comicsImg: {
    width: 52,
    height: 80,
  },
  title: {
    color: '#fff',
    marginLeft: 12,
    width: '80%',
  },
});
