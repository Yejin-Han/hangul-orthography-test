<h1>hangul-orthography-test</h1>
<p>
한글 맞춤법 검사(10문제)입니다.
<br>
네이버 맞춤법 테스트와 2023 트렌드 능력고사를 참고하여 React로 제작한 반응형 한글 맞춤법 검사로, 10문제의 data.json을 직접 제작하여 활용하였습니다.<br>
문제를 만들기 위해 찾아보면서 평소 맞춤법을 잘 알고 있다고 생각했던 저도 틀린 맞춤법 내용도 확인할 수 있었고, 그만큼 많은 사람들이 재미있는 방법으로 맞춤법에 대한 경각심을 가질 수 있었으면 좋겠다는 바람에서 제작하게 되었습니다.
<br>
<br>
axios를 활용한 데이터 호출, typescript의 type과 interface의 차이를 알고 적절한 사용법을 공부하였으며, useState의 활용을 확인할 수 있습니다. <br>
또한 Styled-components를 활용한 컴포넌트화 된 스타일링, 특히 조건 interface에 따른 스타일과 React-spring을 활용한 간단한 리액트 내 애니메이션을 구현한 것을 확인할 수 있습니다.
</p>
<a href="https://yejin-han.github.io/hangul-orthography-test/">한글 맞춤법 검사 바로가기</a>
<br>
<br>
<br>
<h2>🗓️ 제작 기간</h2>
> 2023. 01. 29. ~ 2023. 02. 03.
<h2>📸 완성 화면</h2>
<img alt="index" alt="main_desktop" src="/capture/main_d.jpg" />
<table align="center">
  <tr>
    <td width="60%"><img alt="main_tablet" src="/capture/main_t.jpg" /></td>
    <td width="40%"><img alt="main_mobile" src="/capture/main_m.jpg" /></td>
  </tr>
</table>
<h2>🛠 활용 tool 및 language</h2>
<ul>
  <li>React</li>
  <li>Typescript</li>
  <li>Styled-Components</li>
  <li>VS Code</li>
  <li>Photoshop</li>
</ul>
<br>
<h2>📚 파일 구조</h2>
<ol>
  <li>App.tsx - App.styles.ts</li>
  <li>Data.ts</li>
  <li>
    Components
    <ul>
      <li>QuestionCard.tsx - QuestionCard.styles.ts</li>
      <li>ResultPage.tsx - ResultPage.styles.ts</li>
    </ul>
  </li>
</ol>
<h2>📋 구현 기능</h2>
<h3>문제화면</h3>
<img alt="index" alt="quiz_desktop" src="/capture/quiz_d.jpg" />
<table align="center">
  <tr>
    <td width="60%"><img alt="quiz_tablet" src="/capture/quiz_t.jpg" /></td>
    <td width="40%"><img alt="quiz_mobile" src="/capture/quiz_m.jpg" /></td>
  </tr>
</table>
<h3>결과화면</h3>
<img alt="index" alt="result_desktop" src="/capture/result_d.jpg" />
<table align="center">
  <tr>
    <td width="60%"><img alt="result_tablet" src="/capture/result_t.jpg" /></td>
    <td width="40%"><img alt="result_mobile" src="/capture/result_m.jpg" /></td>
  </tr>
</table>
<h3>App.tsx</h3>
  <ul>
    <li>useState hook을 이용하여 각종 state를 다루고 있습니다.</li>
    <li>async와 await를 이용하여 데이터 함수를 호출합니다.</li>
    <li>클릭한 답이 정답인지 아닌지 체크하는 checkAnswer 함수가 있습니다.</li>
    <li>다음으로 버튼을 누르면 현 문제 번호에 따라 다음 문제가 나오거나 퀴즈가 끝나는 nextQuestion 함수가 있습니다. 마지막 문제라면 결과보기 버튼이 보이게 되며, 버튼을 누를 때마다 점수 계산을 하여 정답 여부에 따라 10점씩 누적합니다.</li>
    <li>다시풀기 버튼을 누르면 필요한 사항을 모두 리셋하는 handlePlayAgain 함수가 있습니다.</li>
    <li>App.styles.ts에서는 createGlobalStyle을 통해 전역에서 사용되는 GlobalStyle 컴포넌트를 만들고, 기타 App.tsx에서 쓰일 Bg, MainButton, Wrapper 컴포넌트를 만들었습니다. </li>
  </ul>
<h3>Data.ts</h3>
  <ul>
    <li>axios 라이브러리와 async, await를 이용하여 데이터를 불러온 후 map 함수로 데이터를 배열화합니다.</li>
    <li>shuffleArray 함수를 통해 정답과 오답의 순서를 랜덤으로 출력합니다.</li>
  </ul>
<h3>QuestionCard.tsx</h3>
  <ul>
    <li>문제 내용을 결정하는 가장 중요한 컴포넌트입니다.</li>
    <li>App.tsx의 checkAnswer 함수를 callback함수로 불러와 다음으로 버튼을 클릭하면 checkAnswer 함수가 발동하도록 하였습니다.</li>
    <li>QuestionCard.styles.ts에서 ButtonWrapperProps interface를 상속받아 그 안의 userClicked 변수를 조건으로 하는 스타일을 작성한 바 있습니다.</li>
  </ul>
<h3>ResultPage.tsx</h3>
  <ul>
    <li>누적한 점수를 받아 최종점수를 출력하며, 이는 React-spring 라이브러리의 useSpring 훅을 활용하여 0에서부터 해당 점수까지의 애니메이션으로 표현하였습니다.</li>
    <li>점수에 따라 다른 멘트가 출력되는 scoreCompare 함수가 있습니다.</li>
    <li>여태까지 누른 답을 state로 저장하여 그 답들을 순서대로 출력하고, 만약 그 답이 오답이라면 취소선을 그은 후 옆에 정답을 표시하도록 하였습니다. </li>
    <li>App.tsx의 handlePlayAgain 함수를 callback함수로 불러와 다시풀기 버튼을 클릭하면 handlePlayAgain 함수가 발동하도록 하였습니다.</li>
    <li>ResultPage.styles.ts에서 CorrectProps interface를 상속받아 그 안의 isCorrect 변수를 조건으로 하는 스타일을 작성한 바 있습니다.</li>
  </ul>
<br>
<br>
<h2>💡 추가하고 싶은 기능</h2>
  <p>data.json의 문제 수를 10문제에서 100문제 이상으로 늘려, 그 중 10문제만 랜덤으로 불러오는 기능 (문제를 수집하고 json 파일로 만들어야 하기 때문에 일단 생략한 과정임!)</p>
<h2>⭐ 참고</h2>
  <p>react-typescript-quiz-practice 폴더에 있는 내용입니다.</p>
  <a href="https://www.youtube.com/watch?v=F2JCjVSZlG0&list=PLIczZPCwcyqvPRyJF9B3KvyjI6_B0VLWS&index=7&t=1226s">참고 영상 바로가기</a>
