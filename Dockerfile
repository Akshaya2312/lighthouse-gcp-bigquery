FROM sitespeedio/sitespeed.io:12.11.0-plus1

ENV SITESPEED_IO_PLUGINS__ADD /lighthouse-gcp-bigquery

WORKDIR /lighthouse-gcp-bigquery
ADD index.js /lighthouse-gcp-bigquery/index.js
ADD package.json /lighthouse-gcp-bigquery/package.json

RUN npm install --production

VOLUME /sitespeed.io
WORKDIR /sitespeed.io