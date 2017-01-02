import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveContact(newContact) {
      newContact.save().then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    },
  }

});

// old controller
// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   emailAddress: '',
//   message: '',
//   actions: {
//     saveContact() {
//       const email = this.get('emailAddress')
//       const message = this.get('message')
//
//       const newContact = this.store.createRecord('contact', {
//         email: email,
//         message: message,
//       })
//
//       newContact.save().then((response) => {
//         this.set('responseMessage',`Thanks my man.  We just saved dis shit: ${this.get('message')} with id ${response.get('id')}`);
//         this.set('emailAddress','');
//         this.set('message','');
//       })
//     }
//   }
// })
