import styled from "styled-components";

import { ReactComponent as Icon } from "../assets/icon.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Icon
        fill="var(--color-dark)"
        stroke="var(--color-dark)"
        width={128}
        height={128}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 160px;
  padding: 16px 32px;
`;

export default Header;
