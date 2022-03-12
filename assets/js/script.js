let loadData = async () => {
    fetch('data.json')
        .then((response) => response.json())
    console.log(response)

}