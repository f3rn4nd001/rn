import React , { Component }from 'react';
import { StyleSheet,ScrollView, FlatList,ActivityIndicator,TouchableOpacity } from "react-native";
import { Container, Content, Text,  View,Card,CardItem,Button,Body,Item,Input,Label } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class Registro extends React.Component {
  constructor(props){  
    super(props);
    this.state = { 
      isLoading: true,
      dataMovie:[] ,
      _id:'',

    }
  }
  
  async componentDidMount() {
    fetch('http://192.168.1.74:3000/api/Usuarios/')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataMovie: responseJson,
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  _renderItem = ({item}) => (
    <View>
       <Card  style={styles.a}>
       <CardItem bordered style={{borderWidth:2,borderColor:'black' }}>
       <Body>  
      <Text>{item.email} , {item.apellido}</Text>
      <Text>{item.sexo}</Text>
      <Text>{item.password}</Text>
      <Text>{item.img}</Text>
      <Text>{item.role}</Text>
      <Text>{item.telefono}</Text>      
      <Text>{item.edad}</Text>
      <Text>{item._id}</Text>
     
        </Body>
      </CardItem>
      <CardItem bordered style={{justifyContent:'center'}}>
            <TouchableOpacity style={styles.centerheaderba}>
            <Button rounded style={styles.centerheaderbb} >
            <Text style={styles.centerheader}>Editar</Text>
            </Button> 
            </TouchableOpacity>
              <Input onChangeText={(_id)=>{item._id}}/>
            <Text style={{width:10}}> </Text>
            <TouchableOpacity  style={styles.centerheaderba}>
            <Button rounded style={styles.centerheaderbb}   onPress={this.eliminar}>
              <Text style={styles.centerheader} >Eliminar</Text>
            </Button> 
          </TouchableOpacity >
            </CardItem>
            </Card>
    </View>
    );
 
  render() {
  
    return (
        <Container >
        <Content padder contentContainerStyle={styles.content}>
        <ScrollView>
        {this.state.isLoading?
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <View>
            <Text style={{color:'blue',fontSize:28}}> {this.state.dataMovie.nombre}</Text>
            <Text > {this.state.dataMovie.apellido}</Text>

            <FlatList
              data={this.state.dataMovie}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
            
          </View>
        }
        </ScrollView>
        </Content>
      </Container>
    );
  }
  eliminar=(_id) =>{
    alert(_id);
  }
}

const styles=StyleSheet.create({
    centerheader:{
        width:'100%',
        textAlign:'center',
    }, 
    centerheaderba:{
        width:'50%',
        textAlign:'center',
    },
    centerheaderbb:{
        width:'100%',
        textAlign:'center',
    },
    a:{
       borderRadius:10,
       borderColor:'black',
    },
    content:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#D0D0D0',        
    },

})