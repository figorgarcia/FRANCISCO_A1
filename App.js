import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FeatureItem from './components/featureItem'
import Badget from './components/badget'
import PlaylistItem from './components/playlistItem'
import MusicItem from './components/musicItem'


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
      title: "10,000 Reasons",
      artist: "Matt Redman",
      cover: "https://freeccm.com/wp-content/uploads/2021/02/BelieveForIt-AlbumCover-3000x3000-1-2048x2048.jpg",
    },
    {
      title: "Gratitude",
      artist: "Brandon Lake",
      cover: "https://freeccm.com/wp-content/uploads/2021/02/BelieveForIt-AlbumCover-3000x3000-1-2048x2048.jpg",
    },
    {
      title: "Oceans",
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

        {/* Title Page */}
        <Text style={styles.title}>Good Morning</Text>

        {/* Top 6 list */}
        <View style={styles.badgetLine}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgetContainer}>
            {
              categorieList && categorieList.map((categorie, index) => (
                <Badget title={categorie} index={index} />
              ))
            }
          </ScrollView>
        </View>
        
        {/* Playlists list */}
        <Text style={styles.subTitle}>Top 6</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
          {
            musicList && musicList.map((music, index) => (
              <FeatureItem index={index} title={music.title} cover={music.cover} />
            ))
          }
        </View>
        
        {/* Playlists */}
        <Text style={styles.subTitle}>My Playlists</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {
            playlists && playlists.map((playlist, index) => (
              <PlaylistItem title={playlist.title} cover={playlist.cover} index={index} />
            ))
          }
        </View>
        
        {/* Made for you List */}
        <Text style={styles.subTitle}>Made for You</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 5 }}>
          {
            musicList && musicList.map((music, index) => (
              <MusicItem title={music.title} artist={music.artist} cover={music.cover} index={index}/>
            ))
          }
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  badgetLine: {
    height: 40
  }
});
