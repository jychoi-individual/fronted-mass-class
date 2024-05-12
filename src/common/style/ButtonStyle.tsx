// 라이브러리
import { css } from "styled-components";

const calculateBtnStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.color.lightSmoke};
  box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.smokeOpacity};
  padding: 0;

  svg {
    color: ${(props) => props.theme.color.smoke};
    font-size: 18px;
    display: none;
  }

  &:first-child {
    svg {
      color: ${(props) => props.theme.color.deepPrimary};
      font-size: 18px;
      display: none;
    }
  }

  &.active {
    box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.deepPrimary};

    svg {
      display: block;
    }
  }
`;

const heartStyle = css`
  svg {
    font-size: 40px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const dotStyle = css`
  svg {
    font-size: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const addNumberStyle = css`
  svg {
    font-size: 28px;
    stroke-width: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const numberStyle = css`
  svg {
    font-size: 28px;
    stroke-width: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const operateStyle = css`
  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.deepPrimary};
  }

  &:last-child {
    svg {
      color: ${(props) => props.theme.color.smoke};
    }

    &:active {
      box-shadow: none;
      background: ${(props) => props.theme.color.vividDeepPrimary};
    }
  }s
`;

const ButtonStyle = css`
  border-radius: 50px;
  cursor: pointer;
  height: 90px;
  width: 110px;
  box-shadow: 1px 1px 1px 1px ${(props) => props.theme.color.shadow};
  transition-duration: 0.3s;

  svg {
    font-size: 25px;
    color: ${(props) => props.theme.color.dark};
  }

  &.operate__btn {
    ${operateStyle}
  }

  &.number__btn {
    ${numberStyle}
  }

  &.add__number__btn {
    ${addNumberStyle}
  }

  &.add__dot__btn {
    ${dotStyle}
  }

  &.heart__btn {
    ${heartStyle}
  }

  &.calcaulte__canvas__btn {
    ${calculateBtnStyle}
  }
`;

export default ButtonStyle;
