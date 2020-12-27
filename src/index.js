const { connect } = require('./config/database');
const app = require('./server');

const PORT = process.env.PORT || 5070;

connect();
app.listen(PORT, () => logger.debug(`Running on Port ${PORT}`));
