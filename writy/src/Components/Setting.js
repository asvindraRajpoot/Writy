function Setting() {
    return (
        <>
            <h1>Your Settings</h1>
            <div className="container">
                <div className="container post">
                    <form>
                        <input name="username" placeholder="Article Title" type="text" value={"name"} />

                        <textarea name="description" placeholder="Short bio about you" type="text" />
                        <input name="email" placeholder="" type="email" value={"email"} />
                        <input name="password" placeholder="New Password" />
                        <input type="submit" value="Update Settings" />


                    </form>

                </div>


            </div>
        </>

    )
}
export default Setting;