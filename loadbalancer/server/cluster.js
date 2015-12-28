Cluster.connect('mongodb://'+Meteor.settings.mongo_user+':'+Meteor.settings.mongo_password+'@' + Meteor.settings.mongolab_uri);
Cluster.register('web');