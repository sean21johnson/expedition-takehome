// Target the body
const body = document.querySelector("body");




const apiURL = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=`

async function fetchBackgroundImage() {
    const response = await fetch(apiURL + apiKey)
    const responseJson = response.json();

    // body.setAttribute("style", "background: url(" + responseJson +");background-repeat: no=repeat")
    const myStyle = body.getAttribute("style");
    console.log(myStyle)
}

fetchBackgroundImage();
