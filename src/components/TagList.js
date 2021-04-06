import styled from 'styled-components'

import star from '../assets/star.png'

const Container = styled.div`
  width: 100%;
`

const Title = styled.h1`
  font-size: 45px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  color: #d25858;
`

const Table = styled.table`
  margin: 2rem auto 3rem auto;
  width: 35%;
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid #ddd;
  }

  td {
    padding: 15px;
    border-top: 1px solid #ddd;
  }
`

const TableHeadCell = styled.th`
  padding: 10px;
  text-align: start;
`

const Rank = styled.td`
  font-weight: 600;
`

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

const Rating = styled.td`
  font-weight: 300;
  font-style: italic;
`

const TagName = styled.td`
  ::first-letter {
    text-transform: uppercase;
  }
`

export const TagList = ({ tags, tagName }) => (
  <Container>
    <Title>Top 20 Rated</Title>
    <Table>
      <thead>
        <tr>
          <TableHeadCell>Rank</TableHeadCell>
          <TableHeadCell>Rating</TableHeadCell>
          <TableHeadCell>Title</TableHeadCell>
          <TableHeadCell>Tag</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {tags
          .filter((item, index) => index < 20)
          .map(({ id, averageUserRating, videoTitle }, index) => (
            <tr key={id}>
              <Rank>{index + 1 + '.'}</Rank>
              <Rating>
                <StarIcon src={star} alt='star-icon' />
                {(averageUserRating * 10).toFixed(2)}
              </Rating>
              <td>{videoTitle}</td>
              <TagName>{tagName}</TagName>
            </tr>
          ))}
      </tbody>
    </Table>
  </Container>
)
