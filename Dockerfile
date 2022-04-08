
FROM node:16-bullseye-slim as build
# set working directory
ARG APP_HOME=/opt/deployment
ARG PROJECT_NAME=appstudio
ENV APP_HOME=${APP_HOME}  \
    PROJECT_NAME=${PROJECT_NAME} \
    PROJECT_HOME=${APP_HOME}/${PROJECT_NAME}
WORKDIR ${APP_HOME}
RUN  useradd -d  /opt/phenom phenom -u 1004
# add `/app/node_modules/.bin` to $PATH
ENV PATH ${PROJECT_HOME}/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . ${APP_HOME}/
RUN chmod a+x ${APP_HOME}/*-server.sh && \
    chown -R phenom:phenom ${APP_HOME}
RUN npm install --silent
RUN npm run build
EXPOSE 8086
# start app
ENTRYPOINT ["./start-server.sh"]