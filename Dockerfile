FROM node:14.17.0-alpine as base
WORKDIR /app
COPY . .env
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base as development
RUN npm install
CMD ["npm", "run", "dev"]

FROM base as production
RUN npm install --only=production
CMD ["npm", "run", "start"]
