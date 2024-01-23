import React from "react";
import styled from "styled-components";
export default function Headers() {
  return (
    <>
      <Div>
        <Components>
          <LeftComponents>
            <Img src="logo192.png" />
            <Heading>Toptal</Heading>
            <Tabs>Top 3%</Tabs>
            <Tabs>Why</Tabs>
            <Tabs>Clients</Tabs>
            <Tabs>Industries</Tabs>
            <Tabs>Community</Tabs>
            <Tabs>Blog</Tabs>
            <Tabs>About Us</Tabs>
          </LeftComponents>
          <RightComponents>
            <Tabs>Apply as a Freelancer</Tabs>
            <Button>Hire Top Talent</Button>
            <Tabs>Log In</Tabs>
          </RightComponents>
        </Components>

        <Center>
          <Title>Our Clients</Title>
          <Content>
            Toptal connects elite talent with the most exciting companies in the
            world, including leading Fortune 500 brands and innovative Silicon
            Valley startups. Our focus on challenging, tier-one projects powers
            the world’s largest high-skilled workforce.
          </Content>
        </Center>
      </Div>
    </>
  );
}
const Div = styled.div`
  color: #ffffff;
  background-color: #0f256e;
  height: 23rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;
const Components = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 25px 0px 25px;
  align-items: center;
`;
const LeftComponents = styled.div`
  display: flex;
  gap: 21px;
  align-items: center;
`;
const RightComponents = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  gap: 21px;
`;
const Img = styled.img`
  filter: sepia(100%);
  height: 30px;
  width: 30px;
`;
const Tabs = styled.div`
  font-size: 13px;
`;
const Heading = styled.div`
font-size: 1.89rem;
  font-weight: 600;
`;
const Button = styled.button`
  color: #ffffff;
  background: #00cc83;
  border: none;
  padding: 10px 24px 10px 24px;
  border-radius: 4px;
  font-weight:600px;
`;
const Title = styled.div`
  font-weight: 300;
  font-size: 3rem;
  margin-top: 65px;
`;
const Content = styled.div`
  font-size: 20px;
  line-height: 28px;
  width: 100%;
  max-width: 776px;
  letter-spacing: 0.57px;
  font-weight: 300;
  margin: 24px 0px 0px 0px;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
