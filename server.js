const server = require('seneca')();

server
  .use('seneca-amqp-transport')
  .add('cmd:ping', function(args, done) {
    done(null, {result: `Name: ${args.name}`});
  })
  .listen({
    type: 'amqp',
    pin: 'cmd:ping',
    url: 'amqp://localhost:5672/seneca'
});