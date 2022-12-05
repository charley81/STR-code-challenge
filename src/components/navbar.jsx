import styled from 'styled-components'
import { CgMenuGridO } from 'react-icons/cg'

export default function Navbar({ toggleSidebar }) {
  return (
    <Wrapper>
      <div className="nav-center">
        <h2>STR</h2>
        <CgMenuGridO className="icon" onClick={toggleSidebar} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 1rem;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    max-width: var(--maxWidth);
    margin: 0 auto;
    transition: var(--transition);

    &:hover {
      color: var(--colorPrimary);
    }
  }

  .icon {
    font-size: 1.75rem;
  }
`
