import ferremolina from "../assets/Header/LogoDFM.png";

function Header() {
  return (
    <div>
      <header>
        <div className="flex flex-wrap justify-center items-center bg-blue-900 text-white font-medium mx-auto h-10 w-full text-sm">
          <svg
            className="w-12 h-5 pr-1"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            ></path>
          </svg>
          Promociones Decembrinas
        </div>
        <nav className="relative border-b-2 bg-black">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center mx-auto lg:ml-0">
              <img
                src={ferremolina}
                alt="Ferremolina Logo"
                className="ml-12 h-24 sm:h-36"
              />
            </a>
            <div className="flex items-center lg:order-2 pl-12">
              {/*SEARCH HEADER*/}
              <form className="flex items-center max-w-sm mx-auto">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="mb-2 bg-gray-50 border text-sm font-medium rounded-full block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Buscar..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mr-6 mb-2 p-2.5 ms-2 text-sm font-medium text-white rounded-full border border-blue-900 focus:ring-4 focus:outline-none bg-yellow-400 hover:bg-blue-700 focus:ring-black"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-20 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-thin lg:flex-row lg:space-x-8 lg:mt-0">
                {[
                  "Inicio",
                  "Productos",
                  "Testimonios",
                  "Ubicación",
                  "Redes Sociales",
                  "Contacto",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      className="block py-2 pr-4 pl-3 rounded-lg lg:text-primary-700 font-medium lg:p-2 text-white hover:bg-gray-700 hover:font-light"
                      aria-current={item === "Inicio" ? "page" : undefined}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
