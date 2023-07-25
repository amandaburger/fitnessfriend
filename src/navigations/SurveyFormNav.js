import React, {useState} from 'react'
import { Text,TouchableOpacity,View } from 'react-native';
import RegisterSurvey from '../scenes/SurveyPages/RegisterSurvey';
import RegisterScreen from '../scenes/SurveyPages/RegisterScreen';
import Availability from '../scenes/SurveyPages/Availability';
import WorkoutPreference from '../scenes/SurveyPages/WorkoutPreference';
import GymPreferences from '../scenes/SurveyPages/GymPreferences';
import Feed from '../scenes/HomeScenes/Feed';

import styles from '../styles/Survey.screen.style'
/*
 * Sent here when you hit the register button
/* Sets you up the form used to register the user 
/* Creates the navigation and format for the form 
 */


const SurveyFormNav = () => {
  // Creates data format for the entire survey across its pages
  const [formData, setFormData] = useState(
    {
      email: '',
      password:'',
      firstName:'',
      lastName: '',
      pronouns:'',

      //Workout
      workouts:[],
 
      //Availability
      availability:[],

      //Preferences
      length: [],
      gym:[],
      frequency:[]
    }
  );
 
  // Defines Screen Info/ functions for use Sar
  const [screen, setScreen] = useState(0); // Allows you to set the current screen your at, starts at 0
  // Defines all the screens/parts to our survey
  const FormTitle = [
   "Register",
   "Pick Workouts",
   "Availability",
   "Preferences"

  ]

  // This connects all the pages to the form and sends the data from the pages to the form 
  // uses use state to figure out which page you are onabort, and sets the form data and sends it once on that page
  const ScreenDisplay= ()=> {
    if(screen == 0){
      return <RegisterSurvey formData = {formData} setFormData = {setFormData}/>;
    } else if(screen == 1){
      return <WorkoutPreference  formData = {formData} setFormData = {setFormData}/>;
    } else if(screen == 2){
      return <Availability  formData = {formData} setFormData = {setFormData}/>;
    }else if(screen==3){
      return <GymPreferences  formData = {formData} setFormData = {setFormData}/>;
    }else{
      <Feed />;
    }

  }
  

// This returns the Navigation and Form
// It creates the next and previous button and has them navigation between the form pages
// It also displays the title of the current page you are at for the form
  return (
    
    <View style = {styles.container}>
    {/* Displays the current js/screen of the form... adds title and screendisplay using function aboce */}
    <Text>{FormTitle[screen]}</Text>
    <View style={{padding:10, width: "100%", borderWidth: 2,height: '70%', borderColor:"black"}} >{ScreenDisplay()}</View> 


    {/* Creates Nav Buttons at the bottom of screen with their specifies functionality*/}
    <View style = {styles.navButtonContainer}>


     {/* Previous Button*/}
    <TouchableOpacity disabled={screen==0}
      onPress={() => {
        //previous sets current screen to be -1, unless zero... go back one screen
        setScreen((currScreen) => currScreen-1)
        console.log("prev")
       }}
       style={styles.navButton}
       >
      <Text > Prev </Text>
    </TouchableOpacity>
     {/* Next Button*/}

    <TouchableOpacity 
      onPress={() => {
        //previous sets current screen to be -1, unless zero... go back one screen
        setScreen((currScreen) => currScreen + 1)
        console.log("next")
       }}
       style={styles.navButton}
       >
      <Text> Next </Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default SurveyFormNav