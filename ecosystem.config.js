module.exports = {
  apps: [
    {
      name: "atrium-dev",
      script: "dev-server.js",
      cwd: "C:\\severinnhq\\atrium",
      env: { NODE_ENV: "development", PORT: "3000" },
      watch: false,
      autorestart: true,
    },
  ],
};
