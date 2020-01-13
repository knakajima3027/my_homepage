const profileBtn = document.getElementById('profile-btn');
const researchBtn = document.getElementById('research-btn');
const internBtn = document.getElementById('intern-btn');
const linkBtn = document.getElementById('link-btn');

const profile = document.getElementById('profile');
const research = document.getElementById('research');
const intern = document.getElementById('intern');
const link = document.getElementById('link');


profileBtn.addEventListener('click', func = (e) => {
    profile.classList.remove('hidden');
    research.classList.add('hidden');
    intern.classList.add('hidden');
    link.classList.add('hidden');
    e.preventDefault();
});

researchBtn.addEventListener('click', func = (e) => {
    profile.classList.add('hidden');
    research.classList.remove('hidden');
    intern.classList.add('hidden');
    link.classList.add('hidden');
    e.preventDefault();
});

internBtn.addEventListener('click', func = (e) => {
    profile.classList.add('hidden');
    research.classList.add('hidden');
    intern.classList.remove('hidden');
    link.classList.add('hidden');
    e.preventDefault();
});

linkBtn.addEventListener('click', func = (e) => {
    profile.classList.add('hidden');
    research.classList.add('hidden');
    intern.classList.add('hidden');
    link.classList.remove('hidden');
    e.preventDefault();
});