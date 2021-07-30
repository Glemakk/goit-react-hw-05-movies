import styled from '@emotion/styled'

export const MainTitle = styled.h1`
  font-family: 'Source Sans Pro', Arial, sans-serif;
`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 45px;
  margin: -15px;
`
export const Item = styled.li`
  border-radius: 4px;
  margin-bottom: 30px;
  margin: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const ItemImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 4px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`
