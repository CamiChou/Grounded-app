import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, Button, Image, TextInput, Alert } from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import AwesomeButton from "react-native-really-awesome-button";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function CreateProfile({navigation}) {
    const { user, logout } = useContext(AuthContext);
    const [profilePic, setProfilePic] = useState(null);
    const [text, onChangeText] = React.useState(null);

    const [username, setUsername] = useState(null);
    
    useEffect(() => {
        setProfilePic(user.photoURL);
    }, []); //ComponentDidMount

    return (
        <View style={styles.styledContainer}>
          <Image style={styles.logoImage} source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5f3b0e3f572a30394b94a212/1597705994012-1GI1SWXYAC6JPDVMCDJ3/Ikigai+Logo.png?format=1500w' }} />
          <Text style={styles.pageTitle}>Create Profile</Text>   
          <Image style={styles.profileImage} source={{ uri: 'https://images.theconversation.com/files/104935/original/image-20151208-4898-1tvnkf7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' }} />
          <View style={styles.textBox}>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => setUsername(val)}
              placeholder="Username"
            />
          </View>
          <View style={styles.createButton}>
            <AwesomeButton onPress={() => {
                navigation.navigate('Home', {screen: 'Home'}) }}
              backgroundColor='black' width={150} textSize={20}>Create</AwesomeButton>
            {/* <AwesomeButton onPress={() => Alert.alert('Created')} color="#1d692f" title="Create!" /> */}
          </View>
        </View>

      );

      
} 