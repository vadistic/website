import Link from 'gatsby-link'
import React from 'react'
import { css } from 'react-emotion'
import { styled } from '../styles/index'
import { Logo } from './Logo'
import { textUiStyles } from './Text'

interface NavProps {
  className?: string
  location?: any
}

const NavLinksBase: React.SFC<NavProps> = ({
  className,
  location: { hash },
}) => (
  <div className={className}>
    <Link to="/#home" className={hash === '#home' ? 'active' : ''}>
      Home
    </Link>
    <Link to="/#about" exact activeClassName="active">
      About
    </Link>
    <Link to="/#services" exact activeClassName="active">
      Services
    </Link>
    <Link to="/#process" exact activeClassName="active">
      Process
    </Link>
  </div>
)

export const FixedNav = styled(NavLinksBase)(
  ({ theme: t }) => css`
    display: flex;
    height: 40%;
    justify-content: space-between;
    margin: ${t.space[5]} ${t.space[2]};
    position: fixed;
    writing-mode: tb;
    mix-blend-mode: difference;

    a {
      ${textUiStyles({ theme: t })};
      color: ${t.colors.greyLighter};
      text-decoration: none;
      width: max-content;
    }
  `
)

export const NavLinks = styled(NavLinksBase)(
  ({ theme: t }) => css`
    display: flex;
    height: 50%;
    justify-content: space-between;
    margin: ${t.space[5]} 0;

    a {
      ${textUiStyles({ theme: t })};
      color: ${t.colors.nearWhite};
      text-decoration: none;
      width: max-content;
    }
  `
)

FixedNav.displayName = 'FixedNav'

export const Brand: React.SFC<NavProps> = ({ className }) => (
  <Link to="/" className={className}>
    <Logo />
  </Link>
)

export const FixedBrand = styled(Brand)(
  ({ theme: t }) => css`
    position: fixed;
    bottom: ${t.space[0]};
    transform: rotate(-90deg);
    transform-origin: 0 0;
    mix-blend-mode: difference;
    margin: 0 ${t.space[2]};
  `
)

const TopNavBase: React.SFC<NavProps> = ({ className }) => (
  <nav className={className}>
    <Brand />
    <NavLinks />
  </nav>
)

export const TopNav = styled(TopNavBase)(
  ({ theme: t }) => css`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${t.space[5]};
  `
)

TopNav.displayName = 'TopNav'
