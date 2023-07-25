import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { React, useState } from 'react'
import styles from '../styles/Login.screen.style'
import { auth, db } from "./../../firebaseConfig.js"



/*
 * First page viewed upon opening of application.. login screen
 */
const LoginScreen = ({ navigation }) => {
    //creates use states for setting email and password and a place to store these values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /* 
     * When called, this function passes a user's email and password 
     * authentication to the firebase database and logs when successful 
     */
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                //logs success in console
                //console.log("login sucessful: user uid = " + user.uid);
            })
            .catch((error) => {
                // user failed to sign in 
                const errorCode = error.code; 
                const errorMessage = error.message;
                console.log(errorMessage); // print error to console
                
            });
    }

  return (
    <KeyboardAvoidingView 
        style = {styles.container}
        behavior = "padding">

        {/* Input for user email and password */}
        <View 
            style= {styles.inputContainer}>
            {/*creates text input for email, sets value to email, and calls set email when text changes */}
            <TextInput
                placeholder="Email"
                placeholderTextColor="#DEDEDE"
                value = {email}
                onChangeText={text => setEmail(text)}
                style= {styles.input}
            />
            {/*creates text input for password, sets value to password, and calls set password when text changes 
                make secure so people cannot see what you are typing*/}
            <TextInput
                placeholder="Password"
                placeholderTextColor="#DEDEDE"
                style= {styles.input}
                value = {password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
        </View>

        <View style = {styles.buttonContainer}>
            {/* Submit Button/Login.... Select log in -> flow to home page */}
            <TouchableOpacity 
                  onPress={() => {
                      console.log("Button Pressed");
                      signInUser(); // signs user in (connection to backend)
                      navigation.navigate('Home')
                  }}
                style={styles.button}
                >
                <Text style = {styles.buttonText}> LOG IN </Text>
            </TouchableOpacity>

            {/* Register Button/    Select register -> flow to sign up and survey pages */}
            <TouchableOpacity 
                onPress={() => navigation.navigate('Survey', { email: email })}
                style={[styles.button, styles.buttonOutline]}
                >
                <Text style = {styles.buttonOutlineText}> REGISTER </Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen
