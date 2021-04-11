import React, {
    useState,
    useEffect
} from 'react';
import { Tooltip } from 'antd';
import {
    useSpring,
    animated
} from 'react-spring';

export const Card = (props) => {
    const [shildDisable, setShildDisable] = useState(true);
    const { inven } = props;
    
    const count = (item) => {
        let sum = 0;
        inven.map((v)=> {
            if(v.name === item.name)
            {
                sum+=1;
            }
        });
        return sum;
    }

    const shildStyle = useSpring({
        from: {
            height: "100%"
        },
        to: {
            height: shildDisable ? "100%" : "0%"
        }
    });

    return(
        !props.mainItem ?
        <div className={`gocha_card_touch gocha_card_${props.class}`}>
            <img
                width={"100%"}
                height={"100%"}
                style={{ position: "absolute", zIndex: 1 }}
                src={`/img/${props.class}_card.png`}
            />
            <img
                width={"100%"}
                height={"100%"}
                style={{ position: "absolute", objectFit: "fill" }}
                src={props.url}
            />
            {
                props.shildDisable &&
                <animated.div
                    onClick={() => setShildDisable(false)}
                    className={`card_shild card_shild_${props.class}`}
                    style={{ 
                        height: shildStyle.height,
                        color: props.class === "N" ? "#c39a0a" : "white" 
                    }}
                >
                    <span>{props.class}</span>
                </animated.div>
            }
            <span className={(props.class === "UR" || props.class === "LR") ? "card_name_white" : "card_name_color"}>{props.name}</span>
        </div>
        :
        props.mainItem.map((item, index)=>
            <Tooltip title={"클릭 시 판매됩니다.\n(Shift + Click 시 한장남기고 판매)"}>
                <button
                    key={index}
                    onClick={(e) => count(item, props.class) > 0 && props.sell(e, props.class, item.name)}
                    className={count(item, props.class) ? `gocha_card_touch gocha_card_${props.class}` : "gocha_card_touch"}
                >
                    {
                        count(item, props.class) > 0 &&(
                            <>
                            <img
                                width={"100%"}
                                height={"100%"}
                                style={{ position: "absolute", zIndex: 1 }}
                                src={`/img/${props.class}_card.png`}
                            />
                            <img
                                width={"100%"}
                                height={"100%"}
                                style={{ position: "absolute", objectFit: "fill" }}
                                src={item.url}
                            />
                            <span className="card_count">x{count(item, props.class)}</span>
                            </>
                        )
                    }
                    <span className={(props.class === "UR" || props.class === "LR") ? "card_name_white" : "card_name_color"}>{count(item, props.class) < 1 ? "?" : item.name}</span>
                </button>
            </Tooltip>
        )
    )
}