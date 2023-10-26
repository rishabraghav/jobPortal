import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './nearbyjobcard.style'
import { isImage } from '../../../../utils'

const NearbyJobCard = ({item, selectedJob, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      if(item.job_apply_link) {
        Linking.openURL(item.job_apply_link)
      } else {
        console.warn("No link to open")
      }
    
    }}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={{uri: isImage(item.employer_logo)? item.employer_logo : "https://www.jobbank.gc.ca/themes-jb/images/match/searching-for-job.svg"}} style={styles.logoImage} />
        </TouchableOpacity>
        {/* <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text> */}
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
          <Text style={styles.jobType}>{item.job_employment_typec}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard