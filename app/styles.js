import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundTheme: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFA500',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    borderStyle: 'solid',
  },

  infoText: {
    color: 'white',
    fontFamily: 'Ubuntu',
    width: '60%',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 30,
  },

  headerText: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: 32
  }
});