const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async () => {
    try {
        const methods = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${api}`
            },
            body: JSON.stringify({
                "prompt": inp.value,
                "n": 3,
                "size": "256x256"
            })
        };

        const res = await fetch("https://api.openai.com/v1/images/generations", methods); //حت هنا توكن موقع chatgpt
        // parse the response as json 
        const data = await res.json();
        const listImages = data.data;
        images.innerHTML = ''
        listImages.map(photo => {
            const container = document.createElement("div");
            images.append(container);

            const img = document.createElement("img");
            container.append(img);

            img.src = photo.url;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};