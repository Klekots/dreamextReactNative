export const getData = async (params) =>{
let data = {
  method: "POST",
  body: JSON.stringify( {
    login : params.login,
    password : params.password
  }),
  headers: {
    "Accept":       "application/json",
    "Content-Type": "application/json",
  }
}

return await fetch("http://37.230.137.219:3010/authorize", data)
  .then(response => response.json())
  .then(res => {return res})
}
