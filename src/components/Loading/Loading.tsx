import css from "./Loading.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className={css.loaderDiv}>
      <ClipLoader
        color="blue"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
