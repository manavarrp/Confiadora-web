import { useFormContext } from "react-hook-form";
import styles from "../../styles/Username.module.css";
import Input from "../common/input";

function RegisterForms() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <div className="flex w-full mb-3 gap-3">
        <Input
          type="text"
          placeholder="Primer nombre"
          className={styles.textbox}
          name="firstName"
          register={register}
          error={errors?.firstName?.message}
        />
        <Input
          type="text"
          placeholder="Segundo nombre"
          className={styles.textbox}
          name="secondName"
          register={register}
          error={errors?.secondName?.message}
        />
      </div>
      <div className="flex w-full mb-3 gap-3">
        <Input
          type="text"
          placeholder="Apellido Paterno"
          className={styles.textbox}
          name="firstLastName"
          register={register}
          error={errors?.firstLastName?.message}
        />
        <Input
          type="text"
          placeholder="Apellido Materno "
          className={styles.textbox}
          name="secondLastName"
          register={register}
          error={errors?.secondLastName?.message}
        />
      </div>
      <div className="flex w-full mb-3 gap-3">
        <Input
          type="text"
          placeholder="phone"
          className={styles.textbox}
          name="phoneNumber"
          register={register}
          error={errors?.phoneNumber?.message}
        />
        <Input
          type="date"
          placeholder="Fecha de nacimiento"
          className={styles.textbox}
          name="birthDate"
          register={register}
          error={errors?.birthDate?.message}
        />
      </div>
      <div className="w-full mb-3">
        <Input
          type="text"
          placeholder="Correo electronico"
          className={styles.textbox}
          name="email"
          register={register}
          error={errors?.email?.message}
        />
      </div>
    </div>
  );
}

export default RegisterForms;
