const path = require('path');
const fs = require('fs');
const converter = require('json-2-csv');
const { Storage } = require('@google-cloud/storage');

const GOOGLE_CLOUD_PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID;
const GOOGLE_CLOUD_KEYFILE = process.env.GOOGLE_CLOUD_KEYFILE;
const BUCKET_NAME = process.env.BUCKET_NAME;

let filename;

const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});

module.exports = {
  concurrency: 1,
  name() {
    return 'lighthouse-gcp-bigquery';
  },

  open(context, options) {
    this.log = context.intel.getLogger(
      'sitespeedio.plugin.lighthouse-gcp-bigquery'
    );
  },

  async processMessage(message, queue) {
    filename = `./pageSummary_${Date.now()}.csv`;
    const log = this.log;
    switch (message.type) {
      case 'lighthouse.pageSummary': {
        await converter
          .json2csvAsync(message)
          .then((csv) => {
            fs.writeFileSync(filename, csv);
            log.info(`${filename} captured`);
          })
          .catch((err) => {
            log.error('csv not captured', err);
          });
        await storage
          .bucket(BUCKET_NAME)
          .upload(filename)
          .then((d) => log.info('data uploaded to GCP cloud bucket', d))
          .catch((err) => log.error('error uploading the file to gcp', err));
        break;
      }
    }
  },

  close(options, errors) {},
};
