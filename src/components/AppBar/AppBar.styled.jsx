import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  min-width: 320px;
  border-bottom: 1px solid #eee;
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;
  padding: 20px 15px 20px 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const AppBarWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 50px;
`;

export const AppBarTitle = styled.h1`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const AppBarTitleText = styled.p``;
