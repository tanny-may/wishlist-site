import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../store";

const Pagination = ({ pageSize, totalItems }) => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state) => state.common.currentPage);
	const [pageNumberGroup, setPageNumberGroup] = useState([]);

	useEffect(
		() => setPageNumberGroup(getPageNumberGroup(currentPage, totalItems, pageSize)),
		[currentPage, totalItems, pageSize]
	);

	return (
		<div>
			<div className="page-num-container">
				<ul className="page-num-container list-style-none">
					{pageNumberGroup.map((value, index) => {
						return (
							<li
								className={`page-number ${currentPage === value ? "active" : ""} `}
								key={index}
								onClick={() => dispatch(setCurrentPage(value))}
							>
								{value}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const pageNumberGroupLimit = 3;

function getPageNumberGroup(currentPage, totalItems, pageSize) {
	let start = Math.floor((currentPage - 1) / pageNumberGroupLimit) * pageNumberGroupLimit;
	return new Array(Math.min(pageNumberGroupLimit, Math.ceil(totalItems / pageSize)))
		.fill(" ")
		.map((_, index) => start + index + 1);
}

export default Pagination;
