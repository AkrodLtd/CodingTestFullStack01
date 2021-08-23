import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchMovies, clear} from '../../redux/movies/actions';
import {
  removeFromWatchlist,
} from '../../redux/watchlist/actions';

class WatchlistScreen extends Component {
  state = {
    shouldRefresh: false,
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () =>
      this.setState({shouldRefresh: !this.state.shouldRefresh}),
    );
  }

  updateWatchlist = item => {
    this.setState({shouldRefresh: !this.state.shouldRefresh});

    this.props.removeFromWatchlist(item);
  };

  _keyExtractor = (item, index) => `watchlistItem${item.id}-${index}`;

  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemTitle}>{item?.title}</Text>
          <View style={styles.itemVoteContainer}>
            <Text style={styles.vote}>{item?.vote_average}</Text>
          </View>
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {item?.overview}
        </Text>
        <TouchableOpacity
          style={[styles.watchlistButton, styles.filledButtton]}
          onPress={() => this.updateWatchlist(item)}>
          <Text style={[styles.buttonText, styles.whiteText]}>
            Remove from Watchlist
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {allWatchlist} = this.props;
    return (
      <View style={styles.screen}>
        <View style={styles.screenHeader}>
          <Text style={styles.screenTitle}>Watchlist</Text>
        </View>

        <FlatList
          keyExtractor={this._keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
          data={allWatchlist}
          extraData={this.state}
          style={styles.flatList}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  screenHeader: {
    paddingTop: 50,
    marginBottom: 15,
  },
  screenTitle: {
    fontSize: 35,
    fontWeight: '900',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  flatList: {
    paddingBottom: 42,
  },
  item: {
    flex: 1,
    marginVertical: 15,
  },
  itemHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemVoteContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  vote: {
    fontWeight: 'bold',
  },
  textInput: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 100,
    fontSize: 18,
  },
  fetchingContainer: {
    position: 'absolute',
    bottom: 62,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  watchlistButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 12,
    borderRadius: 6,
  },
  filledButtton: {
    backgroundColor: 'grey',
  },
  emptyButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  darkText: {
    color: 'grey',
  },
  whiteText: {
    color: 'white',
  },
});

const mapStateToProps = state => ({
  allWatchlist: state.watchlist.allWatchlist,
});
const mapDispatchToProps = dispatch => ({
  removeFromWatchlist: payload => dispatch(removeFromWatchlist(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistScreen);
