import dynamic from 'next/dynamic'
import { lazy, Suspense } from 'react';
// import Coba from '../components/Title'

const AppSaya = dynamic(
    () => import('app2/Title'),
    { ssr: false ,
    loading: () => <div>Loading . . .</div>
    }
)

const Test = () => {
    return (
        <>
        <AppSaya/>
        </>
    )
}



export default Test