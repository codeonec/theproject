
const Feedback = () => {
    return(
        <div className="content-wrapper">
            <div className="post-container">
                <div className="head-wrapper">
                    <div className="head-3">
                        Feedback
                    </div>
                </div>
                <div className='feedback-cnt'>
                    <p className='para-text'>
                        We'd love to hear your views or suggestions for how we might make your experience better!
                    </p>
                    <p className='para-text'>
                        You can give feedback on <strong>aspects you don't like, things you'd want to see improved, or features you'd like to see added.</strong> <strong>Suggestions, bug reports and questions</strong> are also accepted as a feedback.
                    </p>
                    <div style={{display: 'flex', justifyContent:'flex-end'}}><a className="btn-cnt-lg feedback-lnk" href="/feedback">Submit Feedback</a></div>
                </div>
                <div className="head-wrapper">
                    <div className="head-3">
                        Content Suggestions
                    </div>
                </div>
                <div className="feedback-cnt">
                    <p className="para-text">You can contribute content if you have truly good content that you wish to share on this platform.</p>
                    <p className="para-text">As suggestions, you can contribute useful resources such as <strong>tools, websites, blog articles, Tweets, Instagram posts, Reddits, Images, GIFs, Hacks, Quotes, and Thoughts.</strong></p>
                    <div style={{display: 'flex', justifyContent:'flex-end'}}><a className="btn-cnt-lg feedback-lnk" href="/suggestion">Submit Suggetsion</a></div>
                </div>
            </div>
        </div>
    )
}
export default Feedback