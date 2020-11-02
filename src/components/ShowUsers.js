import React from 'react'

const ShowUsers = (users) => {

    //========= Making a random color generator ========= 
    const generateHexaColor = () => {
        let string = '0123456789abcdef'
        let hexaColor = '#'
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * string.length)
            hexaColor += string[index]
        }
        return hexaColor
    }
    

    //========= limiting the number to 15 repos =========   
    const limitedSearchResult = users[1].slice(0, 15)


    //========= Displaying the reducedSearchResult =========  
    const DisplayUsers = limitedSearchResult.map(usersrepo => (
        <p className="section-repos__details animate"  style={{color:generateHexaColor()}} key={usersrepo.id}>
            <a href={usersrepo.homepage} target="_blank" rel="noopener noreferrer">{usersrepo.name}</a>
        </p>
    ))


    const location = users[0].location
    const bio = users[0].bio
    const loginName = users[0].login

    return (
        <center>
            <div className="main">
                <div className="section-info animate">
                    <div className="section-info__name">
                        <div className="section-name__details animate">
                            <h2 className="animate">{users[0].name}</h2>
                        </div>

                        <div className="section-name__details loc-details">

                            <div className="section-name__sub">
                                <div>
                                    <p style={{ fontSize: '13px' }}><i className="fas fa-sign-in-alt"></i> Login Name</p>
                                    {loginName === null ? <h6>Not available</h6> : <h4 className="animate">{users[0].login}</h4>}
                                </div>

                                <div>
                                    <p style={{ fontSize: '13px' }}> <i className="fas fa-map-marker-alt"></i> Location</p>
                                    {location === null ? <h6>Not available</h6> : <h4 className="animate">{location}</h4>}
                                </div>
                            </div>

                            <div className="section-name__avatar">
                                <img className="name-avatar" src={users[0].avatar_url} alt={users.name} />
                            </div>

                        </div>

                        <div className="section-name__details bio-details">
                            <div style={{ borderRight: '2px solid #bbb', paddingRight: '5px' }}>
                                <h4 className="animate">Bio</h4>
                            </div>

                            <div style={{ paddingLeft: '5px' }}>
                                {bio === null ? <h6>No Bio information available</h6> : <p style={{ fontSize: '13px' }} className="animate">{bio}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="section-info__stats">

                        <div className="section-stats__details">
                            <h3 className="animate" style={{color:generateHexaColor()}}>{users[0].followers}</h3>
                            <small>Followers</small>
                        </div>

                        <div className="section-stats__details">
                            <h3 className="animate" style={{color:generateHexaColor()}}>{users[0].following}</h3>
                            <small>Following</small>
                        </div>

                        <div className="section-stats__details">
                            <h3 className="animate" style={{color:generateHexaColor()}}>{users[0].public_repos}</h3>
                            <small>Public repos</small>
                        </div>

                    </div>
                    <div className="section-info__repos">
                        {DisplayUsers === null ? <h6>No Repositories available</h6> : <>{DisplayUsers}</>}
                    </div>
                </div>
                <div className="section-avatar animate">
                    <img className="avatar animate" src={users[0].avatar_url} alt={users.name} />
                </div>
            </div>
        </center>
    )
}

export default ShowUsers
