FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# expose 3000 to outside the container so we can connect to it.
EXPOSE 3000 

CMD ["node", "app.js"]