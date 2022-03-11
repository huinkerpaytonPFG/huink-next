const cypressUtilsPlugin = require("@ris/cypress-utils/src/plugin");

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	return cypressUtilsPlugin(on, config, {
		prodBaseUrl: "https://www.huink.dev",
	});
};
