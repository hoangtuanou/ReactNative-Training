import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394264'
  },
  blockContent: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FFFFFF',
    marginBottom: 10
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 40,
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: '#50597b',
    borderWidth: 0.5
  },
  logo: {
    marginHorizontal: 10
  },
  input: {
    flex:3,
    color: '#FFFFFF'
  },
  btn: {
    backgroundColor: '#e64c65',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 20
  },
  facebook: {
    flexDirection: 'row',
    backgroundColor: '#3468af',
    alignItems: 'center',
    justifyContent: 'center',
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
