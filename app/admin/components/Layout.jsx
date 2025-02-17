"use client"
import { useAdmin } from '../../hooks/useAdmin';
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../context/auth";
import { useContext, useState } from "react";

import Navigation from './Navigation'
import TopNav from '../../components/TopNav'
import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const topNavigation = [
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Plantilla', href: '#', current: false },
    { name: 'Plantilla Admin', href: '/admin', current: true },
    { name: 'Requistions', href: '#', current: false },
  ]
  
const user = {
    name: 'Debbie Lewis',
    handle: 'deblewis',
    email: 'debbielewis@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
  }
  const userNavigation = [


    { name: 'Your Profile', href: '/profile' },
    { name: 'Settings', href: '#' },
    //{ name: 'Sign out', href: '#' },
  ]
const navigation = [

    { name: 'Home', href: '/admin', icon: HomeIcon, current: false },
    { name: 'Posts', href: '#', icon: ClockIcon, current: false },
    { name: 'Categories', href: '/admin/categories', icon: ScaleIcon, current: false },
    { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
]
const secondaryNavigation = [
  
  
    { name: 'Settings', href: '#', icon: CogIcon },
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]



export function Layout({ children, classNames}) {

// context
const [auth, setAuth] = useContext(AuthContext);

// hooks
const router = useRouter();
const [current, setCurrent] = useState("mail");
const { isLoading, error, data } = useAdmin()
if(isLoading){
  return(<>Loading</>)
}
if(error){
  router.push("/auth");
}
console.log(data)
if(!data){
  //router.push("/auth");
}










    return (
        <>
            <TopNav topNavigation={topNavigation} userNavigation={userNavigation} user={user} classNames={classNames}/>
            <main className="relative -mt-32">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
                            {/* Static sidebar for desktop */}
                            <Navigation   navigation={navigation}  secondaryNavigation={secondaryNavigation} classNames={classNames} />
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}