function submitData(name, email) {
    const postData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(postData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Return the entire response, not just the JSON, for further processing
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        document.body.innerHTML += `<p>New user ID: ${newId}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
      
    