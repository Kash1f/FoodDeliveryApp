import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../constants'

const Categories = () => {
    return (
      <View>
       <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false} 
          className="overflow-visible"
          contentContainerStyle={
              styles.contentContainer
          }>

          {/* mapping through all the categories */}
            {
                categories.map((category, index)=>{
                    return(
                        <View key={index} style={styles.categories}>
                 <TouchableOpacity style={styles.categoriesContent}>

                 </TouchableOpacity>
                        </View>
                    )
                    
                    
                })
            }
  
       </ScrollView>
      </View>
    )
  }
export default Categories

const styles = StyleSheet.create({
    contentContainer:{
        padding:20
    },
    categories:{
        flexDirection:'row',
         justifyContent:'center',
         alignItems:'center',
         marginRight:24
    },
    categoriesContent:{
        padding: 4,
        borderRadius: 999,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5, // shadow
          backgroundColor: '#E5E7EB', // bg-gray-200

    }
})