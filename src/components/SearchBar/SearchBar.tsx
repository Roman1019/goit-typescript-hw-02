import { Field, Form, Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values, actions) => {
          if (!values.search.trim()) {
            toast.error("Please enter something in the search field!");
          } else {
            onSearch(values.search);
            console.log(values.search);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            <CiSearch size={20} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
