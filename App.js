import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (

      <AppDrawerNavigator />

    );
  }
}
const CustomDrawerContentComponent = (props) => {
  return(
    <Container>
        <Header style={[{ backgroundColor: '#3a455c', height: 90 }, styles.androidHeader]}>
            <Left style={{flex:1, flexDirection:'row', alignItems: 'center' }}>
                <Icon name="person" style={{ color: 'white' }} />
                <Text style={{marginLeft:5, fontSize: 22, color:'white', marginRight:15 }}>Hello, Abram</Text>

            </Left>
        </Header>
            <Content>
                <FlatList
                style={{borderTopWidth:0.5, borderTopColor: '#f0f0f0'}}
                data={[
                  'Home', 'Shop by Category', "Today's deals", 'Recommendations', 'Find your way', 'Rate us'
                ]}
                renderItem={({item}) => (
                  <ListItem>
                      <Text>{item}</Text>
                  </ListItem>
                )}
                />
            </Content>
    </Container>
  )
}

const AppDrawerNavigator = new DrawerNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
drawerPosition:'left',
contentComponent:CustomDrawerContentComponent,
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, androidHeader:{
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
