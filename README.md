
# 원티드 프리온보딩 프론트엔드 - Week 3-2

원티드 프리온보딩 **프론트엔드 5팀**입니다.<br>
해당 레포지토리는 원티드 프리온보딩 과제로 투자 관리 서비스의 관리자 페이지를 구현한 프로젝트입니다.<br>
해당 프로젝트에서는 제공받은 json-server api를 사용하였습니다.

## 📅 프로젝트 기간

기간 : 2022년 11월 12일 ~ 2022년 11월 17일

## 👥 팀원 소개

| 이름 | github |
| --- | --- |
| 류승연 (팀장) | https://github.com/seungyeon-rr |
| 차혜인 (부팀장) | https://github.com/hyeincha |
| 박지현 | https://github.com/hyoniiii |
| 배창현 | https://github.com/baechanghyeon |
| 이원준 | https://github.com/dldnjswns31 |
| 임연주 | https://github.com/yeondooo |
| 지재영 | https://github.com/jaeyeong815 |

## 🛠 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">  
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 
   
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white">
  <br>
</div>

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```
$ yarn
```

1. 프로젝트를 실행합니다.

```
$ yarn dev
```

- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔗 배포 링크

[배포링크](https://pre-onboarding-7th-3-2-5-6zax.vercel.app/)

- 해당 프로젝트는 Vercel로 배포하였습니다.
- 테스트 계정

```jsx
ID : 5@test.com
PW : 1111
```

## 🔰 사용한 패키지와 버전

```
"antd": "^4.24.1",
"eslint": "8.27.0",
"eslint-config-next": "13.0.3",
"next": "13.0.3",
"typescript": "4.8.4"
"axios": "^1.1.3",
"prettier": "^2.7.1",
"recoil": "^0.7.6"
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">

- ant design : 스타일 적용<br>
- eslint : 코딩 컨벤션에 위배되는 코드나 안티 패턴을 자동 검출하는 도구<br>
- typescript : 타입 스크립트<br>
- axios : node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트<br>
- prettier : 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 변환해주는 도구<br>
- recoil : 전역 상태 관리

</div>
</details>

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┣ 📂core
 ┃ ┃ ┗ 📜instance.ts
 ┃ ┣ 📜account.ts
 ┃ ┗ 📜login.ts
 ┣ 📂components
 ┃ ┣ 📜AccountCreate.tsx
 ┃ ┣ 📜AccountList.tsx
 ┃ ┣ 📜Filter.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┗ 📜Search.tsx
 ┣ 📂pages
 ┃ ┣ 📂account
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜login.tsx
 ┣ 📂recoil
 ┃ ┣ 📜accountState.ts
 ┃ ┣ 📜searchState.ts
 ┃ ┗ 📜userState.ts
 ┣ 📂styles
 ┃ ┣ 📜Filter.module.css
 ┃ ┣ 📜Login.module.css
 ┃ ┣ 📜Search.module.css
 ┃ ┗ 📜globals.css
 ┗ 📂utils
 ┃ ┣ 📜fakers.ts
 ┃ ┣ 📜formatting.ts
 ┃ ┣ 📜token.ts
 ┃ ┗ 📜valueConversion.ts
```

</div>
</details>

## ❗️ 필수 요구사항

| 페이지 | API 연결 및 기능 |
| --- | --- |
| 계좌 목록 | ✅ 고객명(user_name) : 고객ID 를 참조하여 실제 이름으로 보여져야 합니다.<br> ✅ 브로커명(broker_name) : 예시) OO증권, brokers.json 를 참조하여 실제 이름으로 보여져야 합니다.<br>✅ 계좌번호(number) : 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 * 글자로 마스킹 처리가 필요합니다.<br> ✅ 계좌상태(status) : 예시) 운용중, accountStatus.json 를 참조하여 실제 이름으로 보여져야 합니다.<br> ✅ 목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 합니다.<br> ✅ 검색이 가능해야 합니다.<br> ✅ 페이지네이션이 되어야 합니다.<br> ✅ 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.<br>✅ 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.<br> ✅ 계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다. |
| 계좌 상세 | ✅ 계좌 목록에서 특정 계좌를 누르면 계좌의 상세 정보가 보여집니다. <br> ✅ 계좌명 수정 등의 작업이 가능해야 합니다. |
| 화면 구성 | ✅ 로그인 : 새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.<br>✅ Header : 현재 보여지고 있는 페이지명과 로그인 사용자명을 보여줍니다.<br>✅  Footer : Copyright ⓒ December and Company Inc.가 가운데 정렬로 들어가면 됩니다.<br>✅  Sider : 페이지 메뉴가 표시되며, 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.<br> ✅  Content(계좌 목록, 계좌 상세, 사용자 목록, 사용자 상세)<br>✅ 로그아웃 시 로그아웃 처리되고 로그인 화면으로 이동합니다.<br>  |
| 조건 |  ✅ React.js 기반이어야 합니다.<br> ✅ antd 또는 tailwindcss 등의 UI 라이브러리나 프레임워크 사용을 권장 <br> ✅ 일반적인 사용자 PC (1280x1024 이상) 화면에서 문제없이 작동해야 합니다. <br> ✅ 인증된 사용자만 CRUD(생성, 조회, 수정, 삭제) 가 가능해야 합니다. |

<br>

### 새롭게 도입한 점

1. css framework antd: 
    - 미리 정의되어 있는 구성요소를 제공하기 때문에, 엔터프라이즈 환경에서도 어울리는 디자인을 만들 수 있다.
2. Next.js : 
    - SSR
        - HTML이 미리 렌더링 되어 SEO 최적화에 좋습니다.
        - 서버의 데이터를 필요로 하는 페이지에 대해서는 요청 시에 서버 사이드 렌더링을 통하여 HTML을 생성하게 됩니다.
    - 파일 기반 네비게이션 기능
        - 폴더의 경로에 따라 페이지의 경로가 설정되어 구축이 빠르고 관리가 편리하다는 장점이 있습니다.
    - Typescript 내장
        - 타입스크립트 설정을 따로 할 필요 없이 타입스크립트를 지원하여 편리함과 안정성을 얻을 수 있습니다.

### 아쉬운 점

Next.js를 제대로 활용하지 못한 점 :

1. SSR(Server-Side-Rendering)
    - Next.js를 팀원들 대부분이 처음 접하는 상황이었는데 다른 과제에 비해 기간이 긴 것을 활용하여 사전에 학습을 하고 과제를 진행했지만 Next.js에서 지원하는 다양한 기능들 중에서 몇가지 활용을 하지 못했습니다.
2. Middleware
    - 미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행할 수 있으며 들어오는 요청에 따라 요청 또는 응답 헤더를 다시 작성, 리디렉션, 수정하거나 직접 응답하여 응답을 수정할 수 있습니다.
    - 미들웨어를 통해 로그인 여부에 따른 페이지 이동을 제한을 구현하려고 했지만 이를 활용하지 못하고 다른 방법으로 토큰 여부에 따라 로그인 페이지와 메인페이지 접근을 제한 했습니다.

로직 상 아쉬운 점

3. JWT 만료 처리 커스텀 훅
    - Axios instance interceptor를 사용하여 JWT가 만료됐을 시 상태를 조절하여 login 페이지로 redirecting 시켜주는 커스텀 훅을 만들었습니다.
    - 로직 상 문제점으로 인해 상태값이 올바르게 바뀌지 않아 JWT가 만료되자마자 login 페이지로 이동하는것이 아닌 새로고침을 해줘야 이동이 가능합니다.

### 구현 기능

1. CRUD ( 계좌 관련 ) 
    - 생성
        - 계좌 정보를 생성 할 수 있습니다.
        - 입력해야하는 값 : 브로커명, 계좌번호, 계좌상태, 평가금액, 입금금액, 계정 활성화 여부
        - faker 데이터 : uuid, name, userId, created_at, updated_at

        faker 데이터를 생성한 이유: 생성 기능(Create)을 구현하기 위해 임의의 랜덤 데이터를 `faker`를 통해 만들었습니다. 
       ![create](https://user-images.githubusercontent.com/28972561/202608561-360d4b6b-1f94-49d2-b063-715fd42d7001.gif)

    - 조회
        - 전체 계좌 목록을 확인할 수 있습니다.
        - 고객명, `broker.json`을 참조한 브로커명, `마스킹 처리`된 계좌번호, `accountStatus.json`을 참조한 계좌상태, 계좌명, 평가금액, 입금금액, 계좌 활성화 여부, 계좌개설일 을 확인할 수 있습니다.
        - 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.!
       ![read](https://user-images.githubusercontent.com/28972561/202608285-ead5fe14-4904-435e-b3c4-3e70f05cad3a.gif)
    - 수정
        - 수정모드인지 아닌지 확인하기 위해 useState로 상태 관리를 하고있습니다.
        - 수정 버튼을 클릭하면 edit모드로 전환되며 계좌 활성화 여부를 수정할 수 있습니다.
        - 제출 버튼을 클릭했을 때 새로운 정보로 서버에 수정을 요청합니다.
        - 이후 재렌더링 되며 수정된 값을 확인할 수 있습니다.
       ![updategif](https://user-images.githubusercontent.com/28972561/202608334-b7c5a585-e175-4899-a158-cc7d2e2da08e.gif)
    - 삭제
        - 전체 계좌목록에서 원하는 계좌를 삭제할 수 있습니다.
      ![delete](https://user-images.githubusercontent.com/28972561/202608351-839b6e81-943c-41ca-af09-a3bb5061fa1d.gif)

2. 계좌목록 필터 및 검색 기능
    - 필터 선택 값과 검색 키워드 값을 상태로 관리하여  필터링 할 값을 선택하거나 검색 버튼을 누르면 params에 값이 담겨 서버로 요청을 보내게 됩니다.
    - 요청을 받은 서버는 params 값을 확인하여 원하는 데이터를 반환해줍니다.
   
    
    - 필터 코드
    https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-3-2-5/blob/c0fe9d196f3b8db5e88bb9b0068d9b5d369a6b4a/src/components/Filter.tsx#L9-L55
    - 서치 코드
    https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-3-2-5/blob/c0fe9d196f3b8db5e88bb9b0068d9b5d369a6b4a/src/components/Search.tsx#L7-L47
    - 레이아웃 코드
    https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-3-2-5/blob/c0fe9d196f3b8db5e88bb9b0068d9b5d369a6b4a/src/components/Layout.tsx#L75-L80
    
3. 페이지네이션 
    - `json-server` 의 Paginate API 를 사용하여 구현했습니다.
4. 계좌 상세
    - Next 라이브러리인 useRouter를 활용하여 계좌번호 클릭 시 상세페이지로 이동할 수 있도록 동적 라우팅을 구현하였습니다.
