# lighthouse-gcp-bigquery-plugin for sitespeed.io

## To use this plugin run following command from the root of the project

`docker run --rm -v "$(pwd):/sitespeed.io" -v "$(pwd):/sitespeed.io/lighthouse-gcp-bigquery" -e GOOGLE_CLOUD_KEYFILE="/sitespeed.io/devops_service_account_key.json" -e BUCKET_NAME="<BUCKET_NAME>" -e GOOGLE_CLOUD_PROJECT_ID="<GOOGLE_CLOUD_PROJECT_ID>" sitespeedio/sitespeed.io:13.3.2-plus1 -b chrome --plugins.add /lighthouse --plugins.add /sitespeed.io/lighthouse-gcp-bigquery -n 1 https://www.sitespeed.io/`

### To build docker image

`docker build . -t lighthouse-gcp-bigquery:0.1`

```
docker run --rm -v "$(pwd):/sitespeed.io" -e GOOGLE_APPLICATION_CR
EDENTIALS="/sitespeed.io/devops_service_account_key.json" -e BUCKET_NAME="lighthouse_devops" lh:0.1 -b chrome --plugins.ad
d /lighthouse --plugins.add /lighthouse-gcp-bigquery -n 1 https://www.sitespeed.io/
```