import React, { Component } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import DetailCard from '../Components/DetailCard'
import {Avatar} from 'react-native-elements'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const marginText = Dimensions.get('window').width;
const marginTitle = Dimensions.get('window').width /10;
const marginCard = Dimensions.get('window').width /20;

const colors= [
  '#7FB3D5','#A569BD','#F7DC6F','#E74C3C','#EB9CA8', '#7C878E',
  '#8A004F','#000000','#10069F','#00a3e0','#4CC1A1'
]

export default class Details extends Component {
  
    componentDidMount(){
      //  const data = this.props.navigation.state.params
       
    }
    render() {
      const data = this.props.navigation.state.params["data"]
      
      const currentItem = this.props.navigation.state.params["currentItem"]      
      for (const i = 0; i < data.length; i++){
        if(currentItem.includes(data[i])){
          continue
        }
        currentItem.push(data[i])
      }
      // console.log(currentItem)
     return (
       
      // <Container style={{margin: marginCard, }}>
      <View style={{ margin: marginCard, }}>
        <DeckSwiper
          dataSource={currentItem}
          cardIndex={(item, index) => index.toString()}
          renderItem={(item, index) =>
            <Card style={{ elevation: 10, margin: marginCard, marginTop: 20}}>
              <CardItem>
                {/* <Left> */}
                  <Body>
                  <Avatar
                      large
                      rounded
                      title={item.user.companyName.substring(0, 2)}
                      containerStyle={{backgroundColor: '#006442', alignSelf: 'center', marginVertical: 10}}
                      // containerStyle={{backgroundColor: colors[index%colors.length], alignSelf: 'center'}}
                      activeOpacity={0.7}
                      // style={{backgroundColor: 'skyblue', marginVertical: 10}}
                      />
                    {/* <Text style={{fontWeight: '900', marginBottom: marginTitle, marginTop: marginTitle/2, fontSize: 20, textAlign: 'center'}}>
                      Detail information
                    </Text> */}
                    <View style={{flex: 1, flexDirection:"row", alignSelf: 'center', marginVertical: 10}}> 
                      <Text 
                          style={{
                            color: '#3498DB',
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center'}}> 
                        {item.user.companyName}
                      </Text>
                    </View>
                    <View style={{flex: 1, flexDirection:"row"}}> 
                      <Text style={{fontWeight: 'bold', marginRight: 15}}>Contacts</Text>
                    </View>
                    <View style={{flex: 1,height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex: 1, flexDirection:"row", paddingVertical: 10}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Email:</Text>
                      <Text> {item.user.companyName}@gmail.com</Text>
                    </View>
                    <View style={{flex: 1,height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex:1, flexDirection:"row", paddingVertical: 10}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Phone: </Text>
                      <Text> +2507894949320</Text>
                    </View>
                    <View style={{flex: 1,height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex:1, flexDirection:"row", paddingVertical: 10}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Address:</Text> 
                      <Text> KG 11Av 183</Text>
                    </View>
                    <View style={{flex: 1,height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex: 1, flexDirection:"row", paddingVertical: 10}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Opening hours:</Text>
                      <Text> 24/7</Text>
                    </View>
                    <View style={{height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex: 1, flexDirection:"row", paddingVertical: 10}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Working Days:</Text>
                      <Text>5/7</Text>
                    </View>
                  </Body>
                {/* </Left> */}
              </CardItem>
  
              {/* <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem> */}
            </Card>
          }
        />
      </View>
    // {/* </Container> */}
        
         );
    }
  }

