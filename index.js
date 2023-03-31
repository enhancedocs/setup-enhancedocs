const core = require('@actions/core');

core.setSecret(process.env['INPUT_API-KEY']);
core.exportVariable("ENHANCEDOCS_API_KEY", process.env['INPUT_API-KEY']);
