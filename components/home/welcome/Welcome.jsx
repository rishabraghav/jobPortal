import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { COLORS, SIZES, icons, images } from '../../../constants'
import { router } from 'expo-router'

const Welcome = () => {
  
  const jobsData = ["Full-Time", "Part-Time", "Contractor"];
  const [activeJobType, setActiveJobType] = useState(jobsData[0]);
  return (
    <View>
      <View>
        <Text style={styles.userName}>Hello Rishabh</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value='' onChange={()=>{}} placeholder="What are you looking for?" placeholderTextColor={COLORS.gray} />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
            <Image source={icons.search} style={styles.searchBtnImage} />
          </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobsData} renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType, item)} 
            onPress={()=> {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )} contentContainerStyle={{columnGap: SIZES.small}} horizontal keyExtractor={item => item}/>
      </View>
    </View>
  )
}

export default Welcome