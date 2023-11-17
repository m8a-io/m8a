###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:21-alpine AS development

# Create app directory
WORKDIR /usr/src/app

# add package.json needed for development
COPY --chown=node:node package.json ./

# add pnpm
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Bundle app source
COPY --chown=node:node . .

USER node


###################
# BUILD FOR PRODUCTION
###################

FROM node:21-alpine AS build

# add pnpm
RUN npm install -g pnpm

# In order to run `pnpm run build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `pnpm install` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
RUN pnpm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `pnpm --prod` removes the existing node_modules directory and passing in --prod ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
RUN pnpm --prod

USER node


###################
# PRODUCTION
###################

FROM node:21-alpine AS production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
