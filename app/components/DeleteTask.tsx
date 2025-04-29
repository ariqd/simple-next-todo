'use client'

import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { ITask } from '@/types/tasks'
import { deleteTask } from '@/api'

interface DeleteTaskProps {
    task: ITask;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ task }) => {
    const router = useRouter()
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

    const handleDeleteTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        deleteTask(task.id)
        setOpenDeleteModal(false)
        router.refresh()
    }

    return (
        <div>
            <button className="btn btn-sm btn-danger" onClick={() => setOpenDeleteModal(true)}>
                <FiTrash2 size={15} className='text-red-400' /> <span className='text-red-400'>Delete</span>
            </button>

            <Modal modalOpen={openDeleteModal} setModalOpen={setOpenDeleteModal}>
                <form onSubmit={handleDeleteTask}>
                    <h3 className='font-bold text-lg text-center'>{`Delete "${task?.title}"`}</h3>
                    <div className="mt-4 mb-6">
                        <span>Are you sure you want to delete this task?</span>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button onClick={() => setOpenDeleteModal(false)} className="btn btn-ghost text-white">
                            Cancel
                        </button>

                        <button type='submit' className="btn btn-error text-white">
                            <FiTrash2 size={15} /> Delete this task
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default DeleteTask