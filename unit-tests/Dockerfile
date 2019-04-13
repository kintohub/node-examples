FROM node:8.9.4
RUN mkdir -p app
WORKDIR /app
COPY . /app
RUN npm install
ENTRYPOINT ["npm", "run", "test"]
