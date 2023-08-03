'use client'
import Link from "next/link";

const Pagination = ({data, pagination}: {
    data: any,
    pagination:any
}) => {
    const generatePagination = (result: any) => {

        const paginationList = [];
        const length = Math.ceil(result.length / 10);
        const maxVisiblePages = 3; // Number of pagination numbers visible before and after the current page

        for (let i = 1; i <= length; i++) {
            if (length <= 2 || Math.abs(pagination - i) <= maxVisiblePages || i === 1 || i === length) {
                paginationList.push(
                    <Link href={`/projects?page=${i}`} title={i.toString()}>{i}</Link>
          //           <li className={i === pagination ? 'active' : ''} key={i}>
          // <span
          //     onClick={() => {
          //         setPagination!(i);
          //         window.scrollTo(0, 0);
          //     }}
          //     style={{ cursor: 'pointer' }}
          //     className="page-numbers"
          // >
          //   {i}
          // </span>
          //           </li>
                );
            } else if (paginationList[paginationList.length - 1]?.key !== 'dots') {
                paginationList.push(<li key="dots">...</li>);
            }
        }

        return paginationList;
    };




    return <>
        {Math.ceil(data.length / 10) > 1 ?
            <div className="pagination"><strong>1</strong>
                <Link className="next"
                      href={`/projects?page=${+pagination - 1}`}
                      title="»">{"<"}</Link>
                {generatePagination(data)}
                <Link className="next"
                      href={`/projects?page=${+pagination + 1}`}
                      title="»"> {">"} </Link>
            </div>
           : '' }

    </>
};

export default Pagination;

{/*<div className="pagination"><strong>1</strong><a className=""*/}
{/*                                                 href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=9"*/}
{/*                                                 title="2">2</a><a className=""*/}
{/*                                                                   href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=18"*/}
{/*                                                                   title="3">3</a><a*/}
{/*    className="next"*/}
{/*    href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=9"*/}
{/*    title="»">»</a><a className="last"*/}
{/*                      href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=18"*/}
// {/*                      title="Axırıncı">Axırıncı</a></div>


