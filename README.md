# Movie-Review-Frontend
# TechBoost Hackathon

# [ 🎥 영화 리뷰 플랫폼 🎥 ]

## 📣 안내사항

---

1. **팀원과의 협업**
    - 본 프로젝트는 개인 작업이 아닌, 팀원과 협업하여 모든 기능을 함께 구현하는 방식으로 진행됩니다.
2. **Organization 생성**
    - 각 팀 리더는 영화 리뷰 플랫폼 프로젝트를 위한 Organization을 생성합니다. 
    (예: Movie-Review-Team-X)
    - Organization에 팀원을 초대하고, Frontend와 Backend를 위한 별도의 Repository를 생성하여 프로젝트를 진행합니다.
    - 필요에 따라 .github, Docker 등 Repository는 추가적인 Repository를 생성해 활용하세요.
3. **문의사항 처리**
    - 진행 간 문의사항은 **`문의사항 쓰레드`**에 남겨주세요.
4. **구현 내용 작성**
    - 구현한 내용은 **`README.md`** 하단에 상세히 작성해 주세요.

## 🎈 기본 요구사항

---

- 아래 제시된 라이브러리, 프레임워크를 활용하여 영화 리뷰 플랫폼을 구현합니다.
- 필요한 패키지, 라이브러리는 상황에 맞게 자유롭게 추가합니다.
- 일관된 코딩 컨벤션을 유지합니다.
- 기능 당 commit은 필수입니다.

## 💻 프론트엔드 기능 요구사항

# Frontend

## 💎 기술 스택별 요구사항

---

### **React**

- React 18.x 이상 및 Node.js 20.x 이상을 사용합니다.
- TypeScript를 사용할 경우, any 타입 사용을 금지합니다.

### **Next.JS**

- Next.js 14.x 이상을 사용합니다.
- App Router 방식을 사용합니다.
- TypeScript를 사용할 경우, any 타입 사용을 금지합니다.

## ⭐️ 기능

---

### 영화 등록 페이지

> 영화 정보 입력: 사용자는 영화 정보를 입력할 수 있습니다.
> 
- **장르 선택**: `스릴러`, `로맨스`, `코믹`, `액션` 중 하나를 드롭다운 메뉴에서 선택합니다.
- **개봉일 입력**: Date-Picker 도구를 사용해 개봉일을 선택합니다.
- **상영 종료일 입력**: Date-Picker 도구를 사용해 상영 종료일을 선택합니다.
- **예외처리** : 빈 문자열 및 Null값으로 입력에 대한 등록했을때 안내 메세지를 띄워주세요 **(추가 기능)**

### 영화 목록 페이지

> 영화 목록 표시: 등록된 영화의 목록을 볼 수 있습니다.
> 
- **영화 추가** : 별도의 추가하기 버튼을 눌러 영화 등록 페이지로 이동합니다.
- **영화 상세 정보 조회**: 영화 항목을 클릭하면 해당 영화의 상세 정보 페이지로 이동합니다.
- **영화 수정**: 각 영화 항목 옆에 있는 '수정' 버튼을 클릭하면 영화 수정 페이지로 이동합니다.
- **영화 삭제**: 각 영화 항목 옆에 있는 '삭제' 버튼을 클릭하면 해당 영화를 삭제할 수 있어야 합니다.
- **필터링 기능**:
    - 장르와 상영 여부를 기준으로 필터링하여 영화 목록을 조회할 수 있어야 합니다.
    - 평점이 n점 이상인 영화만 필터링하여 조회할 수 있어야 합니다. **(추가 기능)**
- **페이지네이션**: 영화 목록은 페이지네이션 기능을 통해 조회됩니다. **(추가 기능)**

### 영화 수정 페이지

> 기존 영화 정보 표시
> 
1. 수정 페이지에 접속하면 해당 영화의 기존 정보가 표시됩니다. 사용자는 이 정보를 바탕으로 원하는 부분을 수정할 수 있습니다.

### **영화 상세 정보 페이지**

1. **상제 정보 조회** : 해당 영화의 기존 정보가 표현됩니다.
    - **예외처리** : 존재하지 않는 영화에 대한 정보를 조회 했을때 에러 메세지를 표현해주세요 **(추가 기능)**
2. **리뷰 등록**: 사용자는 영화에 대한 리뷰와 평점을 등록할 수 있습니다.
    - **평점 입력**: 평점은 1~5점 사이에서 1 단위로 선택 가능합니다.
3. **리뷰 목록 조회**: 영화에 대한 리뷰들을 확인할 수 있습니다.
    - **리뷰 필터링**: 평점이 n점 이상인 리뷰만 필터링하여 조회 가능합니다. **(추가 기능)**

### 어드민 페이지 (추가기능)

> 관리자 모드 : 관리자 모드 버튼을 통해 관리자모드로 전환이 가능합니다.
> 
- 관리자 모드일때만 영화에 대해 추가, 수정, 삭제가 가능해야 합니다.
- 관리자는 리뷰를 작성할 수 없습니다.
- 관리자 상태는 로컬 스토리지에 저장하고 관리해주세요

## 🎨 UI 예시

---

[TechBoost-Hackathon-Frontend](https://www.figma.com/design/1NYaEpXZZzB2dbP5a4QbtS/TechBoost-Hackathon-Frontend)

(UI 예시는 참고용으로만 제공되는 것이며, 그대로 따라하기보다는 참고만하여 자유롭게 디자인해 주시기 바랍니다.)
