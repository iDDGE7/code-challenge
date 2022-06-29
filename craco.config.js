const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@state": path.resolve(__dirname, "src/state"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@services": path.resolve(__dirname, "src/services"),
            "@reducers": path.resolve(__dirname, "src/reducers"),
        },
    },
};
