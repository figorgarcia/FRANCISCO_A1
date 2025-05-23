import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';



export default function App() {

  const categorieList = [
    'Music', 'Podcast', 'Shows', 'Comedy', 'Technology', 'Others'
  ]

  const musicList = [
    {
      title: "You Say",
      artist: "Lauren Daigle",
      cover: "https://cdn2.albumoftheyear.org/750x0/album/339885-you-say_000650.jpg",
    },
    {
      title: "Reckless Love",
      artist: "Cory Asbury",
      cover: "https://m.media-amazon.com/images/I/817xO6LkGpL._SS500_.jpg",
    },
    {
      title: "Way Maker",
      artist: "Sinach",
      cover: "https://albumartexchange.com/coverart/gallery/ce/cecewinans_believeforit_ebms.jpg",
    },
    {
      title: "10,000 Reasons (Bless the Lord)",
      artist: "Matt Redman",
      cover: "https://freeccm.com/wp-content/uploads/2021/02/BelieveForIt-AlbumCover-3000x3000-1-2048x2048.jpg",
    },
    {
      title: "Gratitude",
      artist: "Brandon Lake",
      cover: "https://freeccm.com/wp-content/uploads/2021/02/BelieveForIt-AlbumCover-3000x3000-1-2048x2048.jpg",
    },
    {
      title: "Oceans (Where Feet May Fail)",
      artist: "Hillsong UNITED",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
  ];

  const playlists = [
    {
      title: "Morning Worship",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
    {
      title: "Relax & Reflect",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
    {
      title: "Sunday Soul",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
    {
      title: "Heavenly Beats",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
    {
      title: "Praise Party",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
    {
      title: "Acoustic Blessings",
      cover: "https://thegospelguru.com/wp-content/uploads/2012/05/newtamela.jpeg",
    },
  ];


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>

        <Text style={styles.title}>Good Morning</Text>

        <View style={{ height: 40 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgetContainer}>
            {
              categorieList && categorieList.map((categorie, index) => (
                <View style={styles.badget} key={index}>
                  <Text style={styles.badgetText}>{categorie}</Text>
                </View>
              ))
            }
          </ScrollView>
        </View>

        <Text style={styles.subTitle}>Top 6</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
          {
            musicList && musicList.map((music, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#2A2A2A', width: '49%', marginTop: 3, marginLeft: 3, borderRadius: 10 }}>
                <Image source={{ uri: music.cover }} style={{ height: 50, width: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} resizeMode='cover' />
                <Text style={{ color: 'white', marginLeft: 5, paddingHorizontal: 10 }} ellipsizeMode='tail' numberOfLines={1}>{music.title}</Text>
              </View>
            ))
          }
        </View>



        <Text style={styles.subTitle}>My Playlists</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {
            playlists && playlists.map((playlist, index) => (
              <View key={index} style={{ flex: 0.20, marginTop: 4, height: 200 }}>
                <ImageBackground source={{ uri: playlist.cover }} style={{ flex: 1 }} imageStyle={{ borderRadius: 12 }} resizeMode='cover' >
                  <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign:'center' }} >{playlist.title}</Text>
                  </View>
                </ImageBackground>
              </View>
            ))
          }
        </View>




        <Text style={styles.subTitle}>Made for You</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 5 }}>
          {
            musicList && musicList.map((music, index) => (
              <View key={index} style={{ alignItems: 'center', backgroundColor: '#2A2A2A', width: '48%', marginTop: 3, height: 200, borderRadius: 10 }}>
                <ImageBackground source={{ uri: music.cover }} style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }} imageStyle={{ borderRadius: 12 }} resizeMode='cover' >
                  <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 50 }}>
                    <Text style={{ color: 'white', marginLeft: 5, fontSize: 18 }} ellipsizeMode='tail' numberOfLines={1}>{music.title}</Text>
                    <Text style={{ color: 'white', marginLeft: 5, fontStyle: 'italic', fontSize: 8 }} ellipsizeMode='tail' numberOfLines={1}>{music.artist}</Text>
                  </View>
                </ImageBackground>
              </View>
            ))
          }
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // body
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'top',
    justifyContent: 'top',
    paddingTop: 50
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#fff',
    marginTop: 20
  },

  // badgets
  badgetContainer: {
    marginTop: 8,
    height: 20
  },
  badget: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 2
  },
  badgetText: {
    color: 'white',
    fontSize: 15
  }

  //categories




});
