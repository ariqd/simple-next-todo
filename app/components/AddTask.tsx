'use client'

import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Modal from './Modal'
import { addTask } from '@/api'
import { useRouter } from 'next/navigation'

const AddTask = () => {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [newTask, setNewTask] = useState('')

    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await addTask({ title: newTask, completed: false })
        setNewTask('')
        setModalOpen(false)
        router.refresh()
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                <FaPlus size={10} /> Add Task
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTask}>
                    <h3 className='font-bold text-lg'>Add New Task</h3>
                    <div className="modal-action">
                        <input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                        <button type='submit' className="btn btn-primary">Add</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask