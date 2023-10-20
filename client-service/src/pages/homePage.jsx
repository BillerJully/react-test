const HomePage = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <div className="wrapper">
                <div className="blockmain">
                    <h2>For the first time?</h2>
                    <button className="btn-cont">Create account!</button>
                </div>
                <div className="blockmain">
                    <h2>Already have account?</h2>
                    <p>Hello</p>
                    <button className="btn-cont">Login!</button>
                </div>
            </div>
        </div>
    )
}

export {HomePage}