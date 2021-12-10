import dynamic from 'next/dynamic'
import { lazy, Suspense } from 'react';
import Coba from '../components/Title'

// const AppSaya = dynamic(
//     () => import('app2/Title'),
//     { ssr: false ,
//     loading: ({error, isLoading}) => <div>{isLoading ? 'LOADING!!! ' : null} </div>
//     }
// )


// const Test = () => (<Suspense fallback="null"><AppSaya /></Suspense>)
const Test = () => {
    return (
        <>
        <div>Hallo</div>
        {/* <AppSaya/> */}
        <Coba />
        {/* <Suspense fallback="Loading . . .">

        </Suspense> */}
        </>
    )
}



export default Test