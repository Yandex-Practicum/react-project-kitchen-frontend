import React, { useMemo } from "react"
import agent from "../../../agent"
import { connect } from "react-redux"
import { SET_PAGE } from "../../../constants/actionTypes"
import PageLink from "../PageLink/PageLink"
import style from './Pagination.module.css'
import { ArrowIcon } from 'components/Icons';

const mapDispatchToProps = (dispatch) => ({
    onSetPage: (page, payload) => dispatch({ type: SET_PAGE, page, payload }),
})

const Pagination = (props) => {
    if (props.articlesCount <= 10) return null
    const range = []
    for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) range.push(i)
    const startPage = useMemo(() => (
        range.length < 7 || props.currentPage < 4
    ) ? 1
        : props.currentPage > range.length - 4 ? range.length - 6
            : props.currentPage - 2,
        [props.currentPage, range]);
    const endPage = useMemo(() => (
        range.length < 7 || props.currentPage > range.length - 4
    ) ? range.length - 1
        : props.currentPage < 4 ? 6
            : props.currentPage + 3,
        [props.currentPage, range]);
    const arr = useMemo(() => range.slice(startPage, endPage), [range, startPage, endPage])

    const setPage = (page) => {
        if (props.pager) props.onSetPage(page, props.pager(page))
        else props.onSetPage(page, agent.Articles.all(page))
    }

    const onClick = (ev, num) => {
        ev.preventDefault()
        setPage(num)
    }

    const onPrevClick = (ev) => {
        ev.preventDefault()
        if (props.currentPage !== 0) setPage(props.currentPage - 1)
    }

    const onNextClick = (ev) => {
        ev.preventDefault()
        if (props.currentPage !== range.length - 1) setPage(props.currentPage + 1)
    }

    return (
        <nav>
            <ul className={style.pagination}>
                <PageLink
                    isCurrent={props.currentPage === 0}
                    onClick={(ev) => onClick(ev, 0)}
                    isFirst
                >
                    1</PageLink>
                <PageLink
                    isCurrent={false}
                    onClick={onPrevClick}
                >
                    <ArrowIcon side="left" />
                </PageLink>
                {
                    arr.map((num) => {
                        const isCurrent = num === props.currentPage
                        return (
                            <PageLink
                                isCurrent={isCurrent}
                                onClick={(ev) => onClick(ev, num)}
                                key={num.toString()}
                            >
                                {num + 1}
                            </PageLink>
                        )
                    })
                }
                <PageLink
                    isCurrent={false}
                    onClick={onNextClick}
                >
                    <ArrowIcon side="right" />
                </PageLink>
                <PageLink
                    isCurrent={props.currentPage === range.length - 1}
                    onClick={(ev) => onClick(ev, range.length - 1)}
                    isLast
                >
                    {range.length}
                </PageLink>
            </ul>
        </nav>
    )
}

export default connect(() => ({}), mapDispatchToProps)(Pagination)
