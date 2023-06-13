import globalAxios from '../../axios'
import {
  transformBackData,
  transformDataProfileFullName
} from '../../utils/transformBackData'

export const GetList = (params) => {
  return globalAxios().get(params)
}

export const GetMunicipalityById = (id) => {
  return globalAxios().get(`states/${id}/municipalities`)
}

export const GetNationalityById = (id) => {
  return globalAxios().get('/countries')
}

export const GetCitiesById = (id) => {
  return globalAxios().get(`municipalities/${id}/cities`)
}

export const GetNeighborhoodsById = (id) => {
  return globalAxios().get(`cities/${id}/neighborhoods`)
}

export const curpCalculation = async (params) => {
  const response = await globalAxios().post(
    'identification-types/calculate-curp',
    params
  )
  return response
}

export const changePassword = async ({
  token,
  email,
  currentPassword,
  newPassword
}) => {
  const _globalAxios = globalAxios()

  if (token) { _globalAxios.defaults.headers.common.Authorization = `Bearer ${token}` }

  return _globalAxios.put('/password/change', {
    email,
    currentPassword,
    newPassword
  })
}

export const loginWithCodeOTP = async ({ token, ...payload }) => {
  const _globalAxios = globalAxios()
  _globalAxios.defaults.headers.common.Authorization = `Bearer ${token}`
  const response = await _globalAxios.post('/login/otp', payload)
  return response
}

export const physicalPersonPost = async (payload, path) => {
  try {
    const response = await globalAxios().post(path, payload)
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-throw-literal
    throw {
      originalError: error,
      name: 'PhysicalPersonData',
      message: 'Hubo problemas en el envio de la informacion'
    }
  }
}

export const physicalPersonPut = async (payload, path) => {
  try {
    const response = await globalAxios().put(path, payload)
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-throw-literal
    throw {
      originalError: error,
      name: 'PhysicalPersonAttachment',
      message: 'Hubo problemas en a actualizar de los datos'
    }
  }
}

export const physicalPersonAttachmentsPost = async (payload, path) => {
  try {
    const response = await globalAxios().post(`${path}/attachments`, payload)
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-throw-literal
    throw {
      originalError: error,
      name: 'PhysicalPersonAttachment',
      message: 'Hubo problemas en el envio de los documentos'
    }
  }
}

export const customerDataPut = async (payload) => {
  const response = await globalAxios().put('/receivedata', payload)
  return response.data
}

export const createConsultantPost = async (payload) => {
  const response = await globalAxios().post('/url', payload)
  return response.data
}

export const creditApplicationPost = async (payload) => {
  const response = await globalAxios().post('/credit-applications/accept', payload)
  return response.data
}

export const consultantDataPut = async (payload) => {
  const response = await globalAxios().put('/receivedata', payload)
  return response.data
}

export const physicalPersonGet = async (userId) => {
//  await sleep(1000)

  const response = await globalAxios().get(`/users/${userId}/natural-person`)

  return { data: transformBackData(response.data.data) }
}

export const listCustomerGet = async () => {
  // await sleep(1000)
  const response = await globalAxios().get('/customers')
  return response.data.data
}

export const listCustomCustomerPost = async (payload) => {
  // await sleep(1000)
  const response = await globalAxios().post('/customers/datatable', payload)
  // const result = response?.data?.data

  return response.data.data
}

export const profileGet = async (userId) => {
  // await sleep(1000)
  const response = await globalAxios().get(`/users/${userId}`)
  return transformDataProfileFullName(response.data.data)
}

/* export const sendChargedDataMassivePost = async (data) => {
  await sleep(1000)
  console.log({ data })
  const _axios = globalAxios()

  _axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'

  const response = await _axios.post('/customers/bulk-record', {
    data
  })

  return response.data
} */
export const sendChargedDataMassivePost = async (data) => {
  // await sleep(1000)
  const _axios = globalAxios()
  _axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
  const response = await _axios({
    method: 'POST',
    url: '/customers/bulk-record',
    data
  })
  const result = response?.errors
  console.log({ result })
  return response.data
}

/* export const physicalPersonGet = async () => {s
  await sleep(2000)
  //console.log(transformBackData(mockData.data))
  return { data: transformBackData({ ...mockData.data }) }
}
 */
/* function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
 */
