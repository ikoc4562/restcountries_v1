import Form from 'react-bootstrap/Form';
import React, {useState} from "react";

function Pagination(props) {

    const totalPage = Math.ceil(props.filtered.length / props.pagination.dataShowLenght);
    const paginationPage = (page) => {
        props.setPagination({ ...props.pagination, currentPage: page });
    };
    const paginationNext = () => {
        if (props.pagination.currentPage < totalPage) {
            props.setPagination({ ...props.pagination, currentPage: props.pagination.currentPage + 1 });
        } else {
            props.setPagination({ ...props.pagination, currentPage: totalPage });
        }
    };
    const paginationPrev = () => {
        if (props.pagination.currentPage > 1) {
            props.setPagination({ ...props.pagination, currentPage: props.pagination.currentPage - 1 });
        } else {
            props.setPagination({ ...props.pagination, currentPage: 1 });
        }
    };

    const paginationArea = () => {
        const items = [];
        let threePoints = true;
        for (let number = 1; number <= totalPage; number++) {
            if (
                number <= 1 ||
                number >= totalPage ||
                (number >= props.pagination.currentPage - 1 &&
                    number <= props.pagination.currentPage + 1)
            ) {
                items.push(
                    <li
                        key={number}
                        className={`page-item ${
                            props.pagination.currentPage === number ? "active" : ""
                        }`}
                        onClick={() => {
                            paginationPage(number);
                        }}>
                        <a className="page-link">{number}</a>
                    </li>
                );
            } else {
                if (threePoints === true) {
                    items.push(
                        <li key={number} className="page-item threePoints">
                            <a className="page-link">...</a>
                        </li>
                    );
                    threePoints = false;
                }
            }
        }
        return items;
    };
    return (
        <div className="paginationArea">
            <nav aria-label="navigation" className="">

                <ul className="pagination">

                    <li className="page-item previous">
                        <a
                            className="page-link"
                            onClick={() => {
                                paginationPrev();
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-chevron-left">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                            <span>Prev</span>
                        </a>
                    </li>

                    {paginationArea()}

                    <li className="page-item next">
                        <a
                            onClick={() => {
                                paginationNext();
                            }}
                            className="page-link">
                            <span>Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </li>
                    <li className="mx-lg-3">

                        <span>Rows per page:</span>
                            <Form.Select aria-label="Default select example" onChange={(e)=>
                                props.setPagination({currentPage: 1, dataShowLenght: e.target.value})}>
                                <option value="5" selected>5</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </Form.Select>

                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Pagination;
