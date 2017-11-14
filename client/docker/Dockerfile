FROM node:8.9.1

ENV LANG="C.UTF-8"

WORKDIR /client

RUN chown -R root:node /client \
  && chmod -R 655 /client

COPY docker/entrypoint.sh /sbin/entrypoint.sh
RUN chmod 755 /sbin/entrypoint.sh

RUN npm install -g yarn

uSER node
EXPOSE 3000
CMD ["/sbin/entrypoint.sh"]
