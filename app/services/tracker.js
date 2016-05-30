import Ember from 'ember';

export default Ember.Service.extend({
  getNews() {
    return new Ember.RSVP.Promise((success, reject) => {

      let event_object = {
        'os': 'osx',
        'os_version': 'demo',
        'last_update': '2015-10-10'
      };

      $.ajax({
        url: "http://localhost:4000/api/events",
        type: "POST",
        contentType: "application/json",

        data: JSON.stringify({"event": event_object}),
        dataType: "json"
      }).then((data) => {
        success(data);
      });
    });
  }
});
