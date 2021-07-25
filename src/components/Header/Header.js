import logo from './logo.png';
import logotext from './logotext.png';
import github from './github.svg';
import { NavBar } from '../NavBar/NavBar';

export const Header = ({ selectedTabToHeader }) => {
  return (
    <div>
      <header className="header ">
        <div className="header-content grid-header">
          <div className="flex-row column-header">
            <a href="https://gorti.netlify.app/">
              <img src={logo} className="logo " />
            </a>

            <a href="https://gorti.netlify.app/">
              {' '}
              <img src={logotext} className="hide logo-text pad1rem" />{' '}
            </a>
            <span className="dropdown">v1.0 </span>
          </div>

          <div className="flex-row column-header ">
            <a href="https://github.com/themohammadsa/gorti">
              <img className="icon-github pad-right-1rem" src={github} />{' '}
            </a>
            <a
              download
              href="https://gorti.netlify.app/styles.css"
              style={{
                textDecoration: 'none',
              }}
            >
              <button
                style={{
                  color: '#1e40af',
                  border: '2px solid #1E40AF',
                  marginTop: '0.5rem',
                  backgroundColor: 'white',
                }}
                class="button hide "
              >
                Download
              </button>{' '}
            </a>
            <NavBar selectTab={selectedTabToHeader} />{' '}
          </div>
        </div>
      </header>
    </div>
  );
};
