
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Account = () => {
  return (
    <Fragment>
      <Header />
        <div>
          <h1>This is the account page. Settings, log out.</h1>
        </div>
      <Footer />
    </Fragment>
  )
}

export default Account;