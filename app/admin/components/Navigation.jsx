'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

const Navigation  = ({ navigation,secondaryNavigation, classNames })=>{
  const pathname = usePathname();
  return (
    <aside className="py-6 lg:col-span-3">
      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link href={item.href} 
            key={item.name}
            
            className={clsx(
              'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
              item.href === pathname
                ? 'border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            <item.icon
              className={classNames(
                item.current
                  ? 'text-teal-500 group-hover:text-teal-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
export default Navigation;
