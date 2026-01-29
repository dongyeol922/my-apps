import React from 'react'
import { useLoaderData, useSearchParams } from 'react-router'
import { Pagination } from '../components/Pagination'

export const Board = () => {
  const data = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 0
  const currentSize = Number(searchParams.get('size')) || 10

  const totalPages = Math.ceil(data.response.total / currentSize)
  const boardList = data.response.content || []

  const handleSizeChange = (e) => {
    const newSize = e.target.value
    setSearchParams({ page: 0, size: newSize })
  }

  const handlePageChange = (page) => {
    setSearchParams({ page, size: currentSize })
  }

  return (
    <div className="container mt-4">
      <h2>게시글 리스트</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <select
            className="form-select"
            value={currentSize}
            onChange={handleSizeChange}
          >
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="30">30개</option>
          </select>
        </div>
        <button className="btn btn-success">게시글 쓰기</button>
      </div>

      <table className="table table-light text-center">
        <thead className="table-dark">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <tr key={board.brdId}>
              <td>{board.brdId}</td>
              <td>{board.title}</td>
              <td>{board.readCount}</td>
              <td>{board.createDate}</td>
            </tr>
          ))}
          {boardList.length === 0 && (
            <tr>
              <td colSpan="4">게시글이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export const boardLoader = async ({ request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.get('page') || 0
  const size = url.searchParams.get('size') || 10

  const { default: axios } = await import('axios')
  const response = await axios.get(`/api/v1/board`, {
    params: { page, size }
  })

  return response.data
}
