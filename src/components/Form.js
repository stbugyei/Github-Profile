import React from 'react'

function Form() {

    return (
        <div className='search__container'>
            <form className="search">
                <>
                    <input
                        className='input-field'
                        type="search"
                        name="name"
                        autoComplete='on'
                        placeholder="Find Users" />
                    <button
                        className="btn">
                        <i className="fa fa-search"></i>
                    </button>
                </>
            </form>
        </div>
    )
}

export default Form