import React, {
    useState,
    useEffect,
} from 'react';
import {
    Button,
    notification,
    Modal,
    message,
    Tooltip
} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { Card } from './components/Card';

import Data from './Data';

function App() {
    const [coin, setCoin] = useState(250000);

    const [draw, setDraw] = useState([]);
    const [inven, setInven] = useState([]);
    
    const [drawCheckNomal, setDrawCheckNomal] = useState(false);
    const [drawCheckSp, setDrawCheckSp] = useState(false);

    const [isInvenOpen, setIsInvenOpen] = useState(false);
    const [isRuleOpen, setIsRuleOpen] = useState(false);

    useEffect(()=>{
        const tmpInven = localStorage.getItem('inven');
        const tmpCoin = localStorage.getItem('coin');

        if(tmpInven)
        {
            setInven(JSON.parse(tmpInven));
        }

        if(tmpCoin)
        {
            setCoin(parseInt(tmpCoin));
        }

        message.config({
            maxCount: 3,
          });
    }, []);

    const nomalDraw = () => {
        if(coin < 50000)
        {
            notification.open({
                message: '안내',
                description: `${(50000-coin).toLocaleString()}다이아 부족합니다.`,
                placement: "bottomRight"
            });
        }
        else
        {
            setDrawCheckSp(true);
            setDrawCheckNomal(true);
            let d = [];
            let a = null;
            a = setInterval(()=>{
                const main_random = (Math.random() * (100 - 0 + 1)) + 0;
                if(main_random <= 0.05)
                {
                    const ran =  Math.floor((Math.random() * (Data[5].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[5].cards[ran],
                            class: "LR",
                            name: Data[5].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 1.05)
                {
                    const ran =  Math.floor((Math.random() * (Data[4].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[4].cards[ran],
                            class: "UR",
                            name: Data[4].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 3.4)
                {
                    const ran =  Math.floor((Math.random() * (Data[3].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[3].cards[ran],
                            class: "SSR",
                            name: Data[3].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 8.5)
                {
                    const ran =  Math.floor((Math.random() * (Data[2].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[2].cards[ran],
                            class: "SR",
                            name: Data[2].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 15)
                {
                    const ran =  Math.floor((Math.random() * (Data[1].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[1].cards[ran],
                            class: "R",
                            name: Data[1].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 72)
                {
                    const ran =  Math.floor((Math.random() * (Data[0].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[0].cards[ran],
                            class: "N",
                            name: Data[0].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else
                {
                    const ran =  Math.floor((Math.random() * (Data[0].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[0].cards[ran],
                            class: "N",
                            name: Data[0].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                
                if(d.length >= 10)
                {
                    clearInterval(a);
                    setDrawCheckSp(false);
                    setDrawCheckNomal(false);
                    setInven(inven.concat(d));
                }
            }, 100);

            localStorage.setItem('coin', coin - 50000);
            setCoin(coin - 50000);
        }
    }

    useEffect(()=>{
        localStorage.setItem('inven', JSON.stringify(inven));
    }, [inven]);

    const spDraw = () => {
        if(coin < 300000)
        {
            notification.open({
                message: '안내',
                description: `${(300000-coin).toLocaleString()}다이아 부족합니다.`,
                placement: "bottomRight"
            });
        }
        else
        {
            setDrawCheckSp(true);
            setDrawCheckNomal(true);
            let d = [];
            let a = null;
            a = setInterval(()=>{
                let main_random = (Math.random() * (9.4 - 0 + 1)) + 0;

                if(main_random > 8.5) main_random = 8.5;

                if(main_random <= 0.05)
                {
                    const ran =  Math.floor((Math.random() * (Data[5].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[5].cards[ran],
                            class: "LR",
                            name: Data[5].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 1.05)
                {
                    const ran =  Math.floor((Math.random() * (Data[4].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[4].cards[ran],
                            class: "UR",
                            name: Data[4].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 3.4)
                {
                    const ran =  Math.floor((Math.random() * (Data[3].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[3].cards[ran],
                            class: "SSR",
                            name: Data[3].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 8.5)
                {
                    const ran =  Math.floor((Math.random() * (Data[2].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[2].cards[ran],
                            class: "SR",
                            name: Data[2].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 15)
                {
                    const ran =  Math.floor((Math.random() * (Data[1].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[1].cards[ran],
                            class: "R",
                            name: Data[1].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else if(main_random <= 72)
                {
                    const ran =  Math.floor((Math.random() * (Data[0].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[0].cards[ran],
                            class: "N",
                            name: Data[0].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                else
                {
                    const ran =  Math.floor((Math.random() * (Data[0].cards.length - 0)) + 0);
                    d = [...d,
                        {
                            card : Data[0].cards[ran],
                            class: "N",
                            name: Data[0].cards[ran].name
                        }
                    ];
                    setDraw(d);
                }
                
                if(d.length >= 10)
                {
                    clearInterval(a);
                    setDrawCheckSp(false);
                    setDrawCheckNomal(false);
                    setInven(inven.concat(d));
                    localStorage.setItem('inven', JSON.stringify(inven));
                }
            }, 100);
            setCoin(coin - 500000);
            localStorage.setItem('coin', coin - 500000);
        }
    }

    const sell = (cl, name) => {
        let c = coin;
        let l = inven;
        let cost = 0;

        const tmp = inven.findIndex((v)=>{
            if(v.class === cl)
            {
                if(v.name === name)
                {
                    return v.name === name;
                }
            }
        });
        l.splice(tmp,1);

        if(cl === "N")
        {
            cost = 1000;
            setCoin(c + cost);
            localStorage.setItem('coin', c + cost);
        }
        if(cl === "R")
        {
            cost = 5000;
            setCoin(c + cost);
            localStorage.setItem('coin', c + cost);
        }
        if(cl === "SR")
        {
            cost = 15000;
            setCoin(c + cost);
            localStorage.setItem('coin', c + cost);
        }

        if(cl === "SSR")
        {
            cost = 50000;
            setCoin(c + cost);
            localStorage.setItem('coin', c + cost);
        }
        if(cl === "UR")
        {
            cost = 100000;
            setCoin(c + cost);
            localStorage.setItem('coin', c + cost);
        }
        if(cl === "LR")
        {
            cost = 300000;
            setCoin(c + cost);
            localStorage.setItem('coin', c + cost);
        }

        message.info(`${cost.toLocaleString()}다이아를 얻었습니다`);

        localStorage.setItem('inven', JSON.stringify(l));
    }

    const openInven = () => {
        setIsInvenOpen(true);
    }

    const openRule = () => {
        setIsRuleOpen(true)
    }

    const cardSum = () => Data[0].cards.length+Data[1].cards.length+Data[2].cards.length+Data[3].cards.length+Data[4].cards.length+Data[5].cards.length;

    return (
        <div className="app">
            <header className="header">
                <button onClick={openInven} className="inventory_button" disabled={drawCheckNomal}>
                    인벤토리
                </button>
                <button onClick={openRule} className="rule_button" disabled={drawCheckNomal}>
                    뽑기확률 및 카드개수
                </button>
                <div style={{ marginRight: 50 }}>
                    <button onClick={nomalDraw} className="nmButton" disabled={drawCheckNomal}>
                        일반 10장 뽑기<br/>
                        50,000 다이아
                    </button>
                    <button onClick={spDraw} className="spButton" style={{ marginLeft: 20, height: "auto" }} disabled={drawCheckSp}>
                        스페셜 10장 뽑기<br/>
                        500,000 다이아
                    </button>
                </div>
                <p>
                    <img style={{ width: "30px", height: "30px", marginRight: "10px" }} src={'/img/dia.png'} />
                    {coin.toLocaleString()}
                </p>
            </header>
            <div className="panel">
                <div className="penel_gocha">
                    {draw.map((item, index)=> <Card key={index} class={item.class} name={item.name} url={item.card.url} />)}
                </div>
            </div>
            <Modal
                visible={isInvenOpen}
                width={"90%"}
                centered
                onOk={() => setIsInvenOpen(false)}
                onCancel={() => setIsInvenOpen(false)}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
            >
                <div className="inven">
                    <h1 className="inven_title">수집카드</h1>
                    <div className="inven_panel">
                        {Data.map((item, index)=><Card key={index} class={item.class} mainItem={item.cards} inven={inven} sell={sell} />)}
                    </div>
                </div>
            </Modal>
            <Modal
                visible={isRuleOpen}
                width={"90%"}
                centered
                onOk={() => setIsRuleOpen(false)}
                onCancel={() => setIsRuleOpen(false)}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
            >
                <div className="info">
                    <div className="info_left">
                        등급은 N, R, SR, SSR, UR, LR으로 이루어져 있습니다.<br/>
                        N등급 {Data[0].cards.length}장<br/>
                        R등급 {Data[1].cards.length}장<br/>
                        SR등급 {Data[2].cards.length}장<br/>
                        SSR등급 {Data[3].cards.length}장<br/>
                        UR등급 {Data[4].cards.length}장<br/>
                        LR등급 {Data[5].cards.length}장<br/>
                        총 {cardSum()}장<br/><br/>
                        N등급 65%<br/>
                        R등급 15%<br/>
                        SR등급 12%<br/>
                        SSR등급 4.5%<br/>
                        UR등급 1%<br/>
                        LR등급 0.1%<br/>
                    </div>
                    <div className="info_right">
                        판매금액<br/>
                        N등급 1,000원<br/>
                        R등급 5,000원<br/>
                        SR등급 15,000원<br/>
                        SSR등급 50,000원<br/>
                        UR등급 100,000원<br/>
                        LR등급 300,000원<br/><br/>
                        일반뽑기 N ~ LR 랜덤 지급<br/>
                        스페셜뽑기 N, R 등급 제외 SR ~ LR 랜덤 지급
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default App;
