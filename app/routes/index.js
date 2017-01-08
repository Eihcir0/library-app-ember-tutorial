import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('invitation');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('headerMessage', 'Coming Soon, mmkay?');
    controller.set('responseMessage', '');
    model.set('email', '');
  },

  renderTemplate() {
    this.render('index');
  },

  actions: {
    saveInvitation() {
      const model = this.controller.get('model');
      const email = model.get('email');
      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.controller.set('responseMessage', `Thank you, yo!!! We just saved the damn email address (dat id though: ${response.get('id')})`);
      });

      model.set('email', ' ');
    },

    willTransition() {
      let model = this.controller.get('model');

      model.rollbackAttributes();
      this.controller.set('responseMessage', false);
    },
  }
});
