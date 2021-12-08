function NewPost() {
    return (
        <>
            <div className="container post">
                <form>
                    <input name="title" placeholder="Article Title" type="text" />
                    <input name="about" placeholder="What's the article about" type="text" />
                    <textarea name="description" placeholder="Write your article" type="text" />
                    <input name="tags" placeholder="Enter tags" type="text" />
                    <input type="submit" value="Publish Article" />

                </form>
            </div>

        </>
    )
}

export default NewPost;