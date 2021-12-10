const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack5: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        // remoteType: "var",
        name: "MainApp",
        library: {
          type: "var",
          name: "MainApp",
        },
        remotes: {
          app2: "app2",
        },
        shared: {
          react: {
            // Notice shared ARE eager here.
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    // const mfConf = {
    //   remoteType: "var",
    //   remotes: {
    //     app2: "app2",
    //   },
    //   shared: {
    //     react: {
    //       // Notice shared ARE eager here.
    //       eager: true,
    //       singleton: true,
    //       requiredVersion: false,
    //     },
    //   },
    // };
    // withFederatedSidecar(config, options, mfConf);

    return config;
  },
};
