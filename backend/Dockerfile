FROM ruby:2.3.1
MAINTAINER vajapravin23@gmail.com

# Define where our application will live inside the image
ENV HOME /app
ENV RAILS_ROOT ${HOME}

# Create application home. App server will need the pids dir and log so just create everything in one shot
RUN mkdir -p $RAILS_ROOT/tmp/pids $RAILS_ROOT/log

# Set our working directory inside the image
WORKDIR $RAILS_ROOT

# Install essential Linux packages
RUN apt-get update && apt-get install -y nodejs vim --no-install-recommends build-essential libxml2 openssl curl && rm -rf /var/lib/apt/lists/*

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true

COPY Gemfile Gemfile.lock ./
RUN bundle config --global frozen 1
RUN bundle install --without development test --jobs 20 --retry 5

COPY . .

CMD [ "./run_app.sh" ]