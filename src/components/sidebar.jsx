import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'

export default function Sidebar({ toggleSidebar, openNav }) {
  return (
    <Wrapper>
      <div
        className={
          openNav ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <CgClose className="icon" onClick={toggleSidebar} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/completed">completed</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .sidebar-container {
    background: var(--colorLight);
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    z-index: 999;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(100%);
    padding: 1rem;
    box-shadow: -1px 0px 12px 1px #aaaaaa;
  }

  .icon {
    font-size: 1.75rem;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--colorPrimary);
    }
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  ul {
    margin-top: 4rem;
  }

  li {
    margin: 1rem 0;

    a {
      color: var(--colorDark);
      text-transform: capitalize;
      transition: var(--transition);

      &:hover {
        color: var(--colorPrimary);
      }
    }
  }
`
