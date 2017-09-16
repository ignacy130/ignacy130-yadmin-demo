Template.hello.helpers({
    posts: function(){
        return Posts.find().fetch();
    }
})