import React from "react";
import { Field, Form } from "react-final-form";
import { useAppDispatch } from "../redux/hooks";

const SearchForm: React.FC = function () {
    const dispatch = useAppDispatch();

    return (
        <Form
            onSubmit={(formObj) => {
                dispatch({ type: "search", payload: formObj.search });
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <label className="title-text label-form">
                        <b>Or search by Author / Title: </b>
                    </label>

                    <Field<string>
                        name="search"
                        component="input"
                        placeholder=" Search..."
                        id="search-input"
                    />
                    <button type="submit" id="submit-btn">
                        Search
                    </button>
                </form>
            )}
        />
    );
};

export default SearchForm;
