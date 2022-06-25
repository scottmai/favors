import Card from "./Card";
import HTMLFlipBook from 'react-pageflip';
import styled from "styled-components";
import { useRef } from "react";
import { TCard } from "../types";

const BookContainer = styled.div`
    /* margin: 0 auto; */
    /* width: 600px; */
    margin: auto;
    /* box-sizing: border-box; */
    /* height: 600px; */
`
const Book = ({ cards }: { cards: TCard[] }) => {
    const flipBookRef = useRef(null);
    return (
        <BookContainer>
            {/* @ts-ignore */}
            <HTMLFlipBook
                ref={dis => flipBookRef.current = dis}
                width={600}
                height={800}
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
                <div>
                    <Card card={{
                        id: 'cover',
                        title: "Cover card",
                        image: "https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g",
                    }} />
                </div>
                {cards.map((card, index) =>
                    <div key={index}>
                        <Card card={card} />
                    </div>
                )}
            </HTMLFlipBook>
        </BookContainer>
    );
}

export default Book
