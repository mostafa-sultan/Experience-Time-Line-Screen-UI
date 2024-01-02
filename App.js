import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import data from "./data";
export default function App() {
  const jobContentData = data;

  const headerComponent = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Experince Time Line</Text>
        <Text style={styles.headerSubtitle}>21 March -{'>'} 24 may</Text>
      </View>

      <View style={styles.body}>
        <Image source={require('./assets/pic/man/1.jpg')} style={styles.avatar}></Image>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mostafa Sultan</Text>
          <Text style={styles.userRole}>React Native developer</Text>
        </View>
      </View>
    </View>
  )
  const cardJob = (item) => (
    <View style={styles.jobItem}>
      <View style={styles.timeLineContainer}>
        <View style={styles.timeLineDot}></View>
        <View style={styles.timeLineLine}></View>
      </View>
      <View style={styles.jobContent}>
        <View style={styles.jobHours}>
          <Text style={styles.startTime}>{item.item.startTime}</Text>
          <Text style={styles.endTime}>{item.item.endTime}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: item.item.bgColor }]}>
          <Text style={styles.cardTitle}>{item.item.title}</Text>
          <Text style={styles.cardDate}>{item.item.companyName}</Text>

          <FlatList
            contentContainerStyle={{ marginRight: 10 }}
            data={item.item.techStack}
            renderItem={({ item }) => (
              <Image source={item.avatar} style={styles.stackImage}></Image>
            )}
            horizontal
          />
        </View>
      </View>
    </View>

  )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Software Engineer</Text>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={jobContentData}
        ListHeaderComponent={headerComponent}
        renderItem={cardJob}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#be9494',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#5e433a',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,

  },
  header: {
    marginBottom: 8
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 12,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  userRole: {
    fontSize: 12,
    color: '#fff'
  },
  jobItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  timeLineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff7f50',
    marginBottom: 8
  },
  timeLineContainer: {
    width: 30,
    alignItems: 'center'
  },
  timeLineLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#ff7f50'
  },
  jobContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8
  },
  jobHours: {
    marginRight: 8,
    alignItems: 'flex-end'
  },
  startTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  endTime: {
    fontSize: 16
  },
  cardTitle: {
    fontSize: 16,
    color: '#00008B',
    marginBottom: 8
  },
  cardDate: {
    fontSize: 12,
    color: '#00008B',
    marginBottom: 10
  },
  stackImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 3,
    borderWidth: 1,
    borderColor: '#fff',
  }


})