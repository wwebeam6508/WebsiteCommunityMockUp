
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Navigation, classNames } from './Layout'
import { CogIcon } from '@heroicons/react/16/solid'


export default function Navbar(props: any) {
  const navigation = props.navigation
  function random(): import("react").Key | null | undefined {
    return Math.floor(Math.random() * 10000)
  }

  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ }) => (
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Invisible spacer to match the right side's width if needed */}
            <div className="flex-1 flex justify-start items-center">
              <CogIcon className="block h-6 w-6 invisible sm:visible" aria-hidden="true" />
            </div>

            {/* Center section for navigation items */}
            <div className="flex flex-1 justify-center items-center">
              <div className="hidden sm:flex flex space-x-4">
                {navigation.map((item: Navigation, index: any) => (
                  item.position === 'center' && (
                    <a
                      key={index}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white-500 text-black font-bold' : 'text-gray-500 hover:bg-gray-300 hover:text-gray-700 font-medium',
                        'rounded-md px-3 py-2 text-sm'
                      )}
                      style={{ display: 'flex', alignItems: 'center' }}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Right section for profile and additional options, ensure this has the same flex basis as the left section for balance */}
            <div className="flex-1 flex justify-end items-center ">
              {/* Other elements like profile dropdown go here */}
              <div className="flex ">
                {navigation.map((item: Navigation) => (
                  item.position === 'right' && (
                    <a
                      key={item.name ? item.name : random()}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-800 text-white font-bold' : 'text-gray-500 hover:bg-gray-300 hover:text-gray-700 font-medium',
                        'rounded-md px-3 py-2 text-sm'
                      )}
                      style={{ display: 'flex', alignItems: 'center' }}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.icon}
                    </a>
                  )
                ))}
              </div>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  )
} 