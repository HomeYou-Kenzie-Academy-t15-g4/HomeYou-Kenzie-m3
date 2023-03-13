import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
`;

export const Icon = styled.img`
  height: 3rem;
  margin-bottom: 1rem;
`;

export const Devs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DevLink = styled.a`
  margin: 0.5rem 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey200};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
