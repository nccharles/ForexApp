import React, { Component } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import DetailCard from '../Components/DetailCard'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const marginText = Dimensions.get('window').width;
const marginTitle = Dimensions.get('window').width /10;
const marginCard = Dimensions.get('window').width /20;

export default class Details extends Component {
  
    componentDidMount(){
      //  const data = this.props.navigation.state.params
       
    }
    render() {
      // const data = [{ Company: "GoodLife",
      //     Email: "boom@gmail.com",
      //     Phone: "+34342343",
      //     Address: "KG 11Av 183",
      //     Open: "Monday to Frida",
      //     Rates: 50,
      //     baseCurrency: 'Rwf'
      //   },
      //   { Company: "Limitless",
      //     Email: "boom@gmail.com",
      //     Phone: "+34342343",
      //     Address: "KG 11Av 183",
      //     Open: "Monday to Frida",
      //     Rates: 500,
      //     baseCurrency: 'Rwf',
      //   },
      //   { Company: "Boom",
      //     Email: "boom@gmail.com",
      //     Phone: "+34342343",
      //     Address: "KG 11Av 183",
      //     Open: "Monday to Frida",
      //     Rates: 1000,
      //     baseCurrency: 'Rwf'
      //   }]
      
      const data = this.props.navigation.state.params["data"]
      
      const currentItem = this.props.navigation.state.params["currentItem"]      
      for (var i = 0; i < data.length; i++){
        if(currentItem.includes(data[i])){
          continue
        }
        currentItem.push(data[i])
      }
      // console.log(currentItem)
     return (
       
      <Container style={{margin: marginCard }}>
      <View>
        <DeckSwiper
          dataSource={currentItem}
          renderItem={(item) =>
            <Card style={{ elevation: 8, }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{fontWeight: '900', marginBottom: marginTitle, marginTop: marginTitle/2, fontSize: 20, textAlign: 'center'}}>
                      Detail information
                    </Text>
                    <View style={{flex: 1, flexDirection:"row"}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Company Name:</Text>
                      <Text > {item.user.companyName}</Text>
                    </View>
                    <View style={{height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex: 1, flexDirection:"row"}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Email:</Text>
                      <Text> {item.user.companyName}@gmail.com</Text>
                    </View>
                    <View style={{flex: 1,height: 1, width: marginText, backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex:1, flexDirection:"row"}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Phone: </Text>
                      <Text> +2507894949320</Text>
                    </View>
                    <View style={{height: 1, width: "100%", backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex:1, flexDirection:"row"}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Address:</Text> 
                      <Text> KG 11Av 183</Text>
                    </View>
                    <View style={{height: 1, width: "100%", backgroundColor: "#CED0CE", margin: 8}}/>
                    <View style={{flex: 1, flexDirection:"row"}}> 
                      <Text style={{fontWeight: '900', marginRight: 15}}>Opening hours:</Text>
                      <Text> 24/7</Text>
                    </View>
                  </Body>
                </Left>
              </CardItem>
  
              {/* <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem> */}
            </Card>
          }
        />
      </View>
    </Container>
        
         );
    }
  }

