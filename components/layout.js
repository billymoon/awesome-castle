import Head from 'next/head'

export default ({ children }) =>
  <div className="container mt-4">
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.1.3/dist/lumen/bootstrap.min.css" />
    </Head>
    <div className="row">
      <div className="col-sm-12">
        {children}
      </div>
    </div>
  </div>
