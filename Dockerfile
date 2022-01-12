FROM nginx
MAINTAINER wqvue "915281792@qq.com"

COPY ./web /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/*
COPY ./vhost.nginx.conf /etc/nginx/conf.d/wqvue-test.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
