import React, { useMemo } from "react"
import agent from "../../../agent"
import { connect } from "react-redux"
import { SET_PAGE } from "constants/actionTypes"
import style from './Pagination.module.scss'
import { ArrowIcon } from 'components/Icons'
import PropTypes from 'prop-types'
import { PageLink } from "../PageLink";

// pager={props.pager} articlesCount={props.articlesCount} currentPage={props.currentPage} 

const mapStateToProps = (state) => {
	return {
		articleList: state.articleList,
	}
}

const mapDispatchToProps = (dispatch) => ({
    onSetPage: (page, payload) => dispatch({ type: SET_PAGE, page, payload }),
})

const PaginationComponent = ({articleList, onSetPage}) => {
    const {pager, currentPage, articlesCount} = articleList

    if (articlesCount <= 10) return null
    const range = []
    for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) range.push(i)
    const startPage = useMemo(() => (
        range.length < 7 || currentPage < 4
    ) ? 1
        : currentPage > range.length - 4 ? range.length - 6
            : currentPage - 2,
        [currentPage, range]);
    const endPage = useMemo(() => (
        range.length < 7 || currentPage > range.length - 4
    ) ? range.length - 1
        : currentPage < 4 ? 6
            : currentPage + 3,
        [currentPage, range]);
    const arr = useMemo(() => range.slice(startPage, endPage), [range, startPage, endPage])
    const setPage = (page) => {
        if (pager) onSetPage(page, pager(page))
        else onSetPage(page, agent.Articles.all(page))
    }

    const onPrevClick = (ev) => {
        ev.preventDefault()
        if (currentPage > 0) setPage(currentPage - 1)
    }

    const onNextClick = (ev) => {
        ev.preventDefault()
        if (currentPage < range.length - 1) setPage(currentPage + 1)
    }
    return (
            <ul className={style.pagination}>
                <PageLink
                    isCurrent={currentPage === 0}
                    onClick={(ev) => {
                        ev.preventDefault()
                        setPage(0)
                    }}
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
                        return (
                            <PageLink
                                isCurrent={num === currentPage}
                                onClick={(ev) => {
                                    ev.preventDefault()
                                    setPage(num)
                                }}
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
                    isCurrent={currentPage === range.length - 1}
                    onClick={(ev) => {
                        ev.preventDefault()
                        setPage(range.length - 1)
                    }}
                    isLast
                >
                    {range.length}
                </PageLink>
            </ul>
    )
}

export const Pagination = connect(mapStateToProps, mapDispatchToProps)(PaginationComponent)

PaginationComponent.propTypes = {
    articlesCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    onSetPage: PropTypes.func.isRequired,
    pager: PropTypes.func
}
