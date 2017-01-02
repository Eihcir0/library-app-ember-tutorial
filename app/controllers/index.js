// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you, yo!!! We just saved the damn email address (dat id though: ${response.get('id')})`);
        this.set('emailAddress', '');
      });
    }
  }
});
