Template.loadbalancer.onCreated(function() {
  Meteor.call('rootUrl', function(err, result) {
  	if (err) console.error(err);
    console.log(result);
    Session.set('ROOT_URL', result);
  });
});

Template.loadbalancer.helpers({
  rootUrl: function () {
    return Session.get('ROOT_URL') || '';
  }
});

