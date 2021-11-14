const { app, PORT } = require('./config/server.js');

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));