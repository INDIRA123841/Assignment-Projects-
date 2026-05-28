
const members = [];


function addNew(e){
    e.preventDefault();
    const data = e.target;

    if(data.name.value === "" || data.email.value === ""){
        alert("Please fill all fields");
        return;
    }
    
    
    
    const member = {
        name: data.name.value,
        email: data.email.value
    }
    members.push(member);
    renderMembers();
    alert("Member Added✅");
    
    
    e.target.reset();
}





function renderMembers(){
    const renders = document.getElementById('renders');
    renders.innerHTML = '';
        if(members.length === 0){
            renders.innerHTML = `<p class="text-center my-2 font-bold text-red-900 text-[1.3rem] max-[40rem]:text-[1rem]">No Member Found😢</p>`
        }
        else{
           for(let i = 0; i < members.length; i++){
           renders.innerHTML += `
            <div 
                class="flex gap-4 max-[40rem]:gap-1 items-center p-3 px-5 max-[40rem]:px-2 border border-teal-300 rounded-sm mt-2 bg-[rgba(80,190,190,0.2)] relative hover:translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-white">
                <div class="w-10 h-10  max-[40rem]:h-7 max-[40rem]:w-7 bg-teal-700 text-green-200 grid place-content-center rounded-full font-bold text-[1.2rem] max-[40rem]:text-[0.8rem]">${members[i].name[0].toUpperCase()}</div>
                <div class="flex flex-col gap-0">
                    <h2 class="text-[1rem] font-bold text-green-900 max-[40rem]:text-[0.8rem]">${members[i].name}</h2>
                    <p class="text-gray-600 font-semibold max-[40rem]:text-[0.7rem]">${members[i].email}</p>
                </div>
                <button onClick = "deleteMember(this)"
                class="absolute top-1 left-[90%] h-7 w-7  max-[40rem]:h-4 max-[40rem]:w-4  hover:bg-red-700 hover:scale-75 rounded-full cursor-pointer transition-all duration-300">
                  <i class="fa-solid fa-xmark text-[#a70505] text-[1rem] hover:text-white max-[40rem]:text-[0.8rem] "></i>
                </button>
            </div>
        `
        }
        
        }
    }
renderMembers();


function deleteMember(button){
    button.parentElement.remove();
}






