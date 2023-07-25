import React , {useState} from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import styles from '../../styles/Survey.screen.style'
import DropDownPicker from 'react-native-dropdown-picker';
import { PrivateValueStore } from '@react-navigation/native';

/*
 * Function here handles last page of form : Gym Preferences
 * Here has 1 Dropdown with the types of workouts you can select
 * Uses react-native-dropdown-picker and use state
 */

const WorkoutPreference = ({formData, setFormData}) => {
  
  //creates the use states for the dropdown and specifies the items (workouts)

  //creates open state and function associated (whether dropdown is open or not)
  const [open, setOpen] = useState(false);

  //creates value state and function associated (list of selected items)
  const [value, setValue] = useState(null);

  //creates items and set items  function associated (items to fill the dropdown)
  const [items, setItems] = useState([
    {label: 'Swimming', value: 'swimming'},
    {label: 'Running', value: 'running'},
    {label: 'Weight Lifting', value: 'weights'},
    {label: 'Soccer', value: 'soccer'},
    {label: 'Baseball', value: 'baseball'},
    {label: 'Volleyball', value: 'volleyball'},
    {label: 'Dance', value: 'dance'},
    {label: 'Spin', value: 'spin'},
    {label: 'Cardio', value: 'cardio'},
    {label: 'Biking', value: 'bike'}
   
  ]);


  //onpress function sends values selected to form
  const handleOnpress=(item)=>{
    formData.workouts = item;

    //prints form data in console to check updating correctly
    //console.log(formData);
  }
  return (
    
    <View style={styles.workoutContainer}>

    <TouchableOpacity  onPress={()=>handleOnpress(value)}>
        {/* Creates Dropdown object and fills values with use states we defines
          allows you hit multiple and creates color associations*/}
      <DropDownPicker
      style = {styles.availabilityDropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue = {setValue}
        
        setItems={setItems}
        multiple={true}
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} 
      />
      </TouchableOpacity>
      </View>
  );
}

export default WorkoutPreference;
