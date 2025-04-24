import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  setPage,
  isLoading,
}) => {
  return (
    <div className={css.buttonDiv}>
      <button
        className={css.button}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          setPage((prevPage) => prevPage + 1)
        }
        disabled={isLoading}
      >
        Load more
      </button>
    </div>
  );
};
