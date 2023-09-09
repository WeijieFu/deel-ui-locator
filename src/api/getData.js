import { url } from "./endpoint.js"

export const getData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                query {
                    components(first:100) {
                      type
                      name
                      figmaLink
                      storybookLink
                      documentationLink
                      thumbnail {
                        url
                      }
                    }
                    boilerplates(first:100) {
                      type
                      name
                      description
                      figmaLink
                      componentKey
                      thumbnail{
                        url
                      }
                    }
                    resources(first:100){
                      type
                      name
                      link
                    }
                  }
              `,
      }),
    })

    const result = await response.json()
    return [
      result.data.components,
      result.data.boilerplates,
      result.data.resources,
    ]
  } catch (err) {
    console.log(err)
  }
}
