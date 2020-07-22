import React from 'react';


function TeamMemberForm(props) {


    return (
        <div className='TeamMemberForm' />
        <form>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                name='name'
                placeholder='Enter Name'
            />

            <label htmlFor='role'>Role:</label>
            <input
                type='text'
                name='role'
                placeholder='Enter your role.'
            />

            <label htmlFor='email'>Email:</label>
            <input
                type='text'
                name='email'
                placeholder='Enter email address.'
            />

            <button>Time to Submit!</button>

        </form>
    )
}

export default Form;