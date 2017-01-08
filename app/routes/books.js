import Ember from 'ember';
export default Ember.Route.extend({

  model() {
    return this.store.findAll('book');
  },

  actions: {

    editBook(book) {
      book.set('isEditing', true);
    },

    cancelAuthorEdit(book) {
      book.set('isEditing', false);
      book.rollbackAttributes();
    },

    saveBook(book) {

      if (book.get('isNotValid')) {
        return;
      }

      book.set('isEditing', false);
      book.save();
    }
  }
});
