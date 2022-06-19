import Card from "./Card";
import HTMLFlipBook from 'react-pageflip';
import styled from "styled-components";
import { useRef } from "react";

const BookContainer = styled.div`
    /* margin: 0 auto; */
`
const Book = () => {
    const flipBookRef = useRef(null);
    return (
        <BookContainer>
            {/* @ts-ignore */}
            <HTMLFlipBook
                ref={dis => flipBookRef.current = dis}
                width={550}
                height={733}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
            // onFlip={this.onPage}
            // onChangeOrientation={this.onChangeOrientation}
            // onChangeState={this.onChangeState}
            >
                <div className="demoPage">hi</div>
                <div className="demoPage">there</div>
                <div>
                    <Card title="Cute Dog" />
                </div>
                <div>
                    <Card title="Cute Dog" />
                </div>
                <div>
                    <Card title="Cute Dog" />
                </div>

            </HTMLFlipBook>
        </BookContainer>
    );
}

export default Book
