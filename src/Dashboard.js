import React from 'react'
import tasklist from './assets/task_list.png'
import project from './assets/project.png'
import user from './assets/user.jpg'
import user1 from './assets/user-icon.jpg'
import user2 from './assets/user-icon2.jpg'
import user3 from './assets/user-icon3.jpg'
import message from './assets/message.jpg'
import setting from './assets/setting.jpg'
import question from './assets/question.jpg'

const Dashboard = () => {
    return (
        <div className='w-72 h-full back rounded sticky left-0 '>
            <div className='mt-4 flex items-center'>
                <img src={user} className='w-12 h-12 rounded-full ml-12 mb-3' />
                <p className='text-white text-md ml-4'>Mommy's</p>
            </div>
            <hr className='w-64 mt-4 mb-2 ml-4 border'></hr>
            <p className='text-gray-100 text-sm ml-6 mt-5'>Account</p>
            <div>
                <div className='flex mt-5 ml-10 text-black items-center gap-x-3 w-48 h-12 hover:border border-white hover:text-black rounded-2xl'>
                    <img src={user1} className='w-8 h-8 ml-3 rounded-full' />
                    <div>
                        <p className='text-white mb-1 text-sm'>Rahul's Phone</p>
                        <div className='flex items-center text-[11px]'>
                            <div className='bg-green-400 h-2 w-2 rounded-full mr-2'></div>
                            <p className='text-green-400'>Active</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex mt-4 ml-10 text-black items-center gap-x-3 w-48 h-12 hover:border border-white hover:text-black rounded-2xl'>
                    <img src={user2} className='w-8 h-8 ml-3 rounded-full' />
                    <div>
                        <p className='text-white mb-1 text-sm'>Jiya's Phone</p>
                        <div className='flex items-center text-[11px]'>
                            <div className='bg-green-400 h-2 w-2 rounded-full mr-2'></div>
                            <p className='text-green-400'>Active</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex mt-4 ml-10 text-black items-center gap-x-3 w-48 h-12 hover:border border-white hover:text-black rounded-2xl'>
                    <img src={user3} className='w-8 h-8 ml-3 rounded-full' />
                    <div>
                        <p className='text-white mb-1 text-sm'>Simran's Phone</p>
                        <div className='flex items-center text-[11px]'>
                            <p className='text-gray-400'>last seen 2h ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-4 ml-10 w-44 h-8 text-white border border-white flex items-center rounded-2xl hover:bg-white hover:text-black'>
                        <p className='ml-5 mr-2 text-2xl'>+</p>
                        <p>Add Account</p>
                </div>
            </div>
            <p className='text-gray-100 text-sm ml-6 mt-8'>General</p>

            <div className='flex mt-6 ml-10 bg-white text-black items-center w-40 h-8 hover:bg-sky-200 hover:text-black rounded-2xl'>
                <img src={message} className='w-8 h-8 ml-5 rounded-full' />
                <p>Message</p>
            </div>
            <div className='flex mt-10 ml-10 bg-white text-black items-center w-40 h-8 hover:bg-sky-200 hover:text-black rounded-2xl'>
                <img src={setting} className='w-8 h-8 ml-5 rounded-full' />
                <p>Setting</p>
            </div>
            <div className='flex mt-10 ml-10 mb-28 bg-white text-black items-center w-40 h-8 hover:bg-sky-200 hover:text-black rounded-2xl'>
                <img src={question} className='w-8 h-8 ml-5 rounded-full' />
                <p>Help</p>
            </div>

            
        </div>
    )
}

export default Dashboard