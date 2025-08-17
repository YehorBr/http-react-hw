const API_KEY = "47938285-50ff160efc2f22283719f94fb"
const BASE_URL = "https://pixabay.com/api/"

export const fetchImages = async (searched, page = 1)=>{
    const response = await fetch(`${BASE_URL}?q=${searched}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return await response.json()
}