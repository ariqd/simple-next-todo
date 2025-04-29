'use client'

import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { editTask } from '@/api'
import { ITask } from '@/types/tasks'

interface EditTaskProps {
    task: ITask;
}

const EditTask: React.FC<EditTaskProps> = ({ task }) => {
    const router = useRouter()
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [editedTitle, setEditedTitle] = useState<string>(task?.title)
    const [isCompleted, setIsCompleted] = useState<boolean>(task?.completed)

    const handleEditTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        editTask({
            id: task.id,
            title: editedTitle,
            completed: isCompleted
        })

        setOpenEditModal(false)
        router.refresh()
    }

    return (
        <div>
            <button className="btn btn-sm btn-primary" onClick={() => setOpenEditModal(true)}>
                <FiEdit size={15} /> Edit
            </button>

            <Modal modalOpen={openEditModal} setModalOpen={setOpenEditModal}>
                <form onSubmit={handleEditTask}>
                    <h3 className='font-bold text-lg text-center'>Edit Task</h3>
                    <div className="modal-action">
                        <input
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="flex gap-2 justify-between mt-4">
                        <label className="label">
                            <input type="checkbox" defaultChecked={isCompleted} onClick={() => setIsCompleted(!isCompleted)} className={`checkbox checkbox-${isCompleted ? 'success' : 'error'}`} />
                            Completed
                        </label>

                        <button type='submit' className="btn btn-primary">Confirm</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default EditTask