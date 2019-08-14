FROM nginx

## Copy our default nginx config
COPY ./default.conf /etc/nginx/conf.d/
COPY ./nginx.conf /etc/nginx/nginx.conf

## Place basic token for shopify
# RUN sed -i "s|FQDN|era18.in|g" /etc/nginx/conf.d/default.conf
RUN sed -i "s|BASIC_TOKEN|N2UwMWIyOTdlYTljM2NmMmFjZWYzYjUyMGM2NmEyYmQ6ZTkwZmM4YjY1ZmQ2ZWY2YWU4YTQyZjQ1NGYyNzg3ZTk=|g" /etc/nginx/conf.d/default.conf

## Copy ssl certificates
COPY ./ssl /usr/share/nginx/ssl
COPY ./sites-available /etc/nginx/sites-enabled

CMD ["nginx", "-g", "daemon off;"]