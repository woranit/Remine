import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewMed = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="ชื่อทางการยา" {...register("ชื่อทางการยา", {required: true, maxLength: 100})} />
      <input type="text" placeholder="ชื่อสามัญยา" {...register("ชื่อสามัญยา", {required: true, maxLength: 100})} />
      <input type="text" placeholder="รายละเอียดยา" {...register("รายละเอียดยา", {required: true, maxLength: 105})} />
      <input type="number" placeholder="จำนวนเม็ดยา" {...register("จำนวนเม็ดยา", {required: true, maxLength: 3})} />
      <input type="time" placeholder="ช่วงเวลารับประทานยา" {...register("ช่วงเวลารับประทานยา", {required: true})} />
      <input type="number" placeholder="จำนวนต่อมื้อ" {...register("จำนวนต่อมื้อ", {required: true, maxLength: 1})} />
      <select {...register("การทานยา", { required: true })}>
        <option value="ก่อนอาหาร">ก่อนอาหาร</option>
        <option value="ระหว่างอาหาร">ระหว่างอาหาร</option>
        <option value="หลังอาหาร">หลังอาหาร</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default AddNewMed;