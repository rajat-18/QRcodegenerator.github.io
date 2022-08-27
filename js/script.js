const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e)=>{
    e.preventDefault();
    clearUI();

    const url= document.getElementById('url').value;
    const size= document.getElementById('size').value;

    if(url === ''){
        alert('Please enter a URL');
    } else{
        showspinner();

        setTimeout(()=>{
        hidspinner();
        generateQRCode(url,size);

        setTimeout(()=>{
            const saveUrl= qr.querySelector('img').src;
            createSaveBtn(saveUrl);
        },50);
        },1000);
    }
};

const generateQRCode=(url,size)=>{
    const qrcode= new QRCode('qrcode',{
        text: url,
        height: size,
        width: size,
    });
};

const showspinner=()=>{
    document.getElementById('spinner').style.display='block';
};

const hidspinner=()=>{
    document.getElementById('spinner').style.display='none';
};
const clearUI=()=>{
    qr.innerHTML='';
    const saveLink = document.getElementById('save-link');
    if(saveLink) saveLink.remove();
};

const createSaveBtn=(saveUrl)=>{
    const link = document.createElement('a');
    link.id= 'save-link';
    link.classList=
       'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
       link.href=saveUrl;
       link.download='qrcode';
       link.innerHTML='Save Image';
       document.getElementById('generate').appendChild(link);
}

form.addEventListener('submit', onGenerateSubmit);