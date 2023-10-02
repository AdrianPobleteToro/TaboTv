let selectedButton = null;
const urlApi = 'https://www.tabotvapp.somee.com/api/Canal/';
let url = '';
let urlResponse = '';
const spinner = document.getElementById("spinner-container");
const frame = document.getElementById("frameTele");
async function selectButton(canalId) {
    frame.style.display = 'none';
    spinner.style.display = 'block';
    url = urlApi + canalId;
    console.log(url);
    urlResponse = await fetch(url)
        .then(response => response.json())
        .then(data => data.urlCanal);

    frame.src = urlResponse;

    document.querySelector('iframe').contentWindow.document.body.onclick = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };

    frame.onload = function () {
        frame.style.display = 'block';
        spinner.style.display = 'none';
        window.addEventListener('load', function () {
            let iframe = document.querySelector('iframe');

            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });
    };

}
function cerrarApp() {
    location.reload();
    Android.cerrarAplicacion();
}

function canal(canalId) {
    const urlBase = 'https://blackface.world/dtvpl.html?id=';
    let urlFrame = urlBase + canalId;
    frame.style.display = 'none';
    spinner.style.display = 'block';
    frame.src = urlFrame;

    frame.onload = function () {
        frame.style.display = 'block';
        spinner.style.display = 'none';
        window.addEventListener('load', function () {
            let iframe = document.querySelector('iframe');

            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });
    };
}