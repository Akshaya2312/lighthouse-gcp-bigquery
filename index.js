const path = require('path');
const fs = require('fs');

module.exports = {
  concurrency: 1,
  name() {
    return 'lighthouse-gcp-bigquery';
  },

  open(context, options) {
    this.log = context.intel.getLogger('sitespeedio.plugin.lighthouse-gcp-bigquery');
  },
  processMessage(message, queue) {
    const log = this.log;
    switch(message.type) {
        case 'lighthouse.pageSummary': {
            fs.writeFileSync("lighthouse.audit.json", JSON.stringify(message)); 
            log.info('lighthouse.audit captured');
            break;
        }
    }
  },
  close(options, errors) {
    // When all URLs are finished all plugins close function is called once.
    // Options are the configuration options and errors a array of errors
    // from the run.
  }
};
