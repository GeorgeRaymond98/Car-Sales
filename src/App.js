import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature, updateTotal } from './actions/featureAction'

const App = (props) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    // console.log(item)
    props.removeFeature(item);
    props.updateTotal(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    // console.log(item)
    props.updateTotal(item.price)
  };
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures removeFeature={removeFeature} additionalFeatures={props.additionalFeatures} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps ({car,additionalFeatures,additionalPrice}) {
  return {
    car: car,
    additionalFeatures: additionalFeatures,
    additionalPrice:additionalPrice
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature, updateTotal })(App);