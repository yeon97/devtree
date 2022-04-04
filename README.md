# DevTree

![devtree_logo_text](/images/devtree_logo_text.png)


## 🌳****프로젝트 소개****


> 스터디 또는 프로젝트를 진행하면서 방향을 잡기 어렵거나 막히는 부분을 도움 받고 싶을 때

> 멘토링을 통해, 얻은 지식을 공유하고 싶을 때

>멘토 티어로 자신의 멘토링 경력을 뽐내고 싶을 때
 
`멘토링`을 통해 효과적인 `개발자 스터디 & 프로젝트`를 도와주는 서비스


![devtree_logo](/images/devtree_logo.png)

### DEVTREE의 뜻?

- 멘토를 양분삼아 자라나는 주니어 개발자들
- `트리 구조`처럼 연결된 개발자 커넥션
- 나뭇가지처럼 뻗어나가는 지식들

### 🧑‍💻 역할
- **김정혁**
    - Spring boot 와 Spring Data Jpa를 활용하여 API 설계 및 구현
    - spring security + jwt
    - 백엔드 개발(회원가입, 로그인, 랭킹)
    - ERD 설계
- **문준호**
    - Spring boot 와 Spring Data Jpa를 활용하여 API 설계 및 구현
    - 백엔드 개발(프로젝트)
    - 배포 및 webRTC 관련 구현
    - ERD 설계
- **오나연**
    - Spring boot 와 Spring Data Jpa를 활용하여 API 설계 및 구현
    - 백엔드 개발(유저, 스터디, 멘토링, 알림)
    - ERD 설계
    - UCC 제작
- **이선민**
    - react와 redux을 활용하여 SPA 구현
    - 프론트 개발(회원가입, 로그인, 마이페이지, 멘토 페이지, 멘토 프로필)
    - styled-components와 material-ui를 통한 컴포넌트 레이아웃 구현 및 css 스타일링
    - 와이어프레임 설계
- **조항준**
    - react와 redux을 활용하여 SPA 구현
    - 프론트 개발(스터디 페이지, 프로젝트 페이지, 프로필 페이지)
    - styled-components와 material-ui를 통한 컴포넌트 레이아웃 구현 및 css 스타일링
    - 와이어프레임 설계

<br>

## ****📄**** 프로젝트 기획

### ****📆**** 프로젝트 기간

- **2022.01.10 ~ 2022.02.18**
    
    **sub 1** - [2022.01.10 ~ 2022.01.14]
    
    - 프로젝트 아이디어 구상
    - 프로젝트 환경 구축
    
    **sub 2** - [2022.01.17 ~ 2022.01.28]
    
    - 아이디어 확정 및 구체화
    - 기능 명세서 작성
    - api 명세서 작성
    - 와이어프레임 설계
    - ERD 구축
    
    **sub 3** - [2022.01.31 ~ 2022.02.18]
    
    - 주요 기능 개발
    - EC2를 이용한 배포
    - 발표 시나리오 정리
    - UCC 제작

<br>

### 💡 기획 의도

- **문제 정의**
    - 개발을 독학하는 입장에서 **스터디**와 **프로젝트**를 각각 찾는 것은 이미 서비스가 있다.
    - 그러나 지금 참여한 스터디에서 배운 점을  프로젝트를 찾거나, 지금 참여한 프로젝트에서 부족한 지식을 채워줄 연관된 스터디를 찾는 서비스는 찾기 힘들다.
    - 스터디를 진행할 때 수준이 비슷한 사람끼리 진행하거나, 멘토 역할을 할 수 있는 인원이 없으면 큰 시너지를 낼 수 없다.
    - 그렇지만 같은 주제에 대해 공부하고 싶어서 모인 인원들 사이의 수준 차이가 비슷한 경우가 많으며, 그런 경우 위와 같은 문제에 직면하게 된다.
    - 또한 프로젝트를 하다가 막히는 부분에 도움을 받을 곳을 찾기 어렵다.

- **목적**
    - 본인 소개 페이지를 통해 타 유저와 소통을 원활히 하는 데 돕는다.
    - 참여했던, 혹은 이미 참여한 스터디나 또는 기록해둔 기술 스택 기반으로, 해당 스터디에서 배운 지식을 활용하여 포트폴리오로 쓸 수 있을 관련 프로젝트를 추천한다.
    - 스터디와 프로젝트를 진행하는 데에 있어서 막히는 부분, 어려운 부분들을 코칭 해주는 멘토의 도움을 얻을 수 있다.
    - 유저들은 멘토들의 후기를 보고 스터디와 프로젝트를 하는 데에 있어 도움을 받을 만한 멘토를 고민하고 연락할 수 있다.

- **목표**
    - 스터디와 프로젝트를 진행하는 개발자들을 돕고 역량을 향상시키는 서비스를 구현한다.
    - 멘토는 스터디와 프로젝트의 멘토 활동을 통해 자기 경력을 쌓을 수 있고 간단한 보상(ex 경험치, 티어)과 멘티들의 후기를 통해 멘토로서 경쟁력을 높일 수 있다.
<br>

### 🚀배포

- **서버**
    - AWS EC2 - Ubuntu 20.04 LTS (GNU/Linux 5.4.0-1018-aws x86_64)
    - Nginx 1.18.0
- **배포 여부 : O**
- **접속 url :** [https://i6a307.p.ssafy.io/](https://i6a307.p.ssafy.io/)
- **접속 가능 여부 : X**

<br>

### ****🛠️**** 기술 스택

- **Frontend**
    - HTML5, CSS3
    - Javascript : ES6
    - React : 17.0.2
    - Redux : 4.0.0
    - Node.js : 16.13.0
    - Material UI : 5.0
    - Visual Studio Code : 1.63.2
- **Backend**
    - Spring boot : 2.6.3
    - Java (Open-JDK Zulu 8.33.0.1 / 11.0.X)
    - Spring Data Jpa
    - Hibernate
    - Spring Security
    - Intellij IDEA community Edition 2021.3.1
    - Gradle 7.3.3
    - lombok
- **DB**
    - MySQL 8.0
- **webRTC**
    - Openvidu 2.18.0
- **Collaboration**
    - Git
    - Jira
    - Notion
    - Discord
    - MatterMost
    - Figma (와이어프레임 설계)
    - ERDCloud (ERD 설계)

<br>

## 프로젝트 산출물

- [API 명세](https://www.notion.so/API-ce8d1b3b88f84baf9370a49195f21f80)
- [기획서](https://power-boursin-2f3.notion.site/38910d0b76e74742aa85cfa6d5326501)
- [와이어 프레임](https://www.figma.com/file/yD9J4MoH2Uh1eXKL4q6UE8/devtree?node-id=73%3A12)
- [ERD](https://www.erdcloud.com/d/MLKTGEeeE73nNM3FW)
- [컨벤션 규칙](https://power-boursin-2f3.notion.site/Git-358b165538d748c3ab4d38192b173e46)

## 프로젝트 결과물


- [중간발표자료](https://docs.google.com/presentation/d/1s6uNbx6AvgYlNhtxcJEs3wHcYcVWKMzVnTpuD8oVxYg/edit#slide=id.g110aa22a4c1_7_176)
- [배포 링크](http://i6a307.p.ssafy.io/MainPage/app)
