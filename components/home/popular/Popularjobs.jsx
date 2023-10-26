import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {
  const {data, loading, error} = useFetch('search', {
    query: 'React developer, India',
    num_pages: 1,
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList style={styles.cardsContainer} data={data} renderItem={({ item }) => (
            <PopularJobCard item={item} />
          )} horizontal contentContainerStyle={{columnGap: SIZES.medium}}/>
        )
        }
      </View>
    </View>
  )
}

export default Popularjobs