import { FC } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { NavItems } from "./NavItems";

// import components from the Connection feature
import { DesktopConnect } from "../Connection/DesktopConnect";
import { DesktopNetworkIndicator } from "../Connection/DesktopNetworkIndicator";
import { MobileConnect } from "../Connection/MobileConnect";
import { MobileNetworkIndicator } from "../Connection/MobileNetworkIndicator";
import { Connection } from "../../containers/Connection";

const Container = styled.div`
  border-bottom: 1px solid var(--accent-color);
  box-shadow: var(--accent-glow-color) 0 0 6px 0;
`;

const MaxWidthWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: auto;
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

const Alert = styled.div`
  color: white;
  background: red;
  text-transform: uppercase;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBar: FC = () => {
  const { address } = Connection.useContainer();
  const isConnected = address !== null;
  return (
    <>
      <Container>
        <MaxWidthWrapper>
          <Content>
            <Logo />
            <NavItems />
          </Content>
          {isConnected ? <DesktopNetworkIndicator /> : <DesktopConnect />}
        </MaxWidthWrapper>
      </Container>
      {isConnected ? <MobileNetworkIndicator /> : <MobileConnect />}
    </>
  );
};
