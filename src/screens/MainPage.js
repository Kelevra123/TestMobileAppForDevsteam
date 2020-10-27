import React, {useState, useEffect} from 'react';
import { 
          Image,
          View, 
          Text, 
          StyleSheet, 
          Dimensions, 
          FlatList, 
          TouchableHighlight,
      } from 'react-native';
import ImgService from '../service';


const MainPage = ({navigation, route}) => {
    const [img, setImg] = useState([]);
    const [page, setPage] = useState(1);
  
    const service = new ImgService();
  
  
  
useEffect(()  => {
      service.getImagesByPageNum(page)
      .then(res => setImg(res))
  }, [page])


const content = ({ item }) =>  (
   <TouchableHighlight 
   underlayColor='rgba(73,182,77,1,0.9)' 
   onPress={() => navigation.navigate('FullSize', {item: item})}
   >
   <View  style={styles.container}>
       <Image 
           source={{
               uri: item.small
           }}
           style={styles.photo}
           >
       </Image>
       <Text style={styles.name}>{item.name}</Text>
       <Text style={styles.title}>{item.title}</Text>
       </View>
       </TouchableHighlight>
);
  
  
      return (
          <View>
            <FlatList
                onRefresh={() => setPage(prev => prev + 1)}
                refreshing={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={img}
                renderItem={content}
                keyExtractor={item => item.id}
            />
          </View>
      )
}

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const imgNumColumn = 2;
const IMAGE_ITEM_HEIGHT = 150;
const iMAGE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: iMAGE_ITEM_MARGIN,
        marginTop: 20,
        width: (SCREEN_WIDTH - (imgNumColumn + 1) * iMAGE_ITEM_MARGIN) / imgNumColumn,
        height: IMAGE_ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15
      },
      photo: {
        width: (SCREEN_WIDTH - (imgNumColumn + 1) * iMAGE_ITEM_MARGIN) / imgNumColumn,
        height: IMAGE_ITEM_HEIGHT,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      title: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      name: {
        marginTop: 5,
        marginBottom: 5
      }
})

export default MainPage;