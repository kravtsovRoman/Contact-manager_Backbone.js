//создаем прототип нашего объекта или модели
var RocketModel = Backbone.Model.extend({
  defaults: {
    name: 'name',
    description: 'desc',
    size: 100
  },
  initialize: function() {},
  validate: function(attrs) {
    if (!attrs.size > 0) {
      console.log('Не допустимый размер');
      return 'Не допустимый размер';
    }
  }
});

var RocketsCollection = Backbone.Collection.extend({});
