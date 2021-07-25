import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const CardContainer = styled.section`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`
export const Description = styled.div`
  padding-left: 25px;
`
export const AdditionalInfo = styled.div`
  display: block;
`
export const AdditionalLink = styled(NavLink)`
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: black;
  text-decoration: none;

  padding-left: 20px;
  &:hover {
    color: #6595ff;
  }
`
