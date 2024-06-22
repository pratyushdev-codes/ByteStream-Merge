import React from 'react'

const Watch = () => {
    return ( 
        <div>
            
            <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]"></div>
            <div className="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
                <div className="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
                <div className="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" className="dark:hidden h-[193px] w-[188px]" alt="wpic-1"/>
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" className="hidden dark:block h-[193px] w-[188px]" alt="wpic-2"/>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>

        </div>
     );
}

export default Watch;