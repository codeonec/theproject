
const submitForm = document.getElementById("form-sub")

submitForm.addEventListener('submit', async e => {
    e.preventDefault()

    const reqBody = {
        category: document.querySelector('[data-category]').value,
        topic: document.querySelector('[data-topic]').value,
        text: document.querySelector('[data-text]').value
    }

    const category = document.querySelector('[data-category]').value
    
    if(category === 'Image' || category ==='GIF' || category ==='Tweet' || category ==='Meme' || category ==='Unsplash' || category ==='Reddit' || category ==='Instagram' || category ==='Reads'){
        reqBody.image = document.querySelector('[data-image]').value
        if(document.querySelector('[data-source]').value !== "" ){
            reqBody.source = document.querySelector('[data-source]').value
        }
    }
    if(category === 'Resource'){
        reqBody.tool =  {
            image: document.querySelector('[data-link-resource-image]').value,
            text: document.querySelector('[data-link-resource-text]').value,
            link: document.querySelector('[data-link-resource]').value,
            linkPreview: document.querySelector('[data-link-resource-linkPreview]').value
        }
    }
    if(category ==='News' || category ==='Article'){
        reqBody.linkSource = {
            image: document.querySelector('[data-link-image]').value,
            text: document.querySelector('[data-link-text]').value,
            link: document.querySelector('[data-link]').value,
            linkPreview: document.querySelector('[data-link-linkPreview]').value
        }
    }

    try{
        console.log(reqBody)
        const axRes = await axios.post('/kickdata',reqBody)
        if(axRes.status === 200){
            console.log(axRes.data)
            pushSuccess(axRes.data._id)
        }
    }catch(e){
        console.log(e.response)
        const errors = e.response.data.errors
        appendErrors(errors)
    }
    // console.log(reqBody)

})


const pushSuccess = (id) => {
    const SubWrapper = document.querySelector('.submission-wrapper')
    SubWrapper.innerHTML = `
        <div class="success-wrapper">
            <h2>✅ Data Kicked Successfully</h2>
            <p>Kick Access ID = ${id}</p>
            <p>JSON values of before and after kick are logged inside console. Refresh page to add new kick.</p>
        </div>
    `
}

const appendErrors = (dataError) => {
    const submissionErr = document.querySelector(".errors")
    submissionErr.innerHTML = ""
    const appendChild = (text) => {
        const errorDiv = document.createElement("div")
        errorDiv.classList.add("error")
        errorDiv.innerHTML = text
        return errorDiv
    }
    dataError.category && submissionErr.append(appendChild("Invalid Category"))    
    dataError.topic && submissionErr.append(appendChild("Invalid Topic"))
    dataError.text && submissionErr.append(appendChild("Invalid Text"))   
}



const getFormElements = () => {
    const value = document.querySelector('[data-category]').value
    document.querySelector('.ext-elements').innerHTML = ""
    if(value === 'Image' || value === 'GIF' || value === 'Tweet' || value === 'Meme' || value === 'Unsplash' || value === 'Reddit' || value === 'Instagram' || value === 'Reads'){
        document.querySelector('.ext-elements').innerHTML = `
            <input type='text' name='image' placeholder='Enter Image URL' data-image>
            <input type='text' name='source' placeholder='Enter Source Link (If any)' data-source>
            `
    }
    if(value === 'Resource'){
        document.querySelector('.ext-elements').innerHTML = `
            <label>Resource Link</label>
            <input type='text' name='image' placeholder='Enter Image URL' data-link-resource-image>
            <input type='text' name='text' placeholder='Enter Link Text' data-link-resource-text>
            <input type='text' name='link' placeholder='Enter Link URL' data-link-resource>
            <input type='text' name='linkPreview' placeholder='Enter Display URL' data-link-resource-linkPreview>
            `
    }
    if(value === 'News' || value === 'Article'){
        document.querySelector('.ext-elements').innerHTML = `
            <label>Source Link</label>
            <input type='text' name='image' placeholder='Enter Image URL' data-link-image>
            <input type='text' name='text' placeholder='Enter Link Text' data-link-text>
            <input type='text' name='link' placeholder='Enter Link URL' data-link>
            <input type='text' name='linkPreview' placeholder='Enter Display URL' data-link-linkPreview>
            `
    }
}