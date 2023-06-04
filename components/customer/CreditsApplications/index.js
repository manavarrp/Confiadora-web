import React, { useState } from 'react'
import HeaderPagesDashboard from '../../common/HeaderPagesDashboard'
import { ChevronUpIcon, TicketIcon } from '@heroicons/react/24/solid'
import { Disclosure } from '@headlessui/react'
import CreditsSimulator from './CreditsSimulator'
import usePostCreditApplication from '../../../hooks/usePostCreditApplication'
import { useForm } from 'react-hook-form'
import { Col, InputNumber, Slider, Select, Input } from 'antd'
import { useSession } from 'next-auth/react'
import Loading from '../../common/Loading'

const Index = () => {
  const [loanAmount, setInputValue] = useState(1000)
  const [inputValueCuotas, setInputValueCuotas] = useState(1)
  const [inputValueCuotasUnit, setInputValueCuotasUnit] = useState(null)
  const [inputValueTotal, setInputValueTotal] = useState(null)
  const { loading, postCreditApplication } = usePostCreditApplication()

  const {

    handleSubmit
  } = useForm({
    initialValues: {
      inputValueTotal: ''

    }
  })
  const onChangeCuotas = (newValue) => {
    setInputValueCuotas(newValue)
  }
  const { data } = useSession()
  // console.log({ data })
  const customerId = data?.user?.sub
  // console.log({ userId })

  const onChange = (newValue) => {
    setInputValue(newValue)
    const total = (newValue * (1.37)).toFixed(2)
    // const valueCutoa = total / inputValueCuotas
    setInputValueTotal(total)
    //  setInputValueCuotasUnit(valueCutoa)
    if (inputValueCuotas !== 0) {
      const valueCutoa = total / inputValueCuotas
      setInputValueCuotasUnit(valueCutoa)
    }
  }

  const handleChange = (value) => {
  //  console.log(`selected ${value}`)
  }
  const calculateTotalAmount = () => {
    const { inputValueCuotas } = this.state
    // Cambiar esto por el monto diario correspondiente
    const totalAmount = inputValueCuotas * inputValueTotal
    this.setState({ totalAmount })
  }

  console.log({ inputValueTotal })
  const marks = {
    1000: {

      label: <strong>1000</strong>
    },
    20000: {

      label: <strong>20000</strong>
    }
  }
  const marksQuotes = {
    1: {

      label: <strong>1</strong>
    },
    60: {

      label: <strong>60</strong>
    }
  }

  const onSubmitBankFormUpdate = () => {
    const payload = {
      customerId, loanAmount
    }

    postCreditApplication(payload)
    // console.log({ payload })
  }

  if (loading) return <Loading />

  return (
    <>
      <HeaderPagesDashboard
        icon={<TicketIcon className='h-10 w-10' color='#477EFA' />}
        title='Mis Solicitudes'
      />
      <div className='w-full  pt-16'>
        <div className='mx-auto w-3/4  rounded-2xl bg-white p-2 sm:w-full shadow-2xl'>
          <p className='font-bold text-darkBlue text-lg mb-6'>
            Configura tu credito
          </p>
          <form>
            <div className='flex flex-col w-full mb-10 gap-3 sm:flex-row'>
              <div className='flex flex-col w-full ml-5'>
                <label className='text-sm text-darkBlue'>Tipo de producto</label>

                <Select
                  defaultValue='Tipo de producto'
                  style={{ width: 240 }}
                  onChange={handleChange}
                  options={[
                    { value: 'alianza', label: 'Alianza' },
                    { value: 'noAlianza', label: 'No Alianza' }

                  ]}
                />

              </div>
              <div className='flex flex-col justify-between'>
                <label className='text-sm text-darkBlue'>Número de convenio</label>

                <Input defaultValue='mysite' value='BIKLEEK2023' style={{ width: 240 }} />

              </div>

            </div>
            <div className='flex  justify-around mb-3 gap-3'>
              <div className='flex flex-col w-full ml-5'>
                <label className='text-sm text-darkBlue'>Monto</label>

                <Col span={12}>
                  <Slider
                    min={1000}
                    max={20000}
                    onChange={onChange}
                    value={typeof loanAmount === 'number' ? loanAmount : 0}
                    marks={marks}
                    step={100}
                    style={{ width: 400 }}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1000}
                    max={20000}
                    style={{ margin: '0 16px' }}
                    value={loanAmount}
                    onChange={onChange}

                  />
                </Col>

              </div>
              <div className='flex flex-col  ml-40 '>
                <label className='text-sm text-darkBlue mb-3'>Frecuencia</label>

                <Col span={12}>
                  <Select
                    defaultValue='Frecuencia'
                    style={{ width: 240 }}
                    onChange={handleChange}
                    options={[
                      { value: 'Semanal', label: 'Semanal' },
                      { value: 'Quincenal', label: 'Quincenal' },
                      { value: 'Mensual', label: 'Mensual' }

                    ]}
                  />
                </Col>

              </div>
              <div className='flex flex-col w-full ml-60'>
                <label className='text-sm text-darkBlue'>Cuotas</label>
                <Col span={12}>
                  <Slider
                    min={1}
                    max={60}
                    onChange={onChangeCuotas}
                    value={typeof inputValueCuotas === 'number' ? inputValueCuotas : 0}
                    marks={marksQuotes}
                    step={1}
                  />
                </Col>

                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={60}
                    style={{ margin: '0 16px' }}
                    value={inputValueCuotas}
                    onChange={onChangeCuotas}
                  />
                </Col>
              </div>
            </div>
            <div className='flex flex-col justify-center sm:flex-row'>
              <div className='mr-20 '>
                <label className='text-sm text-darkBlue ml-4'>Valor Cuota</label>
                <div className='mt-3'>
                  <Input
                    min={1}
                    max={100}
                    style={{ margin: '0 16px' }}
                    value={inputValueCuotasUnit}
                    onChange={onChange}
                    readOnly
                  />
                </div>
              </div>
              <div className=''>

                <label className='text-sm text-darkBlue ml-4'>Total a pagar</label>
                <div className='mt-3'>
                  <Input
                    min={1}
                    max={100}
                    style={{ margin: '0 16px' }}
                    value={inputValueTotal}
                    onChange={calculateTotalAmount}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-10'>
              <button
                type='submit'
                onClick={handleSubmit(onSubmitBankFormUpdate)}
                className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
              >
                Confirmar
              </button>
            </div>
          </form>
          <Disclosure as='div' className='mt-2'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span className='text-darkBlue font-bold'>
                    Detalle de cuota
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  <CreditsSimulator />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  )
}

export default Index
