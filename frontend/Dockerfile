FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# ✅ Fix: Ensure react-scripts has permission during build
RUN chmod +x node_modules/.bin/react-scripts

# Build the frontend
RUN npm run build

# ✅ Copy runtime start script and make it executable
COPY start.sh .
RUN chmod +x start.sh

EXPOSE 3000

# ✅ Use custom start script to handle runtime
CMD ["./start.sh"]
