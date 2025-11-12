import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallContainer:{ 
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },
  btn:{
    backgroundColor:"#4146cc",
    borderRadius:10,
    padding:10,
    margin:10
  },
  text:{
    fontSize: 16,
    fontWeight: 300
  },
  pic:{
    width:200,
    height:200,
    borderRadius:50
  },
  imput:{
    width:300,
    backgroundColor:"gray",
    margin:5
  }
});