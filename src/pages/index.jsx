import Footer from '../component/layout/Footer';
import Header from '../component/layout/Header';
import Body from '../component/layout/Body';
import ProtectedContent from '../component/ProtectedContent';
import URL from './../utils/URL';
import Link from 'next/link'
import { useContext } from 'react';
import { StateContext } from './../utils/context/AppContext';
import Define from '../utils/Define';


export default function Home() {
  const { auth } = useContext(StateContext)

  return (
    <>
      <Header title="Home" />
      <Body>
        <div className="row my-5">
          <div className="col-md-4">

            <div className="card shadow border-0 m27-mb-3">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pencil text-primary float-left" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="media-body text-right">
                      <p>All Product List</p>
                      <span><Link href={URL.PART_LIST} className="btn btn-primary">View Details</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 m27-mb-3">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-speech text-warning float-left" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="media-body text-right">
                      <p>Scan In</p>
                      <span><Link href={URL.PART_LIST} className="btn btn-primary">View Details</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 m27-mb-3">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-graph  text-info float-left" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="media-body text-right">
                      <p>Scan Out</p>
                      <span><Link href={URL.PART_LIST} className="btn btn-primary">View Details</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row my-5">
          <div className="col-md-4">

            <div className="card shadow border-0 m27-mb-3">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-rocket  text-success float-left" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="media-body text-right">
                      <p>Cart List</p>
                      <span><Link href={URL.PART_LIST} className="btn btn-primary">View Details</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 m27-mb-3">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pie-chart text-danger float-left" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="media-body text-right">
                      <p>Orders History</p>
                      <span><Link href={URL.PART_LIST} className="btn btn-primary">View Details</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            {auth.role === Define.S_ADMIN ?
              <div className="card shadow border-0 m27-mb-3">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="align-self-center">
                        <i className="icon-user   text-primary float-left" style={{ fontSize: '3rem' }}></i>
                      </div>
                      <div className="media-body text-right">
                        <p>User List</p>
                        <span><Link href={URL.PART_LIST} className="btn btn-primary">View Details</Link></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : <></>}



          </div>
        </div>

      </Body >
      <Footer />
    </>
  )
}
