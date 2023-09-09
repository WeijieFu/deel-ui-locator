import { url } from "./endpoint.js"

export const insertData = async (currentUser, type) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                mutation {
                    createView(data:{name: "${currentUser}", action: "${type}"}) {
                    id
                    } 
                }
              `,
      }),
    })
  } catch (err) {
    console.log(err)
  }
}
