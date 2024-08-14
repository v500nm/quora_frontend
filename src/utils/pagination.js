import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    
    const MAX_VISIBLE_PAGES = 10; // Number of visible page numbers before using dots
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };

    const renderPageNumbers = () => {
        if (nPages <= 0) {
            return (
                <li className="page-item disabled">
                    <span className="page-link">0</span>
                </li>
            );
        } else if (nPages <= MAX_VISIBLE_PAGES) {
            // If the total number of pages is less than or equal to MAX_VISIBLE_PAGES,
            // simply render all the page numbers.
            return pageNumbers.map(pgNumber => (
                <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                    <a onClick={() => setCurrentPage(pgNumber)} style={{ cursor: 'pointer' }} className='page-link'>
                        {pgNumber}
                    </a>
                </li>
            ));
        } else {
            // Calculate the range of page numbers to display around the current page.
            const pageRangeStart = Math.max(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), 1);
            const pageRangeEnd = Math.min(pageRangeStart + MAX_VISIBLE_PAGES - 1, nPages);
    
            const pagesToDisplay = [...Array(pageRangeEnd - pageRangeStart + 1).keys()].map(page => page + pageRangeStart);
    
            return (
                <>
                    {pageRangeStart > 1 && (
                        <>
                            <li className={`page-item`}>
                                <a onClick={() => setCurrentPage(1)} style={{ cursor: 'pointer' }} className='page-link'>
                                    1
                                </a>
                            </li>
                            {pageRangeStart > 2 && (
                                <li className="page-item disabled">
                                    <span className="page-link">...</span>
                                </li>
                            )}
                        </>
                    )}
                    {pagesToDisplay.map(pgNumber => (
                        <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                            <a onClick={() => setCurrentPage(pgNumber)} style={{ cursor: 'pointer' }} className='page-link'>
                                {pgNumber}
                            </a>
                        </li>
                    ))}
                    {pageRangeEnd < nPages && (
                        <>
                            {pageRangeEnd < nPages - 1 && (
                                <li className="page-item disabled">
                                    <span className="page-link">...</span>
                                </li>
                            )}
                            <li className={`page-item`}>
                                <a onClick={() => setCurrentPage(nPages)} style={{ cursor: 'pointer' }} className='page-link'>
                                    {nPages}
                                </a>
                            </li>
                        </>
                    )}
                </>
            );
        }
    };    

    return (
        <div class="row m-0">
            <div class="col-md-12 text-center">
                <div style={{ width: '100%' }}>
                    <nav style={{ overflow: 'auto' }}>
                        <ul className='pagination'>
                            <li className="page-item">
                                <a className="page-link" style={{ cursor: 'pointer' }} onClick={prevPage}>
                                    Previous
                                </a>
                            </li>
                            {renderPageNumbers()}
                            {pageNumbers.length > MAX_VISIBLE_PAGES && currentPage < nPages && (
                                <></>
                            )}
                            <li className="page-item">
                                <a className="page-link" style={{ cursor: 'pointer' }} onClick={nextPage}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
