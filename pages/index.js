import Link from 'next/link'

import Head from '../components/head'
import Layout from '../components/layout'
import AwesomeThings from '../components/awesome-things'
import style from './index.css'

const Home = () => (
  <Layout>
    <Head title="Home" />
    <h1 className={style.heading}>Awesome Castle</h1>
    <AwesomeThings />
  </Layout>
)

export default Home
