import React, {} from 'react';
import { Tooltip } from 'antd';

export const Card = (props) => {
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

    return(
        !props.mainItem ?
        <div className={`gocha_card_touch gocha_card_${props.class}`}>
            <span style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}>{props.class}</span>
            <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>{props.name}</span>
        </div>
        :
        props.mainItem.map((item, index)=>
            <Tooltip title="클릭 시 판매됩니다.">
                <button
                    key={index}
                    onClick={() => count(item, props.class) > 0 && props.sell(props.class, item.name)}
                    className={count(item, props.class) ? `gocha_card_touch gocha_card_${props.class}` : "gocha_card_touch"}
                >
                    {
                        count(item, props.class) > 0 &&
                        <span className="card_count">x{count(item, props.class)}</span>
                    }
                    <span style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}>{props.class}</span>
                    <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>{count(item, props.class) < 1 ? "?" : item.name}</span>
                </button>
            </Tooltip>
        )
    )
}