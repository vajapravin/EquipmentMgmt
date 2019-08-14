FROM ubuntu

RUN apt-get update && apt-get install -y nodejs vim npm build-essential libxml2 openssl curl gnupg

RUN ln -s /usr/bin/nodejs /usr/local/bin/node

RUN mkdir /dist /node_modules

COPY dist/ /dist

COPY ./run_app.sh /dist

COPY ./node_modules /node_modules

CMD ["/bin/bash", "/dist/run_app.sh"]]