# 프리온보딩 백엔드 코스 - 4차 선발과제

# wanted_pre_onboarding

원티드 프리온보딩 백엔드 코스 4차 선발과제입니다.

<div align="center">
  <img src="https://img.shields.io/badge/node-16.16.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/NestJS-8.0.0-E0234E?logo=NestJS"> 
  <img src="https://img.shields.io/badge/TypeScript-4.3.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/Postgresql-14.4-4479A1?logo=Postgresql"> 
  <img src="https://img.shields.io/badge/Typeorm-8.0.0-010101?logo=typeorm"> 
</div>

<div align="center">
</div>

# 1. 서비스 개요

- 본 서비스는 기업의 채용을 위한 웹 서비스 입니다.
- 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.

# 2. 요구사항

## 1. API

1. 채용공고 등록
2. 채용공고 수정
   1. 회사 id 이외 모두 수정가능
3. 채용공고 삭제
   1. DB에서 삭제
4. 채용공고 목록 가져오기
   1. 채용공고 목록들 가져오기
   2. 채용공고 검색 기능 (선택사항)
5. 채용 상세 페이지 가져오기
   1. "채용내용"이 추가적으로 담겨짐
   2. 해당 회사가 올린다른 채용공고 추가적 포함 (선택사항)
6. 사용자 채용공고 지원
   1. 사용자 1회 지원 가능

## 2. 기술요건

- ORM 사용하여 구현
- RDBMS 사용 (SQLite, PostgreSQL 등).

# 3. 구현

## 1. ERD

![스크린샷 2022-08-15 오전 1.08.30.png](https://user-images.githubusercontent.com/54757435/184545978-aae4b6e5-5154-4b46-ba60-fe8684171167.png)

## 2. Swagger API 문서

- [localhost:5500/docs](http://localhost:5500/docs)에서 확인 가능합니다.
- 접속 시 로그인 정보는 config/.config.env 파일에서 확인해주시면 감사하겠습니다.

# 커밋 메시지 컨벤션

| 종류     | 설명                                          | 코드               | 아이콘 |
| -------- | --------------------------------------------- | ------------------ | ------ |
| Feat     | 새로운 기능 추가                              | :sparkles:         | ✨     |
| Fix      | 버그 수정                                     | :bug:              | 🐛     |
| Docs     | 문서 수정                                     | :books:            | 📚     |
| Test     | 테스트 코드 추가                              | :white_check_mark: | ✅     |
| Refactor | 코드 리팩토링                                 | :recycle:          | ♻️     |
| Design   | CSS 및 레이아웃 작업                          | :art:              | 🎨     |
| Chore    | 코드 외 빌드 부분 혹은 패키지 매니저 수정사항 | :package:          | 📦     |

```
# example

♻️[Refactor]: 코드 수정
✨[Feature]: 로그인 기능 추가
```

- 변경사항 또는 추가사항이 “무엇”인지 명확히 작성.
- 끝에 마침표 금지.
- 명사가 아니라 동사로 작성.
- description도 자세히 작성.
  기능 완전히 구현한 경우 말고 리팩토링이나 코드 수정을 진행했을 때 어느 부분을 수정했는지 명확하게 명시 해주기.

# npm run start:dev 오류시

npm i --force || npm i --legacy-peer-deps 를 사용하여 실행해주시길 바랍니다.
