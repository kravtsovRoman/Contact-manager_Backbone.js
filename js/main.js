var Person = Backbone.Model.extend({
  defaults: {
    name: 'Roma',
    age: '31',
    job: 'Frontend'
  },

  walk: function() {
    return this.get('name') + 'is walking';
  },

  validate: function(attrs) {
    console.log(attrs);
    if (attrs.age <= 0) {
      return 'Djphfcn yt vj;tn ,snm vtymit';
    }
  }
});

var person = new Person();

person.set('age', -25);
