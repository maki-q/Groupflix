import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { MovieCard } from './MovieCard';

export class CustomCarousel extends React.Component {

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
    this.state = {
      index: 1
    }
  }

  _renderItem({ item }) {
    return <MovieCard data={item} selectVideo={this.props.selectVideo} watched={this.props.watched} friendsBucket={this.props.friendsBucket} selectedFriends={this.props.selectedFriends}/>
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', padding: 10, paddingLeft: 55, fontSize: 18}}>{this.props.title}</Text>
        <Carousel
          ref={(c) => this.carousel = c}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={275}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true}
          loop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  }
});