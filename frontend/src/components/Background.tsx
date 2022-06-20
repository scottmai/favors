import styled from "styled-components";
import { colors } from "../constants";

const Background = styled.div`
    height: 100%;
    /* width: 60%; */
    /* background-color: ${colors.secondary}; */
    background-image: url("https://img.freepik.com/free-vector/soft-purple-floral-with-watercolor-abstract-background_65186-1644.jpg?w=2000");
    @media screen and (max-width: 600px) {
        /* width: 80%; */
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
    /* border-left: 32px solid ${colors.border}; */
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    position: relative;
`

export default Background;