import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const HeroBtn = styled.a`
  position: relative;
  display: inline-block;
  align-self: center;
  padding: 10px 20px;
  font-size: 2rem;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 4px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #f46737, 0 0 25px #945dd6, 0 0 5px #f46737,
      0 0 10px #03e9f4;
  }
`;
export const HeroBtnSpan1 = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f46737);
  animation: btn-anim1 1s linear infinite;
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
`;
export const HeroBtnSpan2 = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
`;

export const HeroBtnSpan3 = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #945dd6);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
`;
export const HeroBtnSpan4 = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
// export const HeroBtn = styled.a`
//   @property --rotate {
//     syntax: "<angle>";
//     initial-value: 132deg;
//     inherits: false;
//   }
//   background: #191c29;
//   max-width: 200px;
//   height: 50px;
//   padding: 3px;
//   position: relative;
//   border-radius: 6px;
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   font-size: 2rem;
//   color: #fff;
//   cursor: pointer;
//   &:before {
//     content: "";
//     width: 104%;
//     height: 102%;
//     border-radius: 8px;
//     background-image: linear-gradient(
//       var(--rotate),
//       #5ddcff,
//       #3c67e3 43%,
//       #4e00c2
//     );
//     position: absolute;
//     z-index: -1;
//     top: -1%;
//     left: -2%;
//     animation: spin 2.5s linear infinite;
//   }
//   &:after {
//     position: absolute;
//     content: "";
//     top: calc(var(50px) / 6);
//     left: 0;
//     right: 0;
//     z-index: -1;
//     height: 100%;
//     width: 100%;
//     margin: 0 auto;
//     transform: scale(0.8);
//     filter: blur(calc(var(50px) / 6));
//     background-image: linear-gradient(
//       var(--rotate),
//       #5ddcff,
//       #3c67e3 43%,
//       #4e00c2
//     );
//     opacity: 1;
//     transition: opacity 0.5s;
//     animation: spin 2.5s linear infinite;
//   }
//   @keyframes spin {
//     0% {
//       --rotate: 0deg;
//     }
//     100% {
//       --rotate: 360deg;
//     }
//   }
// `;
