import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, VirtualizedList } from 'react-native';
import { fetchProducts } from '../actions/FetchActions';

class FetchPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }


  render() {
    const { error, loading, products } = this.props;
    if (loading) {
      return <Text>Loading</Text>
    }

    const data = Object.values(products)
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <View style={{ flexDirection: 'row', }}>
        </View>
        <VirtualizedList
          data={data}
          getItemCount={data => data.length}
          getItem={(data, index) => ({
             key: index,
             title: data[index].title,
             body: data[index].body,
           })
          }
          ItemSeparatorComponent={() => (
            <View style={[{  height: 1, backgroundColor: 'grey' }]} />
            )}
          renderItem={({ item: { body, title } }) => {
            return (
              <View>
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                <Text>{body}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  products: state.fetch.items,
  loading: state.fetch.loading,
  error: state.fetch.error
});

export default connect(mapStateToProps)(FetchPage);
