const app = require('./server');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Express now departing from port ${port}!`));
