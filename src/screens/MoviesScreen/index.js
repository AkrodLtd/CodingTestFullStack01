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
  addToWatchlist,
  removeFromWatchlist,
} from '../../redux/watchlist/actions';

class MoviesScreen extends Component {
  state = {
    shouldRefresh: false,
  };

  componentDidMount() {
    const {allMovies} = this.props;
    if (allMovies.length < 1) {
      this.props.fetchMovies({page: 1});
    }

    this.props.navigation.addListener('focus', () =>
      this.setState({shouldRefresh: !this.state.shouldRefresh}),
    );
  }

  componentWillUnmount() {
    this.props.clearMovies();
  }

  isMovieInWatchlist = movie => {
    const {allWatchlist} = this.props;
    if (!movie) {
      return false;
    }

    return allWatchlist.some(item => item.id === movie.id);
  };

  updateWatchlist = (item, isInWatchlist) => {
    this.setState({shouldRefresh: !this.state.shouldRefresh});
    if (isInWatchlist) {
      this.props.removeFromWatchlist(item);
    } else {
      this.props.addToWatchlist(item);
    }
  };

  fetchMore = () => {
    const {currentPage} = this.props;
    const nextPage = parseInt(currentPage, 10) + 1;

    this.props.fetchMovies({page: nextPage});
  };

  filterMovies = searchPhrase => {
    const {allMovies} = this.props;
    const searchResults = allMovies.filter(
      movie =>
        movie.title.includes(searchPhrase) ||
        movie.overview.includes(searchPhrase),
    );
    this.setState({searchResults});
  };

  renderItem = ({item}) => {
    const isInWatchlist = this.isMovieInWatchlist(item);
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
          style={[
            styles.watchlistButton,
            isInWatchlist ? styles.filledButtton : styles.emptyButton,
          ]}
          onPress={() => this.updateWatchlist(item, isInWatchlist)}>
          <Text
            style={[
              styles.buttonText,
              isInWatchlist ? styles.whiteText : styles.darkText,
            ]}>
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  _keyExtractor = (item, index) => `moviesItem${item.id}-${index}`;

  render() {
    const {loading, allMovies} = this.props;
    const {searchPhrase, searchResults} = this.state;
    const dataSource = searchPhrase ? searchResults : allMovies;
    return (
      <View style={styles.screen}>
        <View style={styles.screenHeader}>
          <Text style={styles.screenTitle}>Movies</Text>
          <TextInput
            placeholder="Filter movies"
            style={styles.textInput}
            onChangeText={text => {
              this.setState({searchPhrase: text});
              this.filterMovies(text);
            }}
          />
        </View>
        {loading ? (
          <ActivityIndicator color="blue" />
        ) : (
          <FlatList
            keyExtractor={this._keyExtractor}
            contentContainerStyle={styles.contentContainerStyle}
            data={dataSource}
            extraData={this.state}
            style={styles.flatList}
            renderItem={this.renderItem}
            onEndReached={!searchPhrase && this.fetchMore}
          />
        )}
        {!!loading && (
          <View style={styles.fetchingContainer}>
            <Text>Fetching more...</Text>
            <ActivityIndicator color="blue" />
          </View>
        )}
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
  loading: state.movies.loading,
  allMovies: state.movies.allMovies,
  currentPage: state.movies.page,
  allWatchlist: state.watchlist.allWatchlist,
});
const mapDispatchToProps = dispatch => ({
  fetchMovies: payload => dispatch(fetchMovies(payload)),
  clearMovies: () => dispatch(clear()),
  addToWatchlist: payload => dispatch(addToWatchlist(payload)),
  removeFromWatchlist: payload => dispatch(removeFromWatchlist(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
