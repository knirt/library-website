import React from "react";
import { filterContent } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";
import { Tags } from "../types";
import SearchForm from "./SearchForm";

const FilterBar: React.FC = function () {
    const dispatch = useAppDispatch();

    const displayAll = function () {
        dispatch({ type: "all", payload: "all" });
    };

    const filterMeta = function () {
        dispatch(filterContent("filter", Tags.META));
    };
    const filterEpis = function () {
        dispatch(filterContent("filter", Tags.EPIS));
    };
    const filterEthics = function () {
        dispatch(filterContent("filter", Tags.ETHICS));
    };
    const filterPsych = function () {
        dispatch(filterContent("filter", Tags.PSYCH));
    };
    const filterTheo = function () {
        dispatch(filterContent("filter", Tags.THEOLOGY));
    };
    const filterMyst = function () {
        dispatch(filterContent("filter", Tags.MYSTICISM));
    };
    const filterPol = function () {
        dispatch(filterContent("filter", Tags.POLITICS));
    };
    const filterLit = function () {
        dispatch(filterContent("filter", Tags.LIT));
    };

    return (
        <div className="filter-bar-center-wrapper">
            <div className="filter-bar-container">
                <div className="filter-bar-box filter-subflex">
                    <button className="nav-box" onClick={displayAll}>
                        All
                    </button>
                    <button className="nav-box" onClick={filterMeta}>
                        {Tags.META}
                    </button>
                    <button className="nav-box" onClick={filterEthics}>
                        {Tags.ETHICS}
                    </button>
                    <button className="nav-box" onClick={filterLit}>
                        {Tags.LIT}
                    </button>
                    <button className="nav-box" onClick={filterPol}>
                        {Tags.POLITICS}
                    </button>
                    <button className="nav-box" onClick={filterEpis}>
                        {Tags.EPIS}
                    </button>
                    <button className="nav-box" onClick={filterPsych}>
                        {Tags.PSYCH}
                    </button>
                    <button className="nav-box" onClick={filterTheo}>
                        {Tags.THEOLOGY}
                    </button>
                    <button className="nav-box" onClick={filterMyst}>
                        {Tags.MYSTICISM}
                    </button>
                </div>
                <div className="filter-bar-box search-bar-box">
                    <SearchForm></SearchForm>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
