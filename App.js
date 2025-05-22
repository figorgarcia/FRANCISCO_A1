import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';



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




  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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

      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
        {
          musicList && musicList.map((music, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#2A2A2A', width: '49%', marginTop: 3, marginLeft: 3, borderRadius: 10 }}>
              <Image source={{ uri: music.cover }} style={{ height: 50, width: 50 }} resizeMode='cover' />
              <Text style={{ color: 'white', marginLeft: 5, paddingHorizontal: 10 }} ellipsizeMode='tail' numberOfLines={1}>{music.title}</Text>
            </View>
          ))
        }
      </View>

      <View>
        
      </View>





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
    marginTop: 10
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
