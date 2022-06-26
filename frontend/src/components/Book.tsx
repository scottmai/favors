import Card from "./Card";
import HTMLFlipBook from 'react-pageflip';
import styled from "styled-components";
import { useContext, useRef } from "react";
import { VoucherContext } from "../App";
import InfoCard from "./InfoCard";

const BookContainer = styled.div`
    /* margin: 0 auto; */
    /* width: 600px; */
    margin: auto;
    /* height: 80%; */
    /* box-sizing: border-box; */
    /* height: 600px; */
`
const Book = () => {
    const { vouchers } = useContext(VoucherContext);
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
                    <InfoCard>
                        A year ago today, you made me the luckiest person on earth.
                        <br />
                        And every day I am still awe-strucken by the compassion, wit, intelligence that you display so nonchalantly
                        <br />
                        <br />
                        I love you so much and I'd would give you the world
                        <br />
                        <br />
                        But until then, I made you some cute lil coupons that you can redeem any time you like :P
                        <br />
                        So that I can more easily show you just how much I love you
                        <br />
                        <br />
                        Happy Anniversay Dhiv Dhivs 😘
                    </InfoCard>
                </div>
                {vouchers.map((voucher, index) =>
                    <div key={voucher.id}>
                        <Card card={voucher} />
                    </div>
                )}
                <InfoCard>
                    More coming soon
                    <br />
                    <br />
                    Feel free to drop suggestions :P
                    <br />
                    <br />
                    I love youuuuuuu 😘
                </InfoCard>
            </HTMLFlipBook>
        </BookContainer>
    );
}

export default Book
