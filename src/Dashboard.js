import React from 'react'
import dashboard from './assets/dashboard.png'
import services from './assets/service.png'
import tasklist from './assets/task_list.png'
import notification from './assets/notification.png'
import project from './assets/project.png'
import chat from './assets/chats.png'
import logo from './assets/logo.png'
import user from './assets/user.jpg'

const Dashboard = () => {
    return (
        <div className='w-72 h-full border-2 bg-gray-100 rounded fixed left-0 '>
            <div className='flex mt-7 ml-10 items-center gap-x-3'>
                <img src={logo} className='w-8 h-8' />
                <strong className='text-xl'>BRESS</strong>
            </div>
            <hr className='w-64 mt-4 mb-2 ml-4 border'></hr>
            <div className='flex mt-10 ml-10 items-center gap-x-3 w-48 h-8 hover:bg-sky-400 hover:text-black rounded-2xl'>
                <img src={dashboard} className='w-4 h-4 ml-5' />
                <p>Dashboard</p>
            </div>
            <div className='flex mt-10 ml-12 items-center gap-x-3 w-48 h-8 hover:bg-black hover:text-white rounded-2xl'>
                <img src={project} className='w-6 h-6 ml-3' />
                <p>Projects</p>
            </div>
            <div className='flex mt-10 ml-12 items-center gap-x-3 w-48 h-8 hover:bg-black hover:text-white rounded-2xl'>
                <img src={tasklist} className='w-5 h-5 ml-3' />
                <p>Task Lists</p>
            </div>
            <div className='flex mt-10 ml-12 items-center gap-x-3 w-48 h-8 hover:bg-black hover:text-white rounded-2xl'>
                <img src={notification} className='w-4 h-4 ml-3' />
                <p>Notification</p>
            </div>
            <div className='flex mt-10 ml-12 items-center gap-x-3 w-48 h-8 hover:bg-black hover:text-white rounded-2xl'>
                <img src={services} className='w-6 h-6 ml-3' />
                <p>Services</p>
            </div>
            <div className='flex mt-10 ml-12 items-center gap-x-3 w-48 h-8 hover:bg-black hover:text-white rounded-2xl'>
                <img src={chat} className='w-6 h-6 ml-3' />
                <p>Chats</p>
            </div>

            <div className='mt-12'>
            <img src={user} className='w-16 h-16 rounded-full ml-20 mb-3'/>
            <strong className='ml-12 '>Riya Chaudhary</strong>
            <p className='ml-16 mt-1 mb-12 text-xs'>riya@yahoo.com</p>
            </div>

        </div>
    )
}

export default Dashboard