import React from 'react';
import {View, StyleSheet,TouchableOpacity,Image,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Screen = ({navigation}) => {
    return (
        <View>
            <ScrollView>
            {/* -------- */}
    <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:50}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/person2.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Suhas Acharya</Text>

      <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} />
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}
    
    <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/woman.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Sonali Amin</Text>

      <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:105
        }} />
      </View>
    </View>
    </TouchableOpacity>

                {/* -------- */}
    <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/person3.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Harshith Kumar</Text>

      <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} />
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}



                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/person5.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Ankit Mishra</Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}


                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/person1.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Namrata</Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}


                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/person6.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Sunaina </Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}


                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/person2.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Uttam Kini</Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}


                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/avatar.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Suhas Acharya</Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}


                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/avatar.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Suhas Acharya</Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}


                {/* -------- */}
                <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
    <View style={{flex:1,marginTop:30}}>
    <View style ={{
      flexDirection:'row',
      height:70,
      width:400,
      backgroundColor:'#d1d1d1',
      marginLeft:'auto',
      marginRight:'auto',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:30,
      borderTopRightRadius:30,

    }}>
      <Image source={require('../assets/avatar.jpg')} style={{
        height:70,
        width:70,
        borderRadius:100
      }} />
      <Text style={{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:35,
        marginTop:20
      }}>Suhas Acharya</Text>

      {/* <Image source={require('../assets/noti.gif')} style={{
        height:50,
        width:50,
        borderRadius:100,
        marginTop:10,
        marginLeft:70
        }} /> */}
      </View>
    </View>
    </TouchableOpacity>

{/* ----- */}

</ScrollView>



    </View>

    

  )
}

const styles = StyleSheet.create({})

export default Screen;
