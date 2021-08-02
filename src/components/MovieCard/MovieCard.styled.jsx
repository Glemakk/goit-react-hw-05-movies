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
export const ItemImg = styled.img`
  // width: 100%;
  // height: 260px;
  // object-fit: cover;
  border-radius: 5px;
  margin-top: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`
export const BtnGoBack = styled.button`
  margin-top: 10px;
`
