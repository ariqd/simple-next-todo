import { ITask } from '@/types/tasks'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

interface TaskProps {
    task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr>
            <td className='w-full font-bold text-lg'>{task.title}</td>
            <td>{task.completed ? <FaCheckCircle size={20} className='text-green-400' /> : ''}</td>
            <td className='flex gap-2'>
                <EditTask task={task} />
                <DeleteTask task={task} />
            </td>
        </tr>
    )
}

export default Task