import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import styles from './nearbyjobs.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'

const Nearbyjobs = () => {
  const {data, loading, error} = useFetch('search', {
    query: 'React developer, India',
    num_pages: 1,
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
            data?.map((item) => (
              <NearbyJobCard item={item} key={item} />
            ))
        )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs;