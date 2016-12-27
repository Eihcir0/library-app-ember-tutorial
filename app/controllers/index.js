// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is IN PROGRESS, aight?? ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you, yo!!! We just saved the damn email address (dis one: ${this.get('emailAddress')})`);
      this.set('emailAddress','');
    }
  }

});
