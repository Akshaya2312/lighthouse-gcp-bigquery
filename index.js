const path = require('path');
const fs = require('fs');
const converter = require('json-2-csv');

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
          converter.json2csvAsync(message).then(csv => {
            fs.writeFileSync('lighthouse.pageSummary.csv', csv);
            log.info('lighthouse.pagesummary.csv captured');
          }).catch(err => {
            log.error('lighthouse.pagesummary.csv not captured', err)
          });
          break;
        }
    }
  },
  close(options, errors) {
    fs.unlinkSync('lighthouse.pageSummary.csv');
  }
};
