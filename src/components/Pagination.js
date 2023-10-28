import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../store";

const Pagination = ({ pageSize, itemsLength }) => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state) => state.common.currentPage);
	const [pageNumberGroup, setPageNumberGroup] = useState([]);

	useEffect(
		() => setPageNumberGroup(getPageNumberGroup(currentPage, itemsLength, pageSize)),
		[currentPage, itemsLength, pageSize]
	);

	const getPageNumberGroup = (currentPage, itemsLength, pageSize) => {
		let start = Math.floor((currentPage - 1) / 3) * 3;
		return new Array(Math.min(3, Math.ceil(itemsLength / pageSize))).fill(" ").map((_, index) => start + index + 1);
	};

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

export default Pagination;
