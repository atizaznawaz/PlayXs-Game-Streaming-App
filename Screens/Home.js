import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Image,Text, View,ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Home() {

  const [story, setStory] = useState([
    {name:'Atizaz Nawaz', storyimage:require('./img/aa.jpg'),},
    {name:'Usama Nawaz', storyimage:require('./img/zz.jpg'),},
    {name:'Anas Nawaz', storyimage:require('./img/xx.jpg'),},
    {name:'Arham Nawaz', storyimage:require('./img/cc.jpg'),},
    {name:'Ahmed Nawaz', storyimage:require('./img/vv.jpg'),},
    {name:'Among Us', storyimage:require('./img/rr.jpg'),},
    {name:'Osman', storyimage:require('./img/gg.jpg'),},
    {name:'Ali', storyimage:require('./img/bb.jpg'),},
  ])

  const [suggestions, setSuggestions] = useState([
    {gameName:'COD WZ'},
    {gameName:'PUBG'},
    {gameName:'Fortnite'},
    {gameName:'PUBG Mobile'},
    {gameName:'Apex Legend'},
    {gameName:'COD BOP4'},
    {gameName:'Among Us'},
  ])

  const [liveVideo, setLiveVideo] = useState([
    {createrName:'Atizaz Nawaz',Caption:'COD War Zone | 4 june 2021',Hashtags:'#CODWZ#COD #WZ #LIVE',watching:2,liveVideoThumbnail:require('./img/cod.jpg'),creater:require('./img/aa.jpg'),},
    {createrName:'AtiPlays',Caption:'Call of Duty | 4 june 2021',Hashtags:'#COD #BOP4 #LIVE',watching:2,liveVideoThumbnail:require('./img/pp.jpg'),creater:require('./img/zz.jpg'),},
    {createrName:'MarioBoy',Caption:'Battle Field | 4 june 2021',Hashtags:'#BFV #BATTLEROYAL #LIVE',watching:2,liveVideoThumbnail:require('./img/mm.jpg'),creater:require('./img/xx.jpg'),},
    {createrName:'NinjaX',Caption:'Mortal Kombat 11 | 4 june 2021',Hashtags:'#MK11 #COMPETITIVE #LIVE',watching:2,liveVideoThumbnail:require('./img/mk11.jpg'),creater:require('./img/cc.jpg'),},
    {createrName:'Noob21',Caption:'PUBG Kong Vs Godzilla | 4 june 2021',Hashtags:'#PUBG #KONG #ZILLA #LIVE',watching:2,liveVideoThumbnail:require('./img/pubg.jpg'),creater:require('./img/vv.jpg'),},
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

                    {/* Stories Section */}
 
                    <View style={styles.Stories}>
                      <View style={styles.AddStory}>
                      <Image  style={styles.AddStoryLogo} source={require('./img/gg.png')}/>
                      </View>

                      
                      <FlatList    
                      style={styles.flatlist}
                      horizontal
                      // pagingEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item)=>item.id}
                      data={story}
                      renderItem={({item})=>(   
                          <View style={styles.Story}>
                          <Image  style={styles.StoryPicture} source={item.storyimage}/>
                          </View>
                       )}
                      />
                    </View>

                      {/* Game Suggestion Name Section */}

                    <View style={styles.SuggestionSection}>
                    
                    <FlatList    
                      style={styles.flatlistSuggestion}
                      horizontal
                      // pagingEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item)=>item.id}
                      data={suggestions}
                      renderItem={({item})=>(   
                         <Text style={styles.SuggestionList}>{item.gameName}</Text>
                       )}
                      />

                    </View>  

                      {/* live stream section */}
                    
                    
                    <ScrollView style={{width:'100%'}}>

                    <View style={styles.liveStreamSection}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Live Stream</Text>
                       <Text style={{marginTop:4,color:'red',fontWeight:'bold',fontSize:10,borderWidth:1,borderColor:'red',paddingLeft:5,marginLeft:5,borderRadius:5,}}>Live </Text> 
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center',paddingRight:10,}}>
                       <Text style={{paddingRight:5,color:'#9a00ff',fontWeight:'bold',fontSize:13}}>See More</Text>
                       <AntDesign style={{paddingTop:4,}} name="right" size={15} color="#9a00ff" />
                      </View> 
                    </View>  

                    {/* live videos */}

                    <FlatList    
                      style={styles.LiveVideoflatlist}
                      horizontal
                      // pagingEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item)=>item.id}
                      data={liveVideo}
                      renderItem={({item})=>(   
                      <View style={styles.LiveVideo}>
                      {/* video thumbnail */}
                       <Image  style={styles.videoThumbnail} source={item.liveVideoThumbnail}/>
                       <View style={styles.VideoDetails}>
                       <View style={{flexDirection:'row',paddingLeft:1}}>
                       <Image  style={{height:30,width:30,borderRadius:20}} source={item.creater}/>
                       <Text style={{color:'white', fontSize:12,paddingLeft:8}}>{item.Caption}{"\n"}{item.Hashtags}</Text>
                       </View>
                       <Octicons style={{paddingRight:5}} name="kebab-vertical" size={26} color="#8d7a9f" />
                       </View>
                       <View style={{flexDirection:'row',paddingLeft:35,width:260,height:20,justifyContent:'space-between',alignItems:'flex-start'}}>
                       <Text style={{color:'#72588b', fontSize:10,fontWeight:'bold'}}>{item.createrName} - {item.watching}K Watching</Text>
                       <Text style={{marginLeft:10,color:'red',fontWeight:'bold',fontSize:10,borderWidth:1,borderColor:'red',paddingLeft:5,marginLeft:5,borderRadius:5,}}>Live </Text> 
                       </View>
                      </View>

                       )}
                      />

                       {/* Top stream section */}

                    <View style={styles.VideoSection}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Top Streams</Text>
                       </View>
                      <View style={{flexDirection:'row',alignItems:'center',paddingRight:10,}}>
                       <Text style={{paddingRight:5,color:'#9a00ff',fontWeight:'bold',fontSize:13}}>See More</Text>
                       <AntDesign style={{paddingTop:4,}} name="right" size={15} color="#9a00ff" />
                      </View> 
                    </View>  

                    {/* live videos */}

                    <FlatList    
                      style={styles.LiveVideoflatlist}
                      horizontal
                      // pagingEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item)=>item.id}
                      data={liveVideo}
                      renderItem={({item})=>(   
                      <View style={styles.LiveVideo}>
                      {/* video thumbnail */}
                       <Image  style={styles.videoThumbnail} source={item.liveVideoThumbnail}/>
                       <View style={styles.VideoDetails}>
                       <View style={{flexDirection:'row',paddingLeft:1}}>
                       <Image  style={{height:30,width:30,borderRadius:20}} source={item.creater}/>
                       <Text style={{color:'white', fontSize:12,paddingLeft:8}}>{item.Caption}{"\n"}{item.Hashtags}</Text>
                       </View>
                       <Octicons style={{paddingRight:5}} name="kebab-vertical" size={26} color="#8d7a9f" />
                       </View>
                       <View style={{paddingLeft:8,width:200,height:20,justifyContent:'flex-start',alignItems:'flex-start'}}>
                       <Text style={{color:'#72588b', fontSize:10,paddingLeft:-60,fontWeight:'bold'}}>{item.createrName} - {item.watching}K Watching</Text>
                       </View>
                      </View>

                       )}
                      />
                      
                      

                      </ScrollView>

                      <View style={{width:'100%',height:50,borderWidth:1,borderTopColor:'#9a00ff',borderLeftColor:'#9a00ff',borderRightColor:'#9a00ff',borderRadius:30,}}>

                      </View>
            </View>
      
    )
}


const styles = StyleSheet.create({
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
    Stories:{
      width:'100%',
      height:80,
     // borderWidth:3,
      borderColor:'blue',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:25,
    },
    AddStory:{
      width:45,
      height:45,
      backgroundColor:'#9a00ff',
      borderWidth:2,
      borderColor:'#da8891',
      justifyContent:'center',
      alignItems:'center',
      transform: [{ rotate: '45deg'}],
      marginRight:-5,
    },
    AddStoryLogo:{
      height:25,
      width:25,
      transform: [{ rotate: '-45deg'}]
    },
    Story:{
      width:45,
      height:45,
      backgroundColor:'#9a00ff',
      borderWidth:3,
      marginLeft:15,
      marginRight:15,
      borderColor:'#9a00ff',
      justifyContent:'center',
      alignItems:'center',
      transform: [{ rotate: '45deg'}],
      overflow:'hidden',
      marginTop:17,
    },
    StoryPicture:{
      height:65,
      width:65,
      transform: [{ rotate: '-45deg'}]
    },
    flatlist:{
      //backgroundColor:'blue',
      marginLeft:20,
      height:80,
    },
    SuggestionSection:{
      height:40,
      width:'100%',
      //borderWidth:3,
      //borderColor:'blue',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:5,
      justifyContent:'center',
    },
   
    SuggestionList:{
      color:'#9a00ff',
      margin:5,
      borderWidth:1,
      borderColor:'#9a00ff',
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:20,
    },
    liveStreamSection:{
      marginTop:3,
      height:40,
      width:'100%',
     // borderWidth:1,
      //borderColor:'blue',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:13,
    },
    LiveVideo:{
      marginTop:5,
      marginRight:12,
      height:230,
      width:280,
      backgroundColor:'#240046',
      // borderWidth:1,
      //borderColor:'blue',
      borderRadius:12,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'flex-start',
      padding:11,
    },
    videoThumbnail:{
      width:260,
      height:150,
      borderRadius:6,
    },
    VideoDetails:{
      flexDirection:'row',
      height:40,
      width:260,
      backgroundColor:'#240046',
     // borderWidth:1,
      //borderColor:'blue',
      //borderRadius:12,
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:5,
    },
    LiveVideoflatlist:{
      paddingLeft:13,
    },
    VideoSection:{
      height:40,
      width:'100%',
      //borderWidth:1,
      //borderColor:'blue',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:14,
      marginTop:3,
    },

  });