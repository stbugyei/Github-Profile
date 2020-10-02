import React, { useState, useEffect } from "react";
import Form from './Form';
import ShowUsers from './ShowUsers';
import Loader from './Loader';


const URL = "https://api.github.com/users/";

const GetgithubUsers = () => {

    const [error, setError] = useState(false);
    const [users, setUsers] = useState({});


    //========= An async and await function to fetch users =========

    const getUsers = async (e) => {
        e.preventDefault();
        const query = e.target.name.value;

        const usernameFeed = await Promise.all([
            fetch(URL + query),
            fetch(URL + query + '/repos'),
        ]);

        if (((usernameFeed[0].status) || (usernameFeed[1].status)) !== 200) {

            setError(<span>Username <h4 style={{ color: 'red' }}>{query}</h4>{(usernameFeed[0].statusText)}</span>);

        } else {

            const userResponds = await usernameFeed[0].json();
            const repoResponds = await usernameFeed[1].json();
            let userInformation = []
            userInformation.push(userResponds, repoResponds);
            setUsers(userInformation);
            setError(null);
        }
    }


    //======== An async and wait function to display default user =========

    const displayDefaultUser = async () => {

        const userName = ['littlesoldier2019', 'anyariazantceva']

        //======== Making a random selection of user names =========

        // const query = userName[Math.floor(Math.random() * userName.length)];

        const query = userName.sort(() => Math.random() - 0.5)[0];

        const usernameFeed = await Promise.all([
            fetch(URL + query),
            fetch(URL + query + '/repos'),
        ]);

        if (((usernameFeed[0].status) || (usernameFeed[1].status)) !== 200) {

            setError(<span>Username <h4 style={{ color: 'red' }}>{query}</h4>{(usernameFeed[0].statusText)}</span>);

        } else if (((usernameFeed[0].status) || (usernameFeed[1].status)) === 403) {

            setError(<h4 style={{ color: 'red' }}> {(usernameFeed[0].statusText)}</h4>);

        } else {

            const userResponds = await usernameFeed[0].json();
            const repoResponds = await usernameFeed[1].json();
            let userInformation = []
            userInformation.push(userResponds, repoResponds);
            setUsers(userInformation);
            setError(null);
        }
    }


    useEffect(() => {
        displayDefaultUser();
    }, [])


    if (!(users && Object.keys(users).length)) {
        return <> <Loader /> <div style={errormsg}>Cannot Fetch from <p style={{ color: 'red' }}>{URL}</p></div>
        </>
    }


    return (
        <div>
            <div className='form_wrapper' onSubmit={getUsers}><Form /></div>
            { !error ? <ShowUsers {...users} /> : <><Loader /> <div style={errormsg}>{error}</div></>}
        </div>
    )
}

export default GetgithubUsers


const errormsg = {
    margin: '30px',
    textAlign: 'center',
};