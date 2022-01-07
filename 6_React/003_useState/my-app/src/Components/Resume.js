import React, {useState} from "react";

function Resume(props) {
    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false);

    function clickLike() {
        setLike(like + 1);
    }

    function clickUnLike() {
        setLike(like - 1);
    }

    function toggleLike() {
        if (isLike) {
            setLike(like - 1);
            setIsLike(false);
        } else {
            setLike(like + 1);
            setIsLike(true);
        }
    }

    const myColor = props.color;
    const styleColor = { color: myColor };

    return(
        <div style={{border:"solid 1px", width:"500px"}}>
            <h1>{props.name} 자기소개서</h1>
            <h1>{props.hello}</h1>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2>좋아하는 색 : <span style={styleColor}>{myColor}</span></h2>
            <button onClick={clickLike}>like</button>
            <button onClick={clickUnLike}>unlike</button>
            <button onClick={toggleLike}>togglelike</button>
            <span>{like}</span>
        </div>
    )
}

export default Resume;