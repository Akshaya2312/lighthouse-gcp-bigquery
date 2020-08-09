# lighthouse-gcp-bigquery-plugin

## To use this plugin run following command from the root of the project

`docker run --rm -v "$(pwd):/sitespeed.io" -v "$(pwd):/sitespeed.io/lighthouse-gcp-bigquery" -e GOOGLE_APPLICATION_CREDENTIALS="/sitespeed.io/devops_service_account_key.json" -e BUCKET_NAME="<BUCKET_NAME>" sitespeedio/sitespeed.io:13.3.2-plus1 -b chrome --plugins.add /lighthouse --plugins.add /sitespeed.io/lighthouse-gcp-bigquery -n 1 https://www.sitespeed.io/`