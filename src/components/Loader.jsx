import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0; 
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots 
        height={80} 
        width={80} 
        radius={9} 
        color="#3f51b5" 
        ariaLabel="loading"
      />
    </LoaderWrapper>
  );
};