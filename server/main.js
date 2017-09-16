import { Meteor } from 'meteor/meteor';

if (Meteor.users.find().count() == 0) {
  var profile = {
      name: 'Sacha Greif',
      email: "sacha@example.com",
      phone: 555999000,
  };
  var u = {
      userProfile: profile,
      password: "123456"
  };
  var adminId = Accounts.createUser(u);   
}

Meteor.startup(() => {
  // code to run on server at startup
  AdminDashboard.addSidebarItem('New post', AdminDashboard.path('/Posts/new'), { icon: 'plus' })
});

