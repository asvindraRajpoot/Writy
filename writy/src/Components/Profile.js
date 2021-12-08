function Prfile(props) {
    console.log(props);
    const {user}=props
    return (
        <div className="container">
            <strong>{user.user.username}</strong>
            <div>
                <h6>My Articles</h6>
                <h6>Favorited Articles</h6>
            </div>

        </div>
    )
}

export default Prfile;