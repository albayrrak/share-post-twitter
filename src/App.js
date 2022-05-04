import { useState, useEffect } from "react";
import "./App.css";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { Data } from "./data";

function App() {
    const [state, setState] = useState();
    const [dataIndex, setDataIndex] = useState(0);

    const getRandomIndex = () => {
        setState(Data[dataIndex]);
    };

    useEffect(() => {
        getRandomIndex();
    }, [dataIndex]);

    const changeTweet = () => {
        if (dataIndex < Data.length - 1) {
            setDataIndex((c) => c + 1);
        } else {
            setDataIndex(0);
        }
    };

    return (
        <div className='App'>
            <div className='share-tweet'>
                <div className='title'>
                    <h5>
                        Tweetle BUTONUNA BASARAK DOĞRUDAN TWEETİ
                        PAYLAŞABİLİRSİNİZ. HERHANGİ BİR METİN EKLEMENİZE GEREK
                        YOKTUR.
                    </h5>
                </div>
                <div className='content'>
                    <div className='content-text'>{state?.tweet}</div>
                    <div className='share'>
                        <TwitterShareButton
                            url={"#coin"}
                            title={state?.tweet}
                            className='Demo__some-network__share-button'
                        >
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <button
                            className='random-button'
                            onClick={() => changeTweet()}
                        >
                            Yenile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
