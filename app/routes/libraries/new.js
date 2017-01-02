import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('library')
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'))
    },

    willTransition() {
      const model = this.controller.get('model')

      if (model.get('isNew')) {
        model.destroyRecord()
      }

      this.controller.set('responseMessage', false);

    }
  }
});
