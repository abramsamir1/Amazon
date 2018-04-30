import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import { Container, Body, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItems from '../components/RecommendedCardItems';

class HomeSceen extends Component {
  render() {
    return (

      <Container>
        <Header style={[{
          backgroundColor:'#3a455c',
          height: 60,
          borderBottomColor: '#757575' },
          styles.androidHeader]}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Left style={{flexDirection: 'row'}}>
                  <Icon onPress={()=>this.props.navigation.navigate('DrawerOpen')} name="md-menu" style={{ color: 'white', marginRight: 10 }} />
                  <FAIcon name="amazon" style={{ fontSize: 32, color: 'white'}} />
              </Left>
              <Right>
                <Icon name="md-cart" style={{
                  color:'white'}} />
              </Right>
          </View>
        </Header>

        <View style={{ position: 'absolute', left: 0, right: 0, top: 60, height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
            <TouchableOpacity>
                <View style={{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>
                      <Text style={{fontSize:12}}>Shop by</Text>
                      <Text style={{fontWeight: 'bold'}}>Category</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flex:1 , height: '100%', marginLeft: 5, justifyContent: 'center' }}>
                <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                    <Icon name="search" style={{
                      fontSize:20,paddingTop:5
                    }}
                    />

                    <Input placeholder="Search" />
                </Item>
            </View>
        </View>

        <Content style={{backgroundColor: '#d5d5d6', marginTop: 70 }}>
            <View style={{height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>Hello, Abram Samir</Text>
                <View style={{flexDirection: 'row' }}>
                    <Text>Your account </Text>
                    <Icon name="arrow-forward" style={{
                      fontSize: 18
                    }}/>

                </View>
            </View>

            <Swiper autoplay style={{ height: 100 }}>
                <View style={{flex:1}}>
                    <Image
                    style={{
                    flex:1,
                    height: null,
                    width: null
                    }}
                    source={require('../assets/swiper3.jpg')} />
                </View>

                <View style={{flex:1}}>
                    <Image
                    style={{
                    flex:1,
                    height: null,
                    width: null
                    }}
                    source={require('../assets/swiper2.jpg')} />
                </View>

                <View style={{flex:1}}>
                    <Image
                    style={{
                    flex:1,
                    height: null,
                    width: null,
                    }}
                    source={require('../assets/swiper1.jpg')} />
                </View>
            </Swiper>

            <Card>
              <CardItem header style={{borderBottomWidth:1, borderBottomColor: '#dee0e2'}}>
                <Text>Your Recommendations </Text>
              </CardItem>


            <RecommendedCardItems
            itemName="Active Bag-G7200"
            itemCreator="Active"
            itemPrice="79.9$"
            savings="17"
            imageUri={require('../assets/recommend3.jpg')}
            rating={5}
            />

            <RecommendedCardItems
            itemName="Casio watch-X"
            itemCreator="Casio"
            itemPrice="350$"
            savings="70"
            imageUri={require('../assets/recommend2.jpg')}
            rating={5}
            />

            <RecommendedCardItems
            itemName="E-zero"
            itemCreator="Addidas"
            itemPrice="120$"
            savings="25"
            imageUri={require('../assets/recommend1.jpg')}
            rating={5}
            />

            </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  androidHeader:{
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});

export default HomeSceen;
