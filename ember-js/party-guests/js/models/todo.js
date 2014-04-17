Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Teresa Cursons',
   isCompleted: false
 },
 {
   id: 2,
   title: 'Dan Reeves',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Seb Short',
   isCompleted: true
 }
];