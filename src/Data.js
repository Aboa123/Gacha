// 등급은 N ~ LR
// N, R, SR, SSR, UR, LR
// N 10장
// R 10장
// SR 5장
// SSR 5장
// UR 5장
// LR 3장
// 총 68장

// 판매금액
// N 1,000원
// R 5,000원
// SR 15,000원
// SSR 50,000원
// UR 100,000원
// LR 300,000원

const Data = [
    {
        class: "N",
        cards : [
            {
                name: "슬라임 나이트",
                url: "/img/gocha/n/slime_knight.png"
            },
            {
                name: "주황버섯",
                url: "/img/gocha/n/orange_mushroom.png"
            },
            {
                name: "검은색 이쑤시개",
                url: "/img/gocha/n/black_issu.png"
            },
            {
                name: "VRCHAT 정모",
                url: "/img/gocha/n/trash.png"
            },
            {
                name: "농부(전투력5)",
                url: "/img/gocha/n/farmer.png"
            },
            {
                name: "미니언",
                url: "/img/gocha/n/minion.png"
            },
            {
                name: "용감한쿠키",
                url: "/img/gocha/n/brave_cookie.png"
            },
            {
                name: "굳(혐)건이",
                url: "/img/gocha/n/hym.png"
            },
            {
                name: "코로몬",
                url: "/img/gocha/n/coro.png"
            },
            {
                name: "갈라진 턱의 꼬마",
                url: "/img/gocha/n/tuck.png"
            },
            {
                name: "라면도둑 형제",
                url: "/img/gocha/n/ramen.png"
            },
            {
                name: "마을주민",
                url: "/img/gocha/n/jumin.png"
            },
            {
                name: "흔한 고블린",
                url: "/img/gocha/n/gobe.png"
            },
            {
                name: "제작자 Aboa",
                url: "/img/gocha/n/aboa.png"
            },
        ]
    },
    {
        class: "R",
        cards : [
            {
                name: "검은마법사 앤",
                url: "/img/gocha/r/little_witch.png"
            },
            {
                name: "상습 배신자",
                url: "/img/gocha/r/kyaru.png"
            },
            {
                name: "육개장 먹는 페코린느",
                url: "/img/gocha/r/peko.gif"
            },
            {
                name: "아쿠아(여신이였던 것)",
                url: "/img/gocha/r/acua.gif"
            },
            {
                name: "카즈마",
                url: "/img/gocha/r/kazuma.gif"
            },
            {
                name: "호로",
                url: "/img/gocha/r/horo.png"
            },
            {
                name: "젤다가 아닌 링크",
                url: "/img/gocha/r/zelda.png"
            },
            {
                name: "제작자가 좋아하는 치킨",
                url: "/img/gocha/r/sunsal.png"
            },
            {
                name: "메카 띵호잉루",
                url: "/img/gocha/r/meka_t.png"
            },
            {
                name: "화방녀",
                url: "/img/gocha/r/hwabang.png"
            },
            {
                name: "바이올렛",
                url: "/img/gocha/r/violet.gif"
            },
            {
                name: "길버트",
                url: "/img/gocha/r/gill.gif"
            },
            {
                name: "퓨어바닐라",
                url: "/img/gocha/r/vanilla.png"
            },
        ]
    },
    {
        class: "SR",
        cards : [
            {
                name: "♥탱글탱글 프리즈너♥",
                url: "/img/gocha/sr/priz.gif"
            },
            {
                name: "고블린 슬레이어",
                url: "/img/gocha/sr/gobe_slayer.gif"
            },
            {
                name: "그 시절 케로로",
                url: "/img/gocha/sr/keroro.gif"
            },
            {
                name: "오반 (대학생)",
                url: "/img/gocha/sr/oban.png"
            },
            {
                name: "키르아 신속",
                url: "/img/gocha/sr/kirua.gif"
            },
            {
                name: "키리토",
                url: "/img/gocha/sr/kirito.gif"
            },
            {
                name: "아스나",
                url: "/img/gocha/sr/asuna.gif"
            },
            {
                name: "세이버 얼터",
                url: "/img/gocha/sr/saber.gif"
            },
            {
                name: "와! 샌즈!",
                url: "/img/gocha/sr/sans.gif"
            },
            {
                name: "와! 파피루스!",
                url: "/img/gocha/sr/papy.gif"
            },
            {
                name: "탄지로 히노카미 카구라",
                url: "/img/gocha/sr/tangiro.gif"
            },
            {
                name: "렌고쿠",
                url: "/img/gocha/sr/rengoku.gif"
            },
            {
                name: "아카메",
                url: "/img/gocha/sr/akame.gif"
            },
            {
                name: "메구미",
                url: "/img/gocha/sr/megu.gif"
            },
            {
                name: "네지",
                url: "/img/gocha/sr/nezi.gif"
            },
            {
                name: "타카무라 마모루",
                url: "/img/gocha/sr/mamoru.gif"
            },
        ]
    },
    {
        class: "SSR",
        cards : [
            {
                name: "람 & 렌",
                url: "/img/gocha/ssr/rem_ram.gif"
            },
            {
                name: "가츠 버서커",
                url: "/img/gocha/ssr/berserk.gif"
            },
            {
                name: "루피 (류오)",
                url: "/img/gocha/ssr/ryuo.gif"
            },
            {
                name: "이치고 (풀브링)",
                url: "/img/gocha/ssr/ichigo_full.png"
            },
            {
                name: "나츠 염룡왕모드",
                url: "/img/gocha/ssr/natsu.png"
            },
            {
                name: "이름 없는 왕",
                url: "/img/gocha/ssr/noname.gif"
            },
            {
                name: "곤 제약과 서약",
                url: "/img/gocha/ssr/gon.gif"
            },
            {
                name: "멜리오다스 마신화",
                url: "/img/gocha/ssr/melrio.gif"
            },
            {
                name: "마신왕",
                url: "/img/gocha/ssr/masin.png"
            },
            {
                name: "제천대성 진모리",
                url: "/img/gocha/ssr/gof.gif"
            },
            {
                name: "(구)랭킹 1위 열렙전사",
                url: "/img/gocha/ssr/level.png"
            },
            {
                name: "(현)랭킹 1위 스톤",
                url: "/img/gocha/ssr/stone.png"
            },
            {
                name: "켄파치 만해",
                url: "/img/gocha/ssr/ken.png"
            },
            {
                name: "나루토 육도모드",
                url: "/img/gocha/ssr/naruto.gif"
            },
            {
                name: "사스케 육도차크라",
                url: "/img/gocha/ssr/sasuke.gif"
            },
            {
                name: "쿠죠 죠타로",
                url: "/img/gocha/ssr/zozo.gif"
            },
            {
                name: "D.I.O",
                url: "/img/gocha/ssr/dio.gif"
            },
            {
                name: "가사이 유노",
                url: "/img/gocha/ssr/uno.gif"
            },
            {
                name: "젠이츠 벽력일섬",
                url: "/img/gocha/ssr/el.gif"
            },
        ]
    },
    {
        class: "UR",
        cards : [
            {
                name: "알파몬 왕룡검",
                url: "/img/gocha/ur/alphamon.gif"
            },
            {
                name: "오메가몬",
                url: "/img/gocha/ur/omegamon.gif"
            },
            {
                name: "아르세우스 메가진화",
                url: "/img/gocha/ur/aruseus.gif"
            },
            {
                name: "사이타마",
                url: "/img/gocha/ur/sitama.gif"
            },
            {
                name: "역대 최강의 인간 하루",
                url: "/img/gocha/ur/haru.png"
            },
            {
                name: "가이 팔문둔갑",
                url: "/img/gocha/ur/bam.gif"
            },
            {
                name: "골드 익스피리언스 레퀴엄",
                url: "/img/gocha/ur/ger.png"
            },
            {
                name: "모브 제어불가",
                url: "/img/gocha/ur/mob.gif"
            },
            {
                name: "알리바바 전신마장",
                url: "/img/gocha/ur/baba.gif"
            },
            {
                name: "팩 폭주",
                url: "/img/gocha/ur/pack.png"
            },
            {
                name: "카네키 켄",
                url: "/img/gocha/ur/dokyo.gif"
            },
            {
                name: "키리시마 토우카",
                url: "/img/gocha/ur/touka.gif"
            },
            {
                name: "뱀파이어 세라스",
                url: "/img/gocha/ur/seras.gif"
            },
        ]
    },
    {
        class: "LR",
        cards : [
            {
                name: "중성마녀",
                url: "/img/gocha/lr/gay.gif"
            },
            {
                name: "마법소녀가 되지않을래?",
                url: "/img/gocha/lr/cube.gif"
            },
            {
                name: "쥬다르의 왕 신드바드",
                url: "/img/gocha/lr/sind.gif"
            },
            {
                name: "천원돌파 그렌라간",
                url: "/img/gocha/lr/gren.gif"
            },
            {
                name: "최강합체 오지터",
                url: "/img/gocha/lr/gogeta.gif"
            },
            {
                name: "손오공 무의식의 극의",
                url: "/img/gocha/lr/goku.gif"
            },
            {
                name: "미사카 미코토 LEVEL 6",
                url: "/img/gocha/lr/level6.gif"
            },
            {
                name: "아카드 피의 군주",
                url: "/img/gocha/lr/akad.gif"
            },
            {
                name: "별의 수호자 아우렐리온 솔",
                url: "/img/gocha/lr/sol.gif"
            },
            {
                name: "괴인 가로우",
                url: "/img/gocha/lr/garou.png"
            },
        ]
    },
]


export default Data;