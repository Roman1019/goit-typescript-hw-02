import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ setPage, isLoading }) {
  return (
    <div className={css.buttonDiv}>
      <button
        className={css.button}
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={isLoading}
      >
        Load more
      </button>
    </div>
  );
}
