import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import usePostPersonPhysical from '../../../hooks/usePostPersonPhysical'
import styles from '../../../styles/Username.module.css'
import Input from '../../common/Input'
import { Radiobutton } from '../../common/Radiobutton'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import usePutPersonPhysical from '../../../hooks/usePutPersonPhysical'

const DEFAULT_VALUES = {
  resourceSource: '',
  resourceDestination: '',
  operationAmount: '',
  operationNumber: '',
  transactionalFrequency: '',
  cashPayments: '',
  cashPaymentAmount: '',
  federalPublicOfficeCustomer: '',
  federalPublicOfficeRelative: '',
  operatedResourcesBenefitThirdParty: '',
  resourceContributionThirdParty: '',
  isLawfulSourceFund: '',
  id: ''
}

function RegisterForms ({ initialValues }) {
  // console.log(initialValues)
  const router = useRouter()
  const { customerId } = useSelector((state) => state.physicalPersonForm)
  const { loading, postPersonPhysicalData } = usePostPersonPhysical()
  // const { putPersonPhysicalData } = usePutPersonPhysical()

  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: initialValues || DEFAULT_VALUES
  })

  const { data } = useSession()
  const onSubmitComplementaryForm = (data) => {
    const payload = {
      resourceSource: data.resourceSource,
      resourceDestination: data.resourceDestination,
      operationAmount: data.operationAmount,
      operationNumber: data.operationNumber,
      transactionalFrequency: data.transactionalFrequency,
      cashPayments: data.cashPayments,
      cashPaymentAmount: data.cashPaymentAmount,
      federalPublicOfficeCustomer: data.federalPublicOfficeCustomer,
      federalPublicOfficeRelative: data.federalPublicOfficeRelative,
      operatedResourcesBenefitThirdParty: data.operatedResourcesBenefitThirdParty,
      resourceContributionThirdParty: data.resourceContributionThirdParty,
      isLawfulSourceFund: data.isLawfulSourceFund,
      customerId,
      id: data?.id

    }

    postPersonPhysicalData(payload, 'natural-person/additional-data')

    // //console.log(payload)
  }

  const onSubmitPersonFormNext = () => {
    router.push('/customer/personal-form/references-data')
  }

  const onSubmitPersonFormBack = () => {
    router.push('/customer/personal-form/banks-data')
  }
  return (
    <div className=''>
      <form className='mx-auto max-w-screen-md'>

        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <div className='flex flex-col w-full'>
            <label className='text-sm text-darkBlue'>Origen de los recursos a operar*</label>
            <Input
              type='text'
              placeholder='Origen de recursos a operar'
              className={styles.textbox}
              name='resourceSource'
              register={register}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-sm text-darkBlue'>Destino de los recursos a operar*</label>
            <Input
              type='text'
              placeholder='Destino de recursos a operar'
              className={styles.textbox}
              name='resourceDestination'
              register={register}
            />
          </div>
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <div className='flex flex-col w-full'>
            <label className='text-sm text-darkBlue'>Monto de operación(estimado mensual)*</label>
            <Input
              type='text'
              placeholder='Monto de operación(estimado mensual)'
              className={styles.textbox}
              name='operationAmount'
              register={register}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-sm text-darkBlue'>Número de operaciones(estimado mensual)*</label>
            <Input
              type='text'
              placeholder='Número de operaciones(estimado mensual)'
              className={styles.textbox}
              name='operationNumber'
              register={register}
            />
          </div>
        </div>

        <div className='mb-6 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            {' '}
            Frecuencia transaccional (estimado mensual).*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='transactionalFrequency'
              name='transactionalFrequency'
              register={register}
              value='Baja'
            >
              {' '}
              <label>Baja.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='transactionalFrequency'
              name='transactionalFrequency'
              register={register}
              value='Media'
            >
              {' '}
              <label>Media.</label>
            </Radiobutton>
            <Radiobutton
              type='radio'
              id='transactionalFrequency'
              name='transactionalFrequency'
              register={register}
              value='Alta'
            >
              {' '}
              <label>Alta.</label>
            </Radiobutton>
          </div>
        </div>

        <div className='mb-6 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            ¿Realizará pagos en efectivo?.*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='cashPayments'
              name='cashPayments'
              register={register}
              value='1'
            >
              {' '}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='cashPayments'
              name='cashPayments'
              register={register}
              value='0'
            >
              {' '}
              <label>No.</label>
            </Radiobutton>
          </div>
          {/*    <label className='flex justify-center my-3 p-2'>
            En caso de utilizar dinero en efectivo, favor de especificar el motivo.
          </label>
          <Input
            type='text'
            placeholder='Detalle en este campo lo anteriormente expuesto.'
            className={styles.textbox}
            name='asd'
            register={register}
          /> */}

          <label className='flex justify-center my-3 p-2 text-sm'>
            En caso de utilizar dinero en efectivo, favor especificar monto estimado mensual.*
          </label>
          <Input
            type='text'
            placeholder='Detalle en este campo lo anteriormente expuesto.'
            className={styles.textbox}
            name='cashPaymentAmount'
            register={register}
          />
        </div>

        <div className='mb-6 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            ¿Desempeña actualmente o desempeñó durante el año inmediato algún
            cargo público a nivel federal, estatal, municipal o distrital en
            México o en algún país del extranjero?.*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='federalPublicOfficeCustomer'
              name='federalPublicOfficeCustomer'
              register={register}
              value='1'
            >
              {' '}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='federalPublicOfficeCustomer'
              name='federalPublicOfficeCustomer'
              register={register}
              value='0'
            >
              {' '}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label className='text-gray italic text-sm'>
            En caso positivo, se debe anexar un documento diligenciado el cual
            sera proporcionado por uno de nuestros asesores posteriormente
          </label>
        </div>

        <div className='mb-6 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            ¿Su cónyuge o algún pariente por consanguinidad o afinidad hasta el
            segundo grado del apoderado legal desempeña actualmente o desempeñó
            durante el año inmediato anterior algún cargo público a nivel
            federal, estatal o municipal en México o en algún país extranjero?*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='federalPublicOfficeRelative'
              name='federalPublicOfficeRelative'
              register={register}
              value='1'
            >
              {' '}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='federalPublicOfficeRelative'
              name='federalPublicOfficeRelative'
              register={register}
              value='0'
            >
              {' '}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label className='text-gray italic text-sm'>
            En caso positivo, se debe anexar un nuevo formulario, el cual
            será proporcionado por uno de nuestros asesores posteriormente.
          </label>
        </div>
        <div className='mb-3 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            ¿Algún tercero obtendrá los beneficios derivados de las operaciones
            realizadas con TIGRIADA, S.A.P.I. de C.V., SOFOM, E.N.R. y ejerza
            los derechos de uso, aprovechamiento o disposición de los recursos
            operados, siendo el verdadero propietario de los mismos?*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='operatedResourcesBenefitThirdParty'
              name='operatedResourcesBenefitThirdParty'
              register={register}
              value='1'
            >
              {' '}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='operatedResourcesBenefitThirdParty'
              name='operatedResourcesBenefitThirdParty'
              register={register}
              value='0'
            >
              {' '}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label className='text-gray italic text-sm'>
            En caso positivo, se debe anexar un nuevo formulario, el cual
            será proporcionado por uno de nuestros asesores posteriormente.
          </label>

        </div>
        <div className='mb-3 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            ¿Algún tercero aportará regularmente recursos para el cumplimiento
            de las obligaciones derivadas del contrato que se establezca con
            TIGRIADA, S.A.P.I. de C.V., SOFOM, E.N.R., sin ser el titular de
            dicho contrato ni obtener los beneficios económicos derivados del
            mismo?*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='resourceContributionThirdParty'
              name='resourceContributionThirdParty'
              register={register}
              value='1'
            >
              {' '}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='resourceContributionThirdParty'
              name='resourceContributionThirdParty'
              register={register}
              value='0'
            >
              {' '}
              <label>No.</label>
            </Radiobutton>
          </div>
          <div>
            <label className='text-gray italic text-sm'>
              En caso positivo, se debe anexar un nuevo formulario, el cual
              será proporcionado por uno de nuestros asesores posteriormente.
            </label>
          </div>
        </div>

        <div className='mb-3 bg-white'>
          <label className='flex justify-center my-3 p-4 text-sm'>
            Declaro que la información y documentación presentadas son
            verdaderas, que actúo por cuenta propia y que el origen de mis
            recursos es lícito.*
          </label>
          <div className='flex justify-around'>
            <Radiobutton
              type='radio'
              id='isLawfulSourceFund'
              name='isLawfulSourceFund'
              register={register}
              value='1'
            >
              {' '}
              <label>De acuerdo.</label>
            </Radiobutton>

            <Radiobutton
              type='radio'
              id='isLawfulSourceFund'
              name='isLawfulSourceFund'
              register={register}
              value='0'
            >
              {' '}
              <label>No estoy de acuerdo.</label>
            </Radiobutton>
          </div>
        </div>
        <p
          className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300'
          id='file_input_help'
        >
          * Campos obligatorios
        </p>
        <div className='flex justify-between mt-5'>
          <button
            type='submit'
            onClick={handleSubmit(onSubmitPersonFormBack)}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Atras
          </button>
          <button
            type='submit'
            onClick={handleSubmit(onSubmitComplementaryForm)}
            disabled={loading}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            {loading ? 'cargando' : 'Guardar'}
          </button>

          <button
            type='submit'
            onClick={handleSubmit(onSubmitPersonFormNext)}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForms
