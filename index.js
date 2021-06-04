console.log('This is a CV Screener');

//data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Ram Sharma',
        age: 29,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Sharman Joshi',
        age: 19,
        city: 'Delhi',
        language: 'C',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Rama Sharma',
        age: 23,
        city: 'Kolkata',
        language: 'C++',
        framework: 'PHP',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Vani Verma',
        age: 26,
        city: 'Hyderabad',
        language: 'Java',
        framework: 'SQL',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
        name: 'Loki Shah',
        age: 28,
        city: 'Pune',
        language: 'Python',
        framework: 'Tkinter',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    }
]

//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}
const candidates = cvIterator(data);

nextCV();

//Button Listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){        
        image.innerHTML = `<img src='${currentCandidate.image}'>`;

        profile.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item disabled" aria-disabled="true">${currentCandidate.name}</li>
            <li class="list-group-item">Name: ${currentCandidate.name}</li>
            <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
            <li class="list-group-item">City: ${currentCandidate.city}</li>
            <li class="list-group-item">Language:  ${currentCandidate.language}</li>
            <li class="list-group-item">Framework: ${currentCandidate.framework}</li>   
        </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}