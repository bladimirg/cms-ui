"use client"
import {Navigation} from './Navigation'
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


    { name: 'Dashboard', href: '/dashboard', current: true },
    { name: 'Plantilla', href: '#', current: false },
    { name: 'Plantilla Admin', href: '/admin', current: false },
    { name: 'Forms', href: '#', current: false },
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
    { name: 'Sign out', href: '#' },
  ]
const navigation = [

    { name: 'Home', href: '/admin', icon: HomeIcon, current: true },
    { name: 'Posts', href: '/admin', icon: ClockIcon, current: false },
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
    return (
        <>
            <TopNav topNavigation={topNavigation} userNavigation={userNavigation} user={user} classNames={classNames}/>
            <main className="relative -mt-32">
                            {children}
            </main>
        </>
    )
}