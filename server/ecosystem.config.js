module.exports = {
  apps: [
    {
      name: "app1",
      script: "./app.js",
      env: {
        PORT: 9000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 9000,
        NODE_ENV: "production",
      },
    },
  ],
};
