import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

// export const NavLink = styled.link`
//   display: flex;
//   justify-content: space-beetween;

//   padding-left: 20px;
//   hover: green;
// // `
// export const activeClass = styled.class`
//   hover: green;
// `
export const Link = styled(NavLink)`
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  justify-content: space-beetween;
  // &:hover {
  //   color: #6595ff;
  // }

  &.activeLink {
    color: #fd8100;
  }

  &.link {
    padding-left: 25px;
  }
`
export const HeaderTitle = styled.h2`
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
