import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),

  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isNotValid: Ember.computed.not('isValidEmail'),

});
