const client = require('seneca')({legacy: {meta: true}});

client
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:ping',
    url: 'amqp://localhost:5672/seneca'
  });

client
  .act({cmd:'ping'}, {name: "Billy Bob"}, function (err, response) {
    console.log(response);
  }).close();
