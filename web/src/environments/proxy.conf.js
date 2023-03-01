// if (!PROXIES) {
//   console.log(`Gateway configuration file - 'proxies.json' could not be found.`);
//   process.exit(1);
// }

module.exports = [
  {
    context: ['/api'],
    target: 'http://127.0.0.1:3000/',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
];
