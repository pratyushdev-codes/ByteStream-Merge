import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import { TbSocial } from "react-icons/tb";
import TextInput from '../components/TextInput';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';
import { BsMoon, BsSunFill } from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';
const TopBar = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();


  const handleSearch = async(data) => {
    console.log(data)
  }



  const dispatch = useDispatch();

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
        <Link to='/' className='flex gap-2 items-center'>
            <div className='p-1 md:p-2 bg-[#065ad8] rounded text-white'>
                <TbSocial />
            </div>
            <span className='text-xl md:text-2xl text-[#065ad8] font-semibold '></span>
        </Link>

        <form className='hidden md:flex items-center justify-center ' onSubmit={handleSubmit(handleSearch)}>
            <TextInput placeholder='Search...' styles='w-[18rem] lg:w-[38rem] rounded-l-full py-3 'register={register('search')}/>
            <CustomButton title='Search' type='submit' containerStyles='bg-[#044a4] text-white px-6 py-2.5 mt-2 rounded-r-full'/>
        </form>

        <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
           
            <div className="hidden lg:flex">
                <IoMdNotificationsOutline/>
            </div>
        </div>
    </div>
  )
}

export default TopBar;