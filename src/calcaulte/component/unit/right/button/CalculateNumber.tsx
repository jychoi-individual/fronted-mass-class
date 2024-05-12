// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../../../common/component/Button";

// 스타일
import GlobalTheme from "../../../../../style/GlobalTheme";

// 아이콘
import {
  Fa0,
  Fa1,
  Fa2,
  Fa3,
  Fa4,
  Fa5,
  Fa6,
  Fa7,
  Fa8,
  Fa9,
  FaC,
  FaCircle,
  FaPercent,
  FaPlusMinus,
} from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

/**
 * @desc 계산기에서의 숫자 영역입니다.
 * @return {JSX.Element} 계산기에서 숫자 영역 컴포넌트를 반환합니다.
 */
function CalculateNumber(): JSX.Element {
  return (
    <CalculateNumberDiv className="calcaulate__number">
      {/** 첫 버튼 줄 영역입니다. 하트, 퍼센트, 플러스마이너스 버튼을 출력합니다. */}
      <NumberButtonWrap>
        <Button
          icon={<FcLike />}
          className={"heart__btn"}
          background={GlobalTheme.background.deepWhite}
        />
        <Button
          icon={<FaPercent />}
          className={"add__number__btn"}
          background={GlobalTheme.background.deepWhite}
        />
        <Button
          icon={<FaPlusMinus />}
          className={"add__number__btn"}
          background={GlobalTheme.background.deepWhite}
        />
      </NumberButtonWrap>

      {/** 두번째 버튼 줄 영역입니다. 7, 8, 9 버튼을 출력합니다. */}
      <NumberButtonWrap>
        <Button
          icon={<Fa7 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<Fa8 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<Fa9 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
      </NumberButtonWrap>

      {/** 세번째 버튼 줄 영역입니다. 4, 5, 6 버튼을 출력합니다. */}
      <NumberButtonWrap>
        <Button
          icon={<Fa4 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<Fa5 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<Fa6 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
      </NumberButtonWrap>

      {/** 네번째 버튼 줄 영역입니다. 1, 2, 3 버튼을 출력합니다. */}
      <NumberButtonWrap>
        <Button
          icon={<Fa1 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<Fa2 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<Fa3 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
      </NumberButtonWrap>

      {/** 네번째 버튼 줄 영역입니다. clear, 0, dot 버튼을 출력합니다. */}
      <NumberButtonWrap>
        <Button
          icon={<FaC />}
          className={"add__number__btn"}
          background={GlobalTheme.background.deepWhite}
        />
        <Button
          icon={<Fa0 />}
          className={"number__btn"}
          background={GlobalTheme.background.white}
        />
        <Button
          icon={<FaCircle />}
          className={"add__dot__btn"}
          background={GlobalTheme.background.deepWhite}
        />
      </NumberButtonWrap>
    </CalculateNumberDiv>
  );
}

export default CalculateNumber;

const CalculateNumberDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NumberButtonWrap = styled.div`
  display: flex;
  gap: 18px;
`;
