import Link from "next/link";

interface HeaderDetailProps {
  title: string;
  filter?: boolean;
}

export default function HeaderDetail(props: HeaderDetailProps) {
  const { title, filter } = props;
  return (
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between">
        <div className="back-button">
          <Link href="/">
            <a>
              <svg className="bi bi-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="page-heading">
          <h6 className="mb-0">{title}</h6>
        </div>
        {filter && (
          <div className="filter-option" data-bs-toggle="offcanvas" data-bs-target="#suhaFilterOffcanvas" aria-controls="suhaFilterOffcanvas">
            <svg className="bi bi-sliders" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
