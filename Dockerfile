FROM node:current-alpine

# manually installing chrome
RUN apk add chromium

# skips puppeteer installing chrome and points to correct binary
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /opt/workspace
COPY ./main.js /opt/workspace/
COPY ./package.json /opt/workspace/
COPY ./package-lock.json /opt/workspace/
RUN npm ci
CMD ["node", "main.js"]