import Ember from 'ember';
export default Ember.Controller.extend({
  color: 'green',
  number: 'one',
  numbersDisabled: true,
  noDefault: '',
  actions: {
    colorChanged(color) {
      window.alert(`Color changed to ${color}`);
    }
  },
  reservation: Ember.Object.create({
    number: 'one'
  })
});
