# Day 2 (2025.03.05)

## ☀️ 오늘 한 것
- http 모듈의 유효성 검사를 service가 아니라 model로 이전 -> 이 마저도 validator를 거치도록 수정  
  - **고민한 사항** : 유효성 검사를 어디에서 수행할지 (model vs service)  
  - **해결한 근거** : 객체 생성 시점에 검증이 이루어져야 일관성이 유지됨.  
  - **해결 방안** : model 내부에서 validator를 호출하여 생성자에서 자동으로 검증 수행.  

<br>

## 📚 공부한 내용

### 1. Http를 union 타입으로 변환  

```ts
export type HttpMethod = (typeof HTTP_METHODS)[number];
export type HttpVersion = (typeof HTTP_VERSIONS)[number];
```

- typeof HTTP_METHODS → 배열 ["GET", "POST", ...]을 타입으로 변환
- [number] → 배열의 인덱스를 기반으로 유니온 타입 생성
- 결과: "GET" | "POST" | "PUT" | ... 와 같은 타입이 됨

### 2. ?? (Nullish Coalescing) 문법

```ts
const value = undefined ?? "기본값"; // "기본값"
const value2 = 0 ?? "기본값"; // 0 (Falsy 값은 무시됨)
```

- `??` : `null` 또는 `undefined`일 때만 오른쪽 값을 반환
- `||`와 차이점 : `0`, `false`, `` 같은 Falsy 값은 그대로 유지됨

<br>

## 🧭 다음에 할 것