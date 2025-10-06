import { baseUrl, repoQuantity } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repoQuantity}`)

    const data = await response.json()

    return data.filter((event) => {
        return event.type == "PushEvent" || event.type == "CreateEvent"
    })
}

export { getEvents }