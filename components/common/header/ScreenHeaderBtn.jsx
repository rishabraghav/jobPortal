import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconURL, dimensions}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconURL} 
        resizeMode='cover'
          style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn