FROM nginx:alpine
COPY ./*.html /usr/share/nginx/html/
COPY ./*.css /usr/share/nginx/html/
COPY ./images/* /usr/share/nginx/html/images/