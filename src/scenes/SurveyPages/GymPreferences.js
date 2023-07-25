import React , {useState} from 'react';
import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import styles from '../../styles/Survey.screen.style'

/*
 * Function here handles last page of form : Gym Preferences
 * Here has 3 Sets of Buttons: Time, Gym, and How Often
 * They each have their own data and select/use state declarations
 * Then we using a flatlist, buttons are created using data horizantally
 */


const GymPreferences = ({formData, setFormData}) => {

//Form Option/Data for Time (how long you spend working out)   
const timeData = [{id: 1, dataa:"30mins", selected: false},
{id: 2,dataa:"45min", selected: false}, 
{id: 3,dataa:"1hr", selected: false}, 
{id: 4,dataa:"1.5 hrs", selected: false}
];

//Form Option/Data for gym (Where you prefer to workout)   
const gymData = [{id: 1, dataa:"NICK", selected: false},
{id: 2,dataa:"Lakeshore ", selected: false}, 
{id: 3,dataa:"Barre", selected: false}, 
{id: 4,dataa:"Shell", selected: false}
];

//Form Option/Data for frequency (How often you want to go to the gym)   
const frequencyData = [{id: 1, dataa:"1x", selected: false},
{id: 2,dataa:"2-3x ", selected: false}, 
{id: 3,dataa:"4-5x", selected: false}, 
{id: 4,dataa:"6-7x", selected: false}
];


// use state functions, sets item as selected for each form... creates those functions
const [selectTime, setSelectTime]= useState(timeData)
const [selectGym, setSelectGym]= useState(gymData)
const [selectFrequency, setSelectFrequency]= useState(frequencyData)
//console.log("sl",selectTime)

/* If you press a button, handles the click
  takes the item pressed, corresponding select, and correposing set select as parameter
  gets items id, and sets the select
 
*/
const handleOnpress=(item, selectt, func)=>{
  // creates mapping from selectt
  const newItem = selectt.map((val)=>{
   
    //find data of button that was selected
    if(val.id==item.id){

       //changes selected to values opposite (true if false and false if true)
      return {...val, selected: !val.selected}
    }else{
      return val;
    }
  })
  //returns item
  func(newItem);
  
  //update form data for all buttons so reflects most current pressed
  formData.gym = selectGym;
  formData.length = selectTime;
  formData.frequency = selectFrequency;

  //logs form data in console to check if working
  //console.log(formData);
}
   
  return (
  
    <View style={styles.availabilityBigContainer}>
      
      <View style={styles.selectButtonContainer}>
      <Text> Length of Excersize</Text>
      {/* Buttons for Time... select Horizantal and use Keys to fill data... render the iten based on data */}
    <FlatList
     horizontal={true}
      data={selectTime}
      keyExtractor={item => item.id}
      renderItem= {({item}) =>{
        {/* Call on press functoin from above
            Change backhround color, text color, and border color if selected or not
            return the .data part of element */}
        return(
          
          <TouchableOpacity  onPress={()=>handleOnpress(item, selectTime,setSelectTime )}>
          <View >
            <Text  style={[styles.selectButton,{ backgroundColor: item.selected ? "white" : "#0782F9" ,
                                                  color: item.selected ?"#0782F9" :'white',
                                                  borderColor : item.selected ? '#0782F9': "white" 
                                                }]}>{item.dataa}</Text>
          </View>
          </TouchableOpacity>
          
        )
      }}
    />


  {/* Buttons for Gym Location... select Horizantal and use Keys to fill data... render the iten based on data */}
    <Text> Where to Work Out</Text>
    <FlatList
    horizontal={true}
     data={selectGym}
     keyExtractor={item => item.id}
     renderItem= {({item}) =>{
       {/* Call on press functoin from above
            Change backhround color, text color, and border color if selected or not
            return the .data part of element */}
       return(
         <TouchableOpacity  onPress={()=>handleOnpress(item, selectGym,setSelectGym )}>
         <View >
           <Text  style={styles.selectButton}>{item.dataa}</Text>
         </View>
         </TouchableOpacity>
         
       )
     }}
     />

      {/* Buttons for Gym Location... select Horizantal and use Keys to fill data... render the iten based on data */}
    <Text> How Often do you want to work out</Text>
    <FlatList
    horizontal={true}
     data={selectFrequency}
     keyExtractor={item => item.id}
     renderItem= {({item}) =>{
       {/* Call on press functoin from above
            Change backhround color, text color, and border color if selected or not
            return the .data part of element */}
       return(
         <TouchableOpacity  onPress={()=>handleOnpress(item, selectFrequency,setSelectFrequency )}>
         <View >
           <Text  style={styles.selectButton}>{item.dataa}</Text>
         </View>
         </TouchableOpacity>
         
       )
     }}
   />
    </View>
    </View>
            
  );

  
  
}



export default GymPreferences;
