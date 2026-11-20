const app = require('./app');
const eurekaClient = require('./config/eureka');

const PORT = Number(process.env.PORT) || 8083;

app.listen(PORT, () => {
  console.log(`Meeting service sur le port ${PORT}`);
  eurekaClient.start((err) =>
      console.log(err ? 'Erreur Eureka: ' + err : 'Enregistré dans Eureka')
  );
});

process.on('SIGINT', () => eurekaClient.stop(() => process.exit()));


