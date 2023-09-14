FROM node:18-alpine AS runner

WORKDIR /opt/app

ENV NODE_ENV=production

COPY ./docs ./docs
COPY ./blog ./blog
COPY ./src ./src
COPY ./static ./static
COPY ./babel.config.js ./babel.config.js
COPY ./docusaurus.config.js ./docusaurus.config.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./sidebars.js ./sidebars.js
COPY ./tsconfig.json ./tsconfig.json
COPY ./node_modules ./node_modules

CMD ["npm", "run", "serve"]
