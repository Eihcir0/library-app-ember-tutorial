import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isValidMessage: Ember.computed.gte('message.length',5),

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isValid: Ember.computed.and('isValidEmail','isValidMessage'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveContact() {
      alert('Saving message');
      this.set('responseMessage',`Thanks my man.  We just saved dis shit: ${this.get('message')}`);
      this.set('emailAddress','');
      this.set('message','');
    }
  }


});
