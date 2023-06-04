<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Menu, Popover, Transition } from "@headlessui/react";
=======
import { Menu, Popover, Transition } from '@headlessui/react'
>>>>>>> Stashed changes
=======
import { Menu, Popover, Transition } from '@headlessui/react'
>>>>>>> Stashed changes
import {
  Bars3CenterLeftIcon,
  BellIcon,
  CheckIcon,
  ChevronUpDownIcon,
  Cog8ToothIcon,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  PencilIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import React, { Fragment } from "react";
import useGetProfile from "../../../hooks/useGetProfile";
import { onLogout } from "../../../utils/auth";
import Loading from "../../common/Loading";

function Navbar({ showNav, setShowNav }) {
  const { loading, profile } = useGetProfile();

  if (loading) return <Loading />;
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-white 
       ${showNav ? "pl-56" : ""}`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-3 w-3 text-darkBlue cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-dark">
            <BellIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=100"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-dark font-medium">Notificaciones</p>
                  <a className="text-sm text-pink" href="#">
                    Marca como leido
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green" />
                    </div>
                    <div className="ml-4">
                      <p className="font-mediun text-gray-dark">
                        Titulo Notificaciones
                      </p>
                      <p className="text-sm text-gray">
                        {" "}
=======
=======
>>>>>>> Stashed changes
  PencilIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'

import React, { Fragment } from 'react'
import useGetProfile from '../../../hooks/useGetProfile'
import { onLogout } from '../../../utils/auth'
import Loading from '../../common/Loading'

function Navbar ({ showNav, setShowNav }) {
  const { loading, profile } = useGetProfile()

  if (loading) return <Loading />
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-white 
       ${showNav ? 'pl-56' : ''}`}
    >
      <div className='pl-4 md:pl-16'>
        <Bars3CenterLeftIcon
          className='h-3 w-3 text-darkBlue cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className='flex items-center pr-4 md:pr-16'>
        <Popover className='relative'>
          <Popover.Button className='outline-none mr-5 md:mr-8 cursor-pointer text-gray-dark'>
            <BellIcon className='h-6 w-6' />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=100'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'
          >
            <Popover.Panel className='absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen'>
              <div className='relative p-3'>
                <div className='flex justify-between items-center w-full'>
                  <p className='text-gray-dark font-medium'>Notificaciones</p>
                  <a className='text-sm text-pink' href='#'>
                    Marca como leido
                  </a>
                </div>
                <div className='mt-4 grid gap-4 grid-cols-1 overflow-hidden'>
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center'>
                      <CheckIcon className='h-4 w-4 text-green' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-mediun text-gray-dark'>
                        Titulo Notificaciones
                      </p>
                      <p className='text-sm text-gray'>
                        {' '}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                        Prueba diseño texto Notificaciones
                      </p>
                    </div>
                  </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green" />
                    </div>
                    <div className="ml-4">
                      <p className="font-mediun text-gray-dark">
                        Titulo Notificaciones
                      </p>
                      <p className="text-sm text-gray">
                        {" "}
=======
=======
>>>>>>> Stashed changes
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center'>
                      <CheckIcon className='h-4 w-4 text-green' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-mediun text-gray-dark'>
                        Titulo Notificaciones
                      </p>
                      <p className='text-sm text-gray'>
                        {' '}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                        Prueba diseño texto Notificaciones
                      </p>
                    </div>
                  </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green" />
                    </div>
                    <div className="ml-4">
                      <p className="font-mediun text-gray-dark">
                        Titulo Notificaciones
                      </p>
                      <p className="text-sm text-gray">
                        {" "}
=======
=======
>>>>>>> Stashed changes
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center'>
                      <CheckIcon className='h-4 w-4 text-green' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-mediun text-gray-dark'>
                        Titulo Notificaciones
                      </p>
                      <p className='text-sm text-gray'>
                        {' '}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                        Prueba diseño texto Notificaciones
                      </p>
                    </div>
                  </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green" />
                    </div>
                    <div className="ml-4">
                      <p className="font-mediun text-gray-dark">
                        Titulo Notificaciones
                      </p>
                      <p className="text-sm text-gray">
                        {" "}
=======
=======
>>>>>>> Stashed changes
                  <div className='flex'>
                    <div className='rounded-full shrink-0 bg-yellow h-8 w-8 flex items-center justify-center'>
                      <CheckIcon className='h-4 w-4 text-green' />
                    </div>
                    <div className='ml-4'>
                      <p className='font-mediun text-gray-dark'>
                        Titulo Notificaciones
                      </p>
                      <p className='text-sm text-gray'>
                        {' '}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                        Prueba diseño texto Notificaciones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center gap-1">
              <p>Hola, {profile?.firstName}</p>
              <picture>
                <img
                  src="/profile.png"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="foto de perfil"
                />
              </picture>

              <ChevronUpDownIcon className="ml-2 h-4 w-4 text-gray-dark" />
=======
=======
>>>>>>> Stashed changes
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center items-center gap-1'>
              <p>Hola, {profile?.firstName}</p>
              <picture>
                <img
                  src='/profile.png'
                  className='rounded-full h-8 md:mr-4 border-2 border-white shadow-sm'
                  alt='foto de perfil'
                />
              </picture>

              <ChevronUpDownIcon className='ml-2 h-4 w-4 text-gray-dark' />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=100"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="/admin/profile"
                    className="flex hover:bg-darkBlue hover:text-white text-gray-dark rounded p-2 text-sm group transition-colors items-center"
                  >
                    <PencilIcon className="w-4 h-4 mr-2" />
=======
=======
>>>>>>> Stashed changes
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=100'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'
          >
            <Menu.Items className='absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm'>
              <div className='p-1'>
                <Menu.Item>
                  <Link
                    href='/admin/profile'
                    className='flex hover:bg-darkBlue hover:text-white text-gray-dark rounded p-2 text-sm group transition-colors items-center'
                  >
                    <PencilIcon className='w-4 h-4 mr-2' />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                    Perfil
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                    href="/login"
                    className="flex hover:bg-red hover:text-white text-gray-dark rounded p-2 text-sm group transition-colors items-center"
                    onClick={onLogout}
                  >
                    <Cog8ToothIcon className="w-4 h-4 mr-2" />
=======
=======
>>>>>>> Stashed changes
                    href='/login'
                    className='flex hover:bg-red hover:text-white text-gray-dark rounded p-2 text-sm group transition-colors items-center'
                    onClick={onLogout}
                  >
                    <Cog8ToothIcon className='w-4 h-4 mr-2' />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                    Salir
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  );
}

export default Navbar;
=======
=======
>>>>>>> Stashed changes
  )
}

export default Navbar
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
