# Header 컴포넌트 개발 요청

## 파일 위치
- 기존 Header.jsx 파일에 작성

## 구조
- Layout 컴포넌트의 자식 컴포넌트로 Header 생성
- 좌측: 메뉴 항목들
- 우측 끝: 로그인 버튼

## 로그인 상태 처리
- 로그인 전: 로그인 버튼 표시
- 로그인 후: 사용자 이름 표시
  - 사용자 이름을 dropdown으로 구성
  - dropdown 메뉴: 사용자 정보, 로그아웃

## 디자인
- 배경: 검정색 계열
- height: 80px
- 글자: 흰색, 고딕체 계열
- 글자 위치: 메뉴 영역에서 수직 중앙 정렬

## 메뉴 항목
- 게시판
- 사용자리스트

## View Component
- pages 폴더에 각 메뉴에 해당하는 샘플 컴포넌트 생성

## 기술 요구사항
- CSS: Bootstrap 사용
- 라우팅: react-router-dom의 NavLink 사용
- NavLink active 기능 추가