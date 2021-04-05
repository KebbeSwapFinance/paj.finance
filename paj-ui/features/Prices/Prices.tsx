import { FC } from "react";
import styled from "styled-components";
import { Card, Grid } from "@geist-ui/react";
import { Prices as PricesContainer } from "../../containers/Prices";

const DataPoint = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;

const Label = styled.div`
  font-family: "Source Sans Pro", sans-serif;
`;

const Monospace = styled.div`
  font-family: "Source Code Pro", sans-serif;
`;

const TradeButton = styled.a`
  box-sizing: border-box;
  display: inline-block;
  padding: 0 1.25rem;
  height: 2rem;
  line-height: 2rem;
  min-width: 9.375rem;
  width: initial;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
  color: #00547a;
  background-color: #fff;
  border: 1px solid #00547a;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    box-shadow: rgb(83, 255, 226) 0px 0px 8px;
  }
`;

const formatDollars = (num: number) =>
  "$" +
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const CoinIcon = ({ src }: { src: string }) => (
  <img src={src} style={{ width: `24px`, marginRight: `0.75rem` }} />
);

export const Prices: FC = () => {
  const { prices } = PricesContainer.useContainer();
  return (
    <Card style={{ height: "169px" }}>
      <Card.Content>
        <TradeButton
          href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x429881672b9ae42b8eba0e26cd9c73711b891ca5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy $Kebbe
        </TradeButton>
        <DataPoint>
          <Label>
            <CoinIcon src="/pickle.png" />
            KEBBE:
          </Label>
          <Monospace>
            {prices?.pickle ? formatDollars(prices.pickle) : "--"}
          </Monospace>
        </DataPoint>
        <DataPoint>
          <Label>
            <CoinIcon src="/ethereum.png" />
            ETH:
          </Label>
          <Monospace>
            {prices?.eth ? formatDollars(prices.eth) : "--"}
          </Monospace>
        </DataPoint>
      </Card.Content>
    </Card>
  );
};
