import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import HeaderPagesDashboard from '../../components/common/HeaderPagesDashboard'

export default function Home () {
  return (
    <>
      <HeaderPagesDashboard icon={<ComputerDesktopIcon className='h-10 w-10' color='#477EFA' />} title='Panel de Cliente' />
      <div className='grid lg:grid-cols-3 gap-5 mb-16'>
        <div className='bg-white rounded h-80 shadow-sm '>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2'
            for='file_input'
          >
            Upload file
          </label>

        </div>
        <div className='bg-white rounded h-80  shadow-sm '>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2'
            for='file_input'
          >
            Upload file
          </label>

        </div>
        <div className='bg-white rounded h-80  shadow-sm '>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2'
            for='file_input'
          >
            Upload file
          </label>

        </div>
      </div>

    </>
  )
}
