Template.login.events({
    'click #logout': function (e) {
        e.preventDefault();
        Meteor.logout();
        return false;
    }
});