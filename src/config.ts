export default () => ({
  port: process.env['PORT'] || 3030,
  database: {
    uri: process.env['DB_URI'] || 'mongodb://localhost/todos-app',
  },
});
