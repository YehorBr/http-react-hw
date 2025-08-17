import { LoadMoreButton, LoadMoreWrapper } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <>
      <LoadMoreWrapper>
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      </LoadMoreWrapper>
    </>
  );
};
