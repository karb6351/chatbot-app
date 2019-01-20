import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'

import resolveAssetSource from 'resolveAssetSource';

export default class ImageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0,
    }
  }

  componentDidMount(){

    let dummyImage =  require('../../asset/images/test.jpeg'); 
    let source = resolveAssetSource(dummyImage);
    const screenWidth = Dimensions.get('window').width;
    const scaleFactor = source.width / screenWidth
    const imageHeight = source.height / scaleFactor
    this.setState({
      imageHeight: imageHeight
    })
    
    // Image.getSize(this.props.source, (width, height) => {
      // const screenWidth = Dimensions.get('window').width;
      // const scaleFactor = width / screenWidth
      // const imageHeight = height / scaleFactor
    //   this.setState({
    //     imageWidth: screenWidth,
    //     imageHeight: imageHeight
    //   })
    // })
  }

  // measureSize(event){
  //   const width = event.nativeEvent.layout.width;
  //   const height = event.nativeEvent.layout.height;
  //   const scaleFactor = source.width / screenWidth
  //   const imageHeight = source.height / scaleFactor
  // }
  
  render() {
    const { imageHeight } = this.state
    const { source, title } = this.props
    return (
      <View style={styles.imageContainer} 
      // onLayout={(event) => this.measureSize(event)}
      >
        <Image source={source} style={{...styles.image, height: imageHeight}} />
        <Text style={styles.imageTitle}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
		position: 'relative',
		width: 'auto',
		height: 'auto'
  },
  image:{
    width: null
  },
	imageTitle: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		paddingVertical: 5,
		paddingHorizontal: 12,
		backgroundColor: 'rgba(102, 96, 96, 0.36)',
    color: '#ffffff',
    fontSize: 24
	},
})
