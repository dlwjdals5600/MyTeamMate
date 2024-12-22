FROM node:20

# pnpm 설치
RUN npm install -g pnpm

WORKDIR /app

# 의존성 복사 및 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

CMD ["pnpm", "run", "dev"]