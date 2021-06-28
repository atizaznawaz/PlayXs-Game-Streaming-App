import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { ImageBackground,View,Image,Text,StyleSheet,FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Videos() {

    const [shortVideo, setShortVideo] = useState([
        {backimage:require('./img/story.jpg'),profimage:require('./img/aa.jpg'),Name:'Atizaz Nawaz'},
        {backimage:require('./img/mm.jpg'),profimage:require('./img/vv.jpg'),Name:'Beats Play'},
        {backimage:require('./img/oo.png'),profimage:require('./img/xx.jpg'),Name:'NinjaXtreme'},
        {backimage:require('./img/pp.jpg'),profimage:require('./img/cc.jpg'),Name:'Mexican Spice'},
        {backimage:require('./img/cod.jpg'),profimage:require('./img/aa.jpg'),Name:'SSjPlays'},
        {backimage:require('./img/Action.jpg'),profimage:require('./img/vv.jpg'),Name:'SteamHijack'},
        {backimage:require('./img/shooter.jpg'),profimage:require('./img/xx.jpg'),Name:'UsamaPlays'},
        {backimage:require('./img/sports.jpeg'),profimage:require('./img/cc.jpg'),Name:'SoldierOP'},
        {backimage:require('./img/mk11.jpg'),profimage:require('./img/cc.jpg'),Name:'RepeaterZone'},
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
                    <View style={{width:'100%',height:200,}}>
                        <Text style={{color:'white',fontSize:15,fontWeight:'bold',paddingLeft:12}} >PlayXs Shorts</Text>
                            <View style={{width:'100%',height:180,paddingLeft:12,paddingTop:10}}>
                   
                            <FlatList
                                    horizontal
                                    // pagingEnabled={true}
                                    showsVerticalScrollIndicator={false}
                                    data={shortVideo}
                                    renderItem={({item})=>(
                                                <View style={{overflow:'hidden',backgroundColor:'#240046',width:110,height:170,borderRadius:10,marginRight:12}}>
                                                    <ImageBackground source={item.backimage} blurRadius={0} style={{flex:1,justifyContent:'flex-end',alignItems:'flex-start'}}>
                                                        <View  style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:'100%'}}>
                                                                <Image style={{borderWidth:2,padding:10,borderColor:'white',marginLeft:6,marginBottom:15,width:20,height:20,borderRadius:30}} source={item.profimage}/>
                                                                <Text style={{textShadowOffset: {width: 2, height: -1},textShadowRadius: 5,textShadowColor: 'black',marginBottom:15,color:'white',fontSize:10,fontWeight:'bold',paddingLeft:4}}>{item.Name}</Text>    
                                                        </View>
                                                    </ImageBackground>
                                                </View>
                                    )}
                                    />            

                            </View>
                    </View>
                    <Text style={{color:'white',fontSize:15,fontWeight:'bold',paddingTop:13,paddingBottom:7,paddingLeft:12}}>Gaming Post</Text>
                    
                    <View style={{width:'100%',height:460,}}>
                   
                   <FlatList
                           style={{width:'100%',padding:10}}
                           //horizontal
                           // pagingEnabled={true}
                           showsVerticalScrollIndicator={false}
                           data={shortVideo}
                           renderItem={({item})=>(
                                       <View style={{padding:11,borderRadius:10,overflow:'hidden',backgroundColor:'#240046',width:'100%',marginBottom:20}}>
                                               <View  style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:'100%',marginBottom:0,}}>
                                                       <Image style={{borderWidth:2,padding:10,borderColor:'white',marginBottom:15,width:35,height:35,borderRadius:12}} source={item.profimage}/>
                                                      <View>
                                                       <Text style={{textShadowOffset: {width: 2, height: -1},textShadowRadius: 5,textShadowColor: 'black',color:'white',fontSize:13,fontWeight:'bold',paddingLeft:6}}>{item.Name}</Text>
                                                       <Text style={{marginBottom:16,color:'white',fontSize:10,fontWeight:'bold',paddingLeft:6}}>2 Minutes Ago</Text>    
                                                      </View>
                                               </View>
                                               <Text style={{fontSize:13,color:'white',marginBottom:13}}>My New Post Captions.</Text>
                                               <Image source={item.backimage} blurRadius={0} style={{width:'100%',height:220,borderRadius:7}}/>

                                               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10,borderRadius:10,width:'100%',height:30}}>
                                               
                                               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:5,flex:1,padding:5}}>
                                               <AntDesign name="staro" size={22} color="#9a00ff" />
                                               <Text style={{fontSize:13,color:'#9a00ff',paddingLeft:5,fontWeight:'bold'}}>Like</Text>
                                               </View>

                                               <View style={{borderTopColor:'#240046',borderBottomColor:'#240046',borderWidth:1,borderLeftColor:'#9a00ff',borderRightColor:'#9a00ff',flexDirection:'row',justifyContent:'center',alignItems:'center',flex:1,padding:5}}>
                                               <FontAwesome5 name="comment-alt" size={18} color="#9a00ff" />
                                               <Text style={{fontSize:13,color:'#9a00ff',paddingLeft:5,fontWeight:'bold'}}>Comment</Text>
                                               </View>

                                              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:5,flex:1,padding:5}}>
                                               <Feather name="share" size={20} color="#9a00ff" />
                                               <Text style={{fontSize:13,color:'#9a00ff',paddingLeft:5,fontWeight:'bold'}}>Share</Text>
                                              </View>

                                               </View>
                                           
                                       </View>
                           )}
                           />            

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
        padding:10,
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
})