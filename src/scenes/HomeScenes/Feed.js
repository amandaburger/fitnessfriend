import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Ionicons } from "@expo/vector-icons"
import CardsSwipe from 'react-native-cards-swipe'
import styles from '../../styles/Feed.screen.style'
import Profile from '../../components/Profile'

// fake user image and name for later use
const cardsData = [
  {
    firstName: "Doreamon",
    src: require('../../assets/images/1.png')
  },
  {
    firstName: "Sue",
    src: require('../../assets/images/2.png')
  },
  {
    firstName: "Nobi",
    src: require('../../assets/images/3.png')
  },
  {
    firstName: "Takeshi",
    src: require('../../assets/images/4.png')
  },
];

export default function Feed({ navigation }) {
  //hiding header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

    return (
    <View style={styles.container}>
      {/* the card swipping section
      each card is a profile
      all the informations about each card is in Profile.js */}
      <CardsSwipe
        cards={cardsData}
        cardContainerStyle={styles.cardContainer}
        renderCard={(card) => (
          <Profile/>
        )}
      />
    </View>

  );
}
