import Head from 'next/head'
import Image from 'next/image'
import FormProvider from '../components/providers/FormProvider'
import Header from '../containers/Home/Header'
import Main from '../containers/Home/Main'
import Requistion from '../containers/Home/Requistion'
import Tab from '../containers/Home/Tab'

export default function Home() {
  return (
    <>
      <Header />
      <Tab/>
      <FormProvider>
      <Main />
      </FormProvider>
    </>
  )
}
