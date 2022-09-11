import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import ClassList from "../components/pages/Home/ClassList";

const Home: NextPage = () => {
  return (
    <Layout title='لیست کلاس‌ها' subTitle='ترم اول - سال ۱۴۰۱'>
      <ClassList />
    </Layout>
  )
}

export default Home
