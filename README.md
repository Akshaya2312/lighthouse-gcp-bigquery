# lighthouse-gcp-bigquery-plugin

## To use this plugin run following command from the root of the project

`docker run --rm -v "$(pwd):/sitespeed.io" -v "$(pwd):/sitespeed.io/lighthouse-gcp-bigquery" sitespeedio/sitespeed.io:13.3.2-plus1 -b chrome --plugins.add /lighthouse --plugins.add /sitespeed.io/lighthouse-gcp-bigquery -n 1 https://www.sitespeed.io/`