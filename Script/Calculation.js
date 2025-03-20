
document.getElementById('btn-calculate').addEventListener('click', function () {

    const firstinput = document.getElementById('firstnumber');
    const firstValue = firstinput.value;
    const ConvertedFirstValu = parseFloat(firstValue);

    const secondinput = document.getElementById('secondnumber');
    const secondValue = secondinput.value;
    const ConvertedSecondValu = parseFloat(secondValue);



    const AreaCalculation = 0.5 * ConvertedFirstValu * ConvertedSecondValu;
    console.log(AreaCalculation);


    const shapeName = document.getElementById('shapeName');
    const headofthedisplay = document.getElementById('viweDisplay');

    const container = document.createElement('div'); //-1st parent
    container.classList.add('flex') ;
    container.classList.add('justify-between') ;
    container.classList.add('items-center') ;
    container.classList.add('my-3') ;
    container.id = 'container';

    const p = document.createElement('p');
    p.innerText= shapeName.innerText+' Area is '+AreaCalculation;
    const cmspen = document.createElement('span');

    cmspen.innerHTML= ' <spen>cm<sup>2</sup></spen>'
    p.appendChild(cmspen);

    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.id = 'convert';
    button.innerText='Convert to';
    const mspen = document.createElement('span');
    mspen.innerHTML= ' <spen>m<sup>2</sup></spen>';
    button.appendChild(mspen);


    
    
    container.appendChild(p);
    container.appendChild(button);
    headofthedisplay.appendChild(container);

})

function covertion(){
    const firstinput = document.getElementById('firstnumber');
    const firstValue = firstinput.value;
    const ConvertedFirstValu = parseFloat(firstValue);

    const secondinput = document.getElementById('secondnumber');
    const secondValue = secondinput.value;
    const ConvertedSecondValu = parseFloat(secondValue);



    const AreaCalculation = 0.5 * ConvertedFirstValu * ConvertedSecondValu;
    
    const AreaInMiter = AreaCalculation/100;
    console.log(AreaInMiter);
}


