
import Select from '../../common/Select'

const Neighborhood = ({ ...props }) => {
  /*  const handlOnChange = (event) => {
    //console.log(event)
  }
 */

  // //console.log(props.onChange, 'proponchange')
  return (
    <div>
      <Select
        {...props}
     //   error={errors?.stateId?.message}
      />
    </div>
  )
}

export default Neighborhood
