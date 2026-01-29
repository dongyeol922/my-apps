import React from 'react'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const blockSize = 10
  const currentBlock = Math.floor(currentPage / blockSize)
  const startPage = currentBlock * blockSize
  const endPage = Math.min(startPage + blockSize, totalPages)

  const pages = []
  for (let i = startPage; i < endPage; i++) {
    pages.push(i)
  }

  const hasPrevBlock = currentBlock > 0
  const hasNextBlock = endPage < totalPages

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${!hasPrevBlock ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(startPage - 1)}
            disabled={!hasPrevBlock}
          >
            &laquo;
          </button>
        </li>

        {pages.map(page => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page + 1}
            </button>
          </li>
        ))}

        <li className={`page-item ${!hasNextBlock ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(endPage)}
            disabled={!hasNextBlock}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  )
}
