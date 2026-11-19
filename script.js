// 작업 데이터: 이미지 파일은 img/ 폴더, 이름만 적습니다.
const PROJECTS = [
  {
    id: 'daecheong', cat: 'public', layout: 'panels',
    title: '국악극 「대청여관」과 1950년대 국악인',
    client: '국립부산국악원', kind: '전시 패널 8종',
    text: '1950년대 부산 대청여관에 모였던 국악인들의 이야기를 전시 패널로 정리했습니다. 파란 실루엣 일러스트와 노란 바탕을 패널 전체에 통일해, 복도를 따라 걸으며 한 편의 이야기처럼 읽히도록 구성했습니다.',
    images: [
      ['dc-install', '복도에 설치된 전시 패널'],
      ['dc-1', '표지 패널, 대청여관과 1950년대 국악인'],
      ['dc-2', '공연 개요와 시대적 배경'],
      ['dc-3', '대청여관과 예인들의 관계'],
      ['dc-4', '대청여관에 등장하는 주요 음악'],
      ['dc-5', '지역별 국악인 지도'],
      ['dc-6', '대청여관에 등장하는 주요 음악 2'],
      ['dc-7', 'QR 안내 패널'],
      ['dc-8', '예인의 소리를 LP로 듣다'],
    ],
  },
  {
    id: 'psf', cat: 'public', layout: 'mosaic',
    title: '2025 Public Servant Forum',
    client: 'BEXCO 국제 행사', kind: '현수막, X배너, 브로슈어, 리플렛, 피켓',
    text: '여러 나라 공무원이 참가한 국제 포럼의 행사 그래픽 전반을 맡았습니다. 보라색과 금색 방패 모티프 하나로 건물 앞 대형 현수막부터 손에 드는 피켓까지 크기가 전혀 다른 출력물을 같은 얼굴로 맞췄습니다.',
    images: [
      ['psf-outdoor', 'BEXCO 앞 야외 현수막'],
      ['psf-entrance', 'BEXCO 입구 현수막'],
      ['psf-xbanner', '행사장 입구 X배너'],
      ['psf-brochure', '인쇄된 브로슈어'],
      ['psf-stage', '무대 양옆 세로 현수막'],
      ['psf-hall', '행사장 내부 현수막'],
      ['psf-farewell', '환송식 현수막'],
      ['psf-leaflet1', '설명회용 3단 리플렛 앞면'],
      ['psf-leaflet2', '설명회용 3단 리플렛 뒷면'],
      ['psf-picket', '행사 피켓'],
      ['psf-banner', 'X배너 원본 파일'],
    ],
  },
  {
    id: 'jinsim', cat: 'brand', layout: 'feature',
    title: '베이커리 브랜드 「진심」 IMC',
    client: '졸업전시', kind: '브랜드 네이밍, 로고, 캐릭터, 패키지, 굿즈',
    text: '진심을 담아 빵을 굽는다는 생각에서 출발한 베이커리 브랜드입니다. 하트와 손을 합친 로고, 소년과 여우 캐릭터를 만들고 패키지, 엽서, 캘린더, 굿즈까지 하나의 이야기로 이어지게 설계했습니다.',
    images: [
      ['imc-postcard', '캐릭터 일러스트 엽서 목업'],
      ['imc-2', '도록, 브랜드 소개'],
      ['imc-3', '도록, 브랜드 네이밍과 로고, 캐릭터'],
      ['imc-4', '도록, 포스터와 캘린더, 패키지'],
      ['imc-5', '도록, 굿즈와 매장 외관'],
    ],
  },
  {
    id: 'essay', cat: 'illust', layout: 'book',
    title: '에세이 책 삽화',
    client: '책 디자인', kind: '챕터 일러스트 17점',
    text: '가족, 집, 달리기, 밥 먹고 합시다처럼 짧은 이야기마다 한 장씩 그림을 그렸습니다. 한지 질감 위에 펜 선과 초록색을 반복해 써서 17장이 한 권의 책으로 이어지게 했습니다.',
    images: [
      ['essay-4', '가족'], ['essay-5', '집'], ['essay-6', '클로버'],
      ['essay-8', '에세이 삽화'], ['essay-9', '까마귀'], ['essay-11', '달리기'],
      ['essay-12', '습관'], ['essay-13', '노래'], ['essay-14', '얼렁뚱땅'],
      ['essay-15', '인복'], ['essay-16', '밥 먹고 합시다'], ['essay-17', '에세이 삽화'],
      ['essay-18', '에세이 삽화'], ['essay-19', '에세이 삽화'], ['essay-20', '두 번째 고향 인도'],
      ['essay-21', '에세이 삽화'], ['essay-22', '에세이 삽화'],
    ],
  },
  {
    id: 'chumbaram', cat: 'public', layout: 'pair',
    title: '「춤바람, 봄바람이 되어오다」',
    client: '국립부산국악원', kind: '전시 패널 3종, 인스타그램 카드뉴스 4종',
    text: '전시 패널을 만들고, 같은 그림과 글을 인스타그램 카드뉴스로 다시 짰습니다. 세로로 긴 패널의 정보를 정사각형 화면에 나눠 담는 연습이 된 작업입니다.',
    images: [
      ['chum-install', '전시 공간 전경'],
      ['chum-1', '표지 패널'],
      ['chum-2', '패널 2'],
      ['chum-3', '패널 3'],
      ['chum-insta1', '인스타그램 게시물 1'],
      ['chum-insta2', '인스타그램 게시물 2'],
      ['chum-insta3', '인스타그램 게시물 3'],
      ['chum-insta4', '인스타그램 게시물 4'],
    ],
  },
  {
    id: 'bookcafe', cat: 'public', layout: 'sizes',
    title: '「오늘 독서모임은 북카페에서 할까요?」',
    client: '국립부산국악원 북카페', kind: '웹·모바일 홍보물 규격별 제작',
    text: '독서모임 모집 홍보물입니다. 책, 찻잔, 연필 그림을 하나의 세트로 만들어 두고 1920×500 메인 배너, 550×400 롤링 배너, 620×740 모바일 포스터에 맞게 배치를 다시 잡았습니다.',
    images: [
      ['book-real', '홈페이지에 실제 게시된 모습'],
      ['book-main', '메인 배너 1920×500'],
      ['book-rolling', '롤링 배너 550×400'],
      ['book-mobile', '모바일 포스터 620×740'],
      ['book-cafe', '북카페 홍보물'],
      ['book-process', '시안 작업 과정'],
    ],
  },
  {
    id: 'knot', cat: 'brand', layout: 'pair',
    title: '매듭 포스터',
    client: '경성대학교 한일교류회', kind: '포스터 2종',
    text: '빨강과 파랑 두 줄이 서로 묶이는 매듭으로 두 나라의 교류를 표현했습니다.',
    images: [
      ['ks-knot1', 'Interwoven Bowline 포스터'],
      ['ks-knot2', 'Double Long Tail Bowline 포스터'],
    ],
  },
  {
    id: 'school', cat: 'brand', layout: 'mosaic',
    title: '학교 작업',
    client: '학과 과제', kind: '아이덴티티, 리플렛, 광고 포스터, 타이포그래피, 3D',
    text: '여러 분야를 고루 다뤄 본 과제들입니다. 케이크 가게 아이덴티티, 가구 브랜드를 소개하는 3단 리플렛, 레터링 작업, 3D 모델링까지 포함했습니다.',
    images: [
      ['sch-identity', '케이크 가게 아이덴티티 디자인'],
      ['sch-poster', '광고 포스터'],
      ['sch-leaflet1', '가구 브랜드 3단 리플렛'],
      ['sch-leaflet2', '가구 브랜드 3단 리플렛 안쪽'],
      ['sch-type', '레터링, Libertad 자유'],
      ['sch-3d', '3D 모델링, 유리돔 속 성'],
    ],
  },
  {
    id: 'ai-banner', cat: 'public', layout: 'pair',
    title: 'AI 활용 지도사 자격증 교육 배너',
    client: '교육 과정 홍보', kind: 'X배너 2종',
    text: '1급, 2급 과정을 같은 틀 안에서 구분할 수 있도록 만든 교육 과정 배너입니다.',
    images: [
      ['ai-banner1', '1급 과정 배너'],
      ['ai-banner2', '2급 과정 배너'],
    ],
  },
  {
    id: 'own', cat: 'illust', layout: 'mosaic',
    title: '개인 작업',
    client: '드로잉, 회화, 광고 일러스트', kind: '4점',
    text: '토끼풀을 좋아해서 자주 그립니다. 광고 일러스트 「호랑茶랑」과 사슴을 그린 회화도 함께 실었습니다.',
    images: [
      ['own-clover1', '토끼풀 화관을 쓴 소녀'],
      ['hero-clover', '토끼풀 꽃을 든 소녀'],
      ['own-tiger', '광고 일러스트, 호랑茶랑'],
      ['own-painting', '회화, 어미 사슴과 아기 사슴'],
    ],
  },
];

const CAT_NAME = { public: '기관·행사', brand: '브랜딩·편집', illust: '일러스트' };
const root = document.getElementById('projects');
const all = []; // 라이트박스 순서용 [{src, cap, project}]

function esc(s) { return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

root.innerHTML = PROJECTS.map(p => {
  const figs = p.images.map(([file, cap]) => {
    const i = all.push({ file, title: p.title, cap }) - 1;
    return `<li><button type="button" data-idx="${i}"><img src="img/${file}.jpg" alt="${esc(cap)}" loading="lazy"></button></li>`;
  }).join('');
  return `
  <article class="project" data-cat="${p.cat}" id="${p.id}" aria-labelledby="${p.id}-t">
    <header class="p-head">
      <h3 id="${p.id}-t">${esc(p.title)}</h3>
      <dl class="p-meta">
        <div><dt>의뢰·맥락</dt><dd>${esc(p.client)}</dd></div>
        <div><dt>작업 범위</dt><dd>${esc(p.kind)}</dd></div>
        <div><dt>분야</dt><dd>${CAT_NAME[p.cat]}</dd></div>
      </dl>
      <p class="p-text">${esc(p.text)}</p>
    </header>
    <ul class="gallery g-${p.layout}">${figs}</ul>
  </article>`;
}).join('');

// 수업 갤러리
function fill(id, title, list) {
  document.getElementById(id).innerHTML = list.map(([file, cap]) => {
    const i = all.push({ file, title, cap }) - 1;
    return `<li><button type="button" data-idx="${i}"><img src="img/${file}.jpg" alt="${esc(cap)}" loading="lazy"></button></li>`;
  }).join('');
}
fill('teach-slides', '키링 만들기 수업 슬라이드', [
  ['key-01_cover', '표지, 내가 좋아하는 키링 만들기'],
  ['key-02_hook1', '도입 질문, 지금 가방에 키링 달고 온 사람?'],
  ['key-06_today', '오늘의 순서, 찾기·스케치·도안·소개'],
  ['key-07_find', '1단계, 내가 좋아하는 것 찾기'],
  ['key-09_sketch', '2단계, 같은 대상 다른 모양 3개'],
  ['key-10_rules', '주문하려면 꼭 지켜요'],
  ['key-11_examples', '이렇게 그려요, 좋은 예와 나쁜 예'],
  ['key-12_final', '3단계, 최종 도안은 크게'],
  ['key-13_check', '제출 전 체크리스트'],
  ['key-14_share', '4단계, 내 키링 소개하기'],
]);
fill('teach-kids', '키링 만들기 학생 결과물', [1, 2, 3, 4, 5, 6].map(n => [`key-kid${n}`, `학생 키링 도안 ${n}`]));
fill('teach-stickers', '스티커 만들기 학생 결과물', [1, 2, 3, 4, 5, 6, 7, 8].map(n => [`stk-${n}`, `학생 스티커 도안 ${n}`]));

// 분야 필터
const filterBtns = document.querySelectorAll('[data-filter]');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  const f = btn.dataset.filter;
  filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  document.querySelectorAll('.project').forEach(a => { a.hidden = f !== 'all' && a.dataset.cat !== f; });
}));

// 라이트박스
const dlg = document.getElementById('viewer');
const vImg = document.getElementById('viewer-img');
const vCap = document.getElementById('viewer-cap');
let cur = 0, opener = null;

function show(i) {
  cur = (i + all.length) % all.length;
  const it = all[cur];
  vImg.src = `img/${it.file}.jpg`;
  vImg.alt = it.cap;
  vCap.innerHTML = `<strong>${esc(it.title)}</strong>${esc(it.cap)} <span>(${cur + 1}/${all.length})</span>`;
}
function open(i, from) {
  opener = from; show(i);
  if (!dlg.open) dlg.showModal();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-idx]');
  if (b) return open(+b.dataset.idx, b);
  const f = e.target.closest('[data-open]');
  if (f) { const i = all.findIndex(x => x.file === f.dataset.open); if (i > -1) open(i, f); }
  return undefined;
});
dlg.querySelector('.v-prev').addEventListener('click', () => show(cur - 1));
dlg.querySelector('.v-next').addEventListener('click', () => show(cur + 1));
dlg.querySelector('.v-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});
dlg.addEventListener('close', () => { if (opener) opener.focus(); });
