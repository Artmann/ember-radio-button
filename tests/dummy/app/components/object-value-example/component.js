import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  greenObject: { name: 'green object' },
  blueObject: { name: 'blue object' },
  init() {
    this._super();
    this.set('selectedColorObject', this.get('blueObject'));
  }
});
