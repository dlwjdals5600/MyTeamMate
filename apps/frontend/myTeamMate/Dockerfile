FROM node:20

# 전역적으로 pnpm 설치
RUN npm install -g pnpm

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install

# Vue.js 개발 서버 실행
CMD ["pnpm", "run", "dev"]