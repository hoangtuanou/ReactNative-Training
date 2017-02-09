import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  blockContent: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: 10
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  logo: {
    borderColor: 'blue',
    borderWidth: 1,
    width:40,
    height:40
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 20
  },
  facebook: {
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 10
  }
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  blockContent: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 20
  },
});
