const doctors=[
{name:"Dr. Ahmed Khan",specialty:"Cardiology",exp:"12 years",initials:"AK"},
{name:"Dr. Sara Ali",specialty:"Neurology",exp:"10 years",initials:"SA"},
{name:"Dr. Hamza Raza",specialty:"Orthopedics",exp:"9 years",initials:"HR"},
{name:"Dr. Ayesha Noor",specialty:"Pediatrics",exp:"8 years",initials:"AN"},
{name:"Dr. Bilal Ahmed",specialty:"Dermatology",exp:"11 years",initials:"BA"},
{name:"Dr. Maria Shah",specialty:"General Medicine",exp:"13 years",initials:"MS"}];
const grid=document.getElementById('doctorGrid'),search=document.getElementById('doctorSearch'),filter=document.getElementById('specialtyFilter');
function render(){const q=search.value.toLowerCase(),f=filter.value;grid.innerHTML=doctors.filter(d=>(d.name.toLowerCase().includes(q)||d.specialty.toLowerCase().includes(q))&&(!f||d.specialty===f)).map(d=>`<article class="doctor"><div class="avatar">${d.initials}</div><div><h3>${d.name}</h3><p>${d.specialty}</p><small>${d.exp} experience</small><br><a class="btn btn-primary" href="appointment.html">Book Appointment</a></div></article>`).join('')||'<p>No doctors found.</p>'}search.addEventListener('input',render);filter.addEventListener('change',render);render();
