# Day 3 (2025.03.06)

## ☀️ 오늘 한 것
- 서버 구조 결정
- HttpResponse 구조 구현

<br>

## 🤔 고민한 점

### 1. server의 구조는 어떻게 할 것인가?
- DDD + 클린 아키텍처 vs DDD + 헥사고날 아키텍처

<br>

#### a. 아키텍처 분석

클린 아키텍처
- 도메인 중심 구조
- 유지 보수 용이
- 외부 시스템 확장성, 유연성 부족

헥사고날 아키텍처
- 외부 시스템(DB, API, WebRTC) 변경에 유리
- 구조가 복잡해질 수 있다

<br>

#### b. 내 프로젝트 요구사항 분석
핵심 기능
- 방명록 작성
- 내 소개 관리
- 자체 DB 구현(정확히는 DB의 순차적 개발)
- WebRTC 도입(올해 목표)

기술적인 고려사항
- **도메인 로직이 크지 않다.** : 복잡한 비즈니스 규칙이 적지 않을까
- WebRTC & 자체 DB : 도메인보다 외부 시스템과의 연결이 중요

<br>

#### c. 결론
현재 내 프로젝트에서는 WebRTC와 자체 DB 도입이 핵심 요소이다.

따라서 헥사고날 아키텍처의 port & adapter 개념을 사용하면 좀 더 유연하게 유지가 가능하지 않을까 생각이 들었다.

<br>

#### d. 문득 드는 의문 : 결국 같은 개념 아닌가?
클린 아키텍처의 Repository 와 헥사고날 아키텍처의 port & adatper 패턴은 같은 개념 아닌가?
결국 핵심은 "어디에 포커싱을 하는가?"라고 생각을 하였다.
- 클린 아키텍처 : "비즈니스 로직 보호" 및 "layer 분리"
- 헥사고날 아키텍처 : "외부 시스템과의 연결 구조"

둘 다 도메인과 외부 시스템을 분리한다는 점에서 실질적인 차이는 없다.

하지만 개발할 때 어떤 부분에 "집중"할 것인가에 초점을 맞추었을 때 **헥사고날 아키텍처**가 내 프로젝트에 적합할 것 같다는 생각이 들었다.

<br>

## 📚 공부한 내용

### 1. 헥사고날 패턴과 레이어드 아키텍처 패턴

![헥사고날 아키텍처](https://github.com/user-attachments/assets/bd5f60b8-928b-453d-98e5-0e52bc1825b8)

![레이어드 아키텍처](https://github.com/user-attachments/assets/3bff8382-44ee-4bf9-819f-1a8b529996f6)

헥사고날 아키텍처 (Hexagonal Architecture, 포트 & 어댑터 패턴)
- 도메인(핵심 로직)과 외부 시스템(DB, API 등)을 포트(인터페이스)로 분리
- 외부와 연결하는 어댑터(Adapter)를 활용하여 확장성 높음
- "내부 도메인은 변하지 않고, 외부 시스템만 쉽게 교체 가능"

레이어드 아키텍처 (Layered Architecture)
- 계층별로 역할을 나누어 코드 관리 (Presentation → Service → Repository → DB)
- 레이어 간 명확한 책임 분리, 유지보수 쉬움
- 하지만 레이어가 많아질수록 의존성이 복잡해질 수 있음

🎯 차이점:
- 헥사고날 아키텍처는 도메인 보호 + 외부 시스템과 유연한 연결이 핵심
- 레이어드 아키텍처는 역할을 계층별로 분리하여 관리하기 쉽게 만듦
- 헥사고날은 확장성이 뛰어나지만 복잡, 레이어드는 직관적이지만 유연성 부족

<br>

## 🧭 다음에 할 것

- 동적 url 구현
- favicon 이미지 설정