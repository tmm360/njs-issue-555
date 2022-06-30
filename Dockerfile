FROM nginx

# Copy configurations
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy configuration template adding .template suffix
COPY ./nginx/templates/default.conf /etc/nginx/templates/default.conf.template

# Copy JS script
COPY ./nginx/main.js /etc/nginx/main.js

EXPOSE 80/tcp
