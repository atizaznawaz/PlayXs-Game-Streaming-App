import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { View, Text,StyleSheet,Image,FlatList, TouchableOpacity, TouchableOpacityBase} from 'react-native'

export default function Categories() {

    const [categoryCard, setcategoryCard] = useState([
    {
        categoryCardImage:require('./img/quest.png'),
        categoryName1:'Real Time',
        categoryName2:'Strategy Games',
        categoryProfileImage1:require('./img/bb.jpg'),
        categoryProfileImage2:require('./img/vv.jpg'),
        categoryProfileImage3:require('./img/cc.jpg'),
        categoryProfileImage4:require('./img/xx.jpg'),
        watching:2.5,
    },
    {
      categoryCardImage:require('./img/Action.jpg'),
      categoryName1:'Online Multiplayer',
      categoryName2:'Battle Games',
      categoryProfileImage1:require('./img/aa.jpg'),
      categoryProfileImage2:require('./img/xx.jpg'),
      categoryProfileImage3:require('./img/bb.jpg'),
      categoryProfileImage4:require('./img/zz.jpg'),
      watching:1.8,
  },
  {
    categoryCardImage:require('./img/roleplaying.jpg'),
    categoryName1:'Role Playing',
    categoryName2:'Action Games',
    categoryProfileImage1:require('./img/vv.jpg'),
    categoryProfileImage2:require('./img/cc.jpg'),
    categoryProfileImage3:require('./img/bb.jpg'),
    categoryProfileImage4:require('./img/aa.jpg'),
    watching:12,
  },
  {
    categoryCardImage:require('./img/sports.jpeg'),
    categoryName1:'Athleticism',
    categoryName2:'Sports Games',
    categoryProfileImage1:require('./img/bb.jpg'),
    categoryProfileImage2:require('./img/vv.jpg'),
    categoryProfileImage3:require('./img/cc.jpg'),
    categoryProfileImage4:require('./img/xx.jpg'),
    watching:20,
  },
  {
    categoryCardImage:require('./img/ii.jpg'),
    categoryName1:'Competitive',
    categoryName2:'Fighting Games',
    categoryProfileImage1:require('./img/bb.jpg'),
    categoryProfileImage2:require('./img/vv.jpg'),
    categoryProfileImage3:require('./img/cc.jpg'),
    categoryProfileImage4:require('./img/xx.jpg'),
    watching:2.5,
  },
  {
    categoryCardImage:require('./img/oo.png'),
    categoryName1:'Story Based',
    categoryName2:'Adventure Games',
    categoryProfileImage1:require('./img/bb.jpg'),
    categoryProfileImage2:require('./img/vv.jpg'),
    categoryProfileImage3:require('./img/cc.jpg'),
    categoryProfileImage4:require('./img/xx.jpg'),
    watching:2.5,
  },
    ])

    return (
        <View style={styles.container}>
            <StatusBar style="light"  hidden = {false} backgroundColor = "#10002B" translucent = {true}/>
            <View style={styles.Header}>
                <Image  style={styles.logo} source={require('./img/ee.png')}/>
                <View style={styles.icons} >
                <Image  style={styles.iconimage1} source={require('./img/qq.png')}/>
                <Image  style={styles.iconimage2} source={require('./img/ww.png')}/>
                <Image  style={styles.profileimage} source={require('./img/aa.jpg')}/>
                </View>
            </View>

            <View style={{marginBottom:5,height:30,width:"100%", justifyContent:"space-between",paddingHorizontal:13,alignItems:"center",flexDirection:"row"}}>
            <Text style={styles.Heading}>Gaming Categories</Text>
            <TouchableOpacity>
            <FontAwesome style={{paddingRight:3}} name="sliders" size={22} color="white" />
            </TouchableOpacity>
            </View>

            <View style={{width:"100%",height:"80.6%",}}>
            <FlatList
            style={{paddingHorizontal:11}}
            //horizontal
            // pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            data={categoryCard}
            renderItem={({item})=>(
            
            <View style={styles.categoryCard}>
            <Image  style={styles.categoryImage} source={item.categoryCardImage}/>
            <Text style={styles.categoryCardName}>{item.categoryName1}{'\n'}{item.categoryName2}</Text>
            <View style={styles.categoryDetails}>
            <Image  style={styles.profileAlsoPlay} source={item.categoryProfileImage1}/>
            <Image  style={styles.profileAlsoPlay} source={item.categoryProfileImage2}/>
            <Image  style={styles.profileAlsoPlay} source={item.categoryProfileImage3}/>
            <Image  style={styles.profileAlsoPlay} source={item.categoryProfileImage4}/>
            <Text style={{color:'#9a00ff',paddingLeft:15,fontSize:13,}}>+{item.watching}K Also Playing</Text>
            <TouchableOpacity>
            <Text style={styles.categoryCardButton}>Check Streams</Text>
            </TouchableOpacity>
            </View>

            </View>
            )}
            />

            </View>

            <View style={{width:'100%',height:50,borderWidth:1,borderTopColor:'#9a00ff',borderLeftColor:'#9a00ff',borderRightColor:'#9a00ff',borderRadius:30,}}>

            </View>

        </View>

    )
}
 const styles=StyleSheet.create({
    
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#10002B',
        alignItems: 'flex-start',
        //justifyContent: 'space-between',
        flexDirection:'column',
      },
      Header:{
        height:50,
        marginTop:30,
        //backgroundColor:'red',
        width:'100%',
        flexDirection:'row',
        fontWeight:'bold',
        color:'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:10
      },
      logo:{
        width:90,
        height:90,
      },
      icons:{
        width:120,
        height:50,
        //borderColor:'white',
        //borderWidth:2,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:10,               //inorder to make icons inline with main App logo
        marginRight:-5,
      },
      iconimage1:{
        width:20,
        height:20,
      },
      iconimage2:{
        width:17,
        height:22,
      },
      profileimage:{
        borderRadius:15,
        width:22,
        height:22,
      },
      Heading:{
          color:'white',
          fontSize:16,
          fontWeight:'bold',
          
      },
      categoryCard:{
        marginBottom:10,  
        marginTop:5,
        //marginLeft:13,
        height:200,
        width:"100%",
        backgroundColor:'#240046',
        // borderWidth:1,
        //borderColor:'blue',
        borderRadius:12,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:11,

      },

      categoryImage:{
          width:'100%',
          height:100,
          borderRadius:6,
      },
      categoryCardName:{
          color:'white',
          fontWeight:'bold',
          fontSize:15,
          paddingTop:7,
      },
      categoryDetails:{
        marginTop:4,
        // marginLeft:15,
        height:30,
        width:348,
        //borderWidth:1,
        //borderColor:'blue',
        flexDirection:'row',
        //paddingLeft:1,
        alignItems:'center',
        justifyContent:'flex-start',    
      },

      profileAlsoPlay:{
        borderRadius:15,
        width:23,
        height:23,
        zIndex:1,
        marginRight:-8,
        borderColor:'white',
        borderWidth:0.8,
      },
      categoryCardButton:{
          marginLeft:55,
          //marginRight:5,
          fontSize:12,
          fontWeight:'bold',
          color:'#10002B',
          paddingVertical:4,
          paddingHorizontal:12,
          //borderWidth:1,
          borderRadius:6,
          //borderColor:'#9a00ff',
          backgroundColor:'#9a00ff'
      },
 })