import Ember from 'ember';

export default Ember.Route.extend({
  tray: Ember.inject.service(),

  activate() {
    this.get("tray");
  }

});
