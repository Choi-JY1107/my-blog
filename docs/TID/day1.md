# Day 1 (2025.03.03)
## 오늘 한 것
- 프로젝트 기본 설정
    ```json
    // package.json
    "start": "node -r tsconfig-paths/register dist/server.js",
    "dev": "ts-node -r tsconfig-paths/register src/server.ts"
    ```

- path-alias 설정
    ```json
    // tsconfig.json
    "baseUrl": "./server", 
    "paths": {
        "@http/*": ["src/http/*"],
    },
    ```

- http Request 관련 기본 틀 생성

## 다음에 할 것
- http Service 일부 로직을 model로 이전
- http model 내에 validator 생성