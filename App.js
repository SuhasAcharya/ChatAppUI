import React,{useState,useEffect,useContext} from 'react';
import {View, StyleSheet,Text,Button , Image ,ImageBackground, Pressable, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { createContext } from 'react';
import { log } from 'react-native-reanimated';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient'
import Screen from './components/Screen';
import StatusPage from './components/StatusPage';



const Drawer = createDrawerNavigator();
const Stack =createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const chat = 'Chat'
const status = 'Status'

const Auth = () => {
  return(
    <View>
      {/* <Text style={{marginTop:400,marginLeft:180,fontWeight:'bold'}}>Loading...</Text> */}
      <Video source={require('./assets/loading1.mp4')} style={{height:400,width:400,marginTop:260,marginLeft:20}} />
    </View>
  )
}

// const Chat =() => {
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name="Chatlist" component={ChatList} /> 
//       <Stack.Screen name="ChatScreen" component={ChatScreen} /> 
//       <Stack.Screen name="UserDetails" component={UserDetails} /> 
//     </Stack.Navigator>
//   )

// }

const Loggedin = () => {
  return(
   <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home}  />
      <Drawer.Screen name='Notifications' component={Notifi} />
   </Drawer.Navigator>
  )

}

const Home = ({navigation}) => {
  return (
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
          let iconName;
          let rn = route.name;
          if(rn===chat){
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
          }
          else if(rn===status){
            iconName = focused ? 'eye' : 'eye-outline'
          }
          return <IonIcons name={iconName} size={size} color={color} />
      },
    })}>
      <Tab.Screen name='Chat' component={Chat} options={{headerShown:false}} />
      <Tab.Screen name='Status' component={Status} options={{headerShown:false}} />
    </Tab.Navigator>
  )
}


const Chat = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}} />
        <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}} />
      </Stack.Navigator>
  )
}


// const Screen1 = ({navigation}) => {
//   return (
//     <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
//     <View style={{flex:1,marginTop:30}}>
//     <View style ={{
//       flexDirection:'row',
//       height:70,
//       width:400,
//       backgroundColor:'#d1d1d1',
//       marginLeft:'auto',
//       marginRight:'auto',
//       borderTopLeftRadius:100,
//       borderBottomLeftRadius:100,
//       borderBottomRightRadius:30,
//       borderTopRightRadius:30,

//     }}>
//       <Image source={require('./assets/avatar.jpg')} style={{
//         height:70,
//         width:70,
//         borderRadius:100
//       }} />
//       <Text style={{
//         fontSize:23,
//         fontWeight:'bold',
//         marginLeft:35,
//         marginTop:20
//       }}>Suhas Acharya</Text>

//       <Image source={require('./assets/noti.gif')} style={{
//         height:50,
//         width:50,
//         borderRadius:100,
//         marginTop:10,
//         marginLeft:70
//         }} />
//       </View>
//     </View>
//     </TouchableOpacity>
//   )
// }


const Screen1 = () =>{
  return(
    <>
    <Stack.Navigator >
    <Stack.Screen name='Screen' component={Screen} options={{headerShown:false}} />
    <Stack.Screen name='Screen2' component={Screen2} />
    </Stack.Navigator>
    </>
  )
}



const Screen2 = ({navigation}) => {
  return (
    <View style={{marginTop:300}}>
    <Text>Screen 2</Text>
    <Button title='Screen 1' onPress={()=>navigation.navigate('Screen1')} ></Button>
    </View>
  )
}



const Status = () => {
  return (
    <View>
      <StatusPage />
    </View>
  )
}



const Notifi = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  )
}
//Not Logged in Starts Here

const Notloggedin = () => {
  return(
   <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="SignedUp" component={SignedUp} />
      
   </Stack.Navigator>
  )

}

const Login = ({navigation}) => {
  const [Name,setName] = useState();
  const [Password,setPassword] = useState();
  return(
    // <ImageBackground source={require('./assets/wave.png')} style={{height:'100%',width:500,marginTop:100}}>
    <LinearGradient
    colors={['white','#6c36c9']}
    style={{height:'100%'}}
  >
    <Image source={require('./assets/person.gif')} style={{
      height:200,
      width:200,
      borderRadius:100,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:50
    }}></Image>
   <View style={{marginLeft:'auto',marginRight:'auto',marginTop:50}} >
    
    <TextInput placeholder='User Name' placeholderTextColor={'#5905eb'} value={Name} onChangeText={(text)=>setName(text)} 
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'white',
      opacity:0.4,
      height:60,
      width:320,
      borderRadius:20,
      fontSize:25,
      paddingLeft:20,
      fontWeight:'bold',
      marginBottom:20,
      color:'#5905eb'
      }}> 
      </TextInput>

      <TextInput placeholder='Password' placeholderTextColor={'#5905eb'} value={Password} onChangeText={(text)=>setPassword(text)} 
      secureTextEntry={true}
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'white',
      opacity:0.4,
      height:60,
      width:320,
      borderRadius:20,
      fontSize:25,
      paddingLeft:20,
      fontWeight:'bold'
      }}> 
      </TextInput>

    <Pressable onPress={()=>navigation.navigate('Home')} 
    style={{
      borderWidth:3,
      borderColor:'#5905eb',
      borderRadius:40,
      backgroundColor:'white',
      opacity:0.4,
      height:50,
      width:200,
      marginTop:20,
      marginLeft:60,


      }} >
    <Text 
    style={{
      color:'#5905eb',
      fontSize:23,
      fontWeight:'bold',
      paddingLeft:60,
      paddingTop:8,

      }}
      >Login</Text>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate('Signin')} 
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:40,
      opacity:0.4,
      height:50,
      width:200,
      marginTop:180,
      marginLeft:60,


      }} >
    <Text 
    style={{
      color:'white',
      fontSize:28,
      fontWeight:'bold',
      paddingLeft:40,
      paddingTop:5,
      }}
      >Sign Up</Text>
    </Pressable>
    
   </View>
   </LinearGradient> 
  )
}




const Signin= ({navigation}) => {
  const [Name,setName] = useState()
  return(
   <View >
    <LinearGradient
    colors={['white','#0a337a']}
    style={{height:'100%'}}
  >
    <Image source={require('./assets/sign.gif')} style={{
      height:200,
      width:360,
      borderRadius:20,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:50,
      opacity:0.8
    }}></Image>
   <View style={{marginLeft:'auto',marginRight:'auto',marginTop:50}} >
    
    <TextInput placeholder='Name' value={Name} placeholderTextColor={'#0437de'} onChangeText={(text)=>setName(text)}
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'white',
      opacity:0.4,
      height:60,
      width:320,
      borderRadius:20,
      fontSize:25,
      paddingLeft:20,
      fontWeight:'bold',
      marginBottom:20,
      color:'#0437de'
      }}> 
      </TextInput>

      <TextInput placeholder='Email' placeholderTextColor={'#0437de'} 
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'white',
      opacity:0.4,
      height:60,
      width:320,
      borderRadius:20,
      fontSize:25,
      paddingLeft:20,
      fontWeight:'bold',
      color:'#0437de'
      }}> 
      </TextInput>

      <TextInput placeholder='Password' placeholderTextColor={'#0437de'} 
      secureTextEntry={true}
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'white',
      opacity:0.4,
      height:60,
      width:320,
      borderRadius:20,
      fontSize:25,
      paddingLeft:20,
      fontWeight:'bold',
      marginBottom:20,
      marginTop:20
      }}> 
      </TextInput>

      <TextInput placeholder='Phone Number' placeholderTextColor={'#0437de'} 
    style={{
      borderWidth:3,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'white',
      opacity:0.4,
      height:60,
      width:320,
      borderRadius:20,
      fontSize:25,
      paddingLeft:20,
      fontWeight:'bold',
      marginBottom:20,
      color:'#0437de'
      }}> 
      </TextInput>

     
<Pressable  

    style={{
      borderWidth:3,
      borderColor:'#0437de',
      borderRadius:40,
      backgroundColor:'white',
      opacity:0.4,
      height:50,
      width:200,
      marginTop:20,
      marginLeft:60,


      }} >
    <Text 
    style={{
      color:'#0437de',
      fontSize:23,
      fontWeight:'bold',
      paddingLeft:60,
      paddingTop:8,

      }}
 onPress={()=>navigation.navigate('SignedUp',Name)}

      >Sign In</Text>
    </Pressable>
    
   </View>
   </LinearGradient> 
      
   </View>
  )
}


const SignedUp =({route,navigation})=> {
  const Name = route.params;
  return(
    <View>
       <Image source={require('./assets/welcome.gif')} style={{
      height:450,
      width:'100%',
      marginLeft:'auto',
      marginRight:'auto',
      borderBottomRightRadius:100,
      borderBottomLeftRadius:3
    }}></Image>

    <View style={{flexDirection:'column'}}>
    <Text  style={{
      color:'#0437de',
      fontSize:35,
      fontWeight:'bold',
      marginLeft:60,
      marginTop:40,
      opacity:0.8
      }}>Welcome.</Text>

    <Text style={{
      color:'#02c973',
      fontSize:60,
      fontWeight:'bold',
      marginLeft:150,
      marginTop:5
 
      }}>
      {Name}
    </Text>
    </View>

    <Pressable  
    style={{
      borderWidth:3,
      borderColor:'#1b943b',
      borderRadius:40,
      backgroundColor:'#02c973',
      opacity:0.8,
      height:50,
      width:300,
      marginTop:100,
      marginLeft:60,


      }} >
    <Text 
    style={{
      color:'white',
      fontSize:23,
      fontWeight:'bold',
      paddingLeft:60,
      paddingTop:8,

      }}
 onPress={()=>navigation.navigate('Home')}

      >Go to Homepage</Text>
    </Pressable>
    </View>

  )
}










const App = () => {
  const [Loading,setLoading] = useState(true)
  const [isLoggedIn,setisLoggedIn] = useState(false)
  
 
  
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },2000)
    },[])
      
  return (
   <NavigationContainer>
    {
      Loading ? <Auth /> : isLoggedIn ? <Loggedin /> : <Notloggedin/> 
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
