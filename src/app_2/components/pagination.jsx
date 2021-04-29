import * as React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => {
    const {itemsCount, pageSize,currentPage,onPageChange} = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if ( pageCount === 1) return null;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {Array(pageCount).fill(0).map((element, index) =>
                    <li key={index+1} className={index+1===currentPage ? 'page-item active' : 'page-item'}>
                        <div
                            className="page-link"
                            onClick={() => onPageChange(index+1)}
                        >
                            {index+1}
                        </div>
                    </li>
                )}

            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange : PropTypes.func.isRequired
}
export default Pagination;