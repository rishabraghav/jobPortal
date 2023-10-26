import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './popularjobcard.style'
import { isImage } from '../../../../utils'

const PopularJobCard = ({item, selectedJob, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => {
      if(item.job_apply_link) {
        Linking.openURL(item.job_apply_link)
      } else {
        console.warn("No link to open")
      }
    
    }}>
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image source={{uri: isImage(item.employer_logo)? item.employer_logo : "https://www.jobbank.gc.ca/themes-jb/images/match/searching-for-job.svg"}} style={styles.logoImage} />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
          <Text style={styles.location}>{item.job_city}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard