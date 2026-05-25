
function cardDisplay(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const profession = document.getElementById("profession").value;
    const address = document.getElementById("address").value;
    const card = document.getElementById("card");

    card.innerHTML = ""
    card.style.display="block"
    card.innerHTML +=`
        <div class="flex gap-1 items-center">
            <i class="fa-regular fa-address-card text-[1.2rem]"></i>
            <h1 class="font-bold text-[1.2rem] text-gray-600">Profile-Card</h1>
        </div>
        <div class="flex flex-col  mt-2">
            <div class=" bg-[url('https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg')] bg-cover bg-center  h-40 rounded-md relative w-full">
               <img src="user.png"  class="absolute w-20 top-[70%] left-5  rounded-full border-[5px] border-gray-100"/>
            </div>
            <div class="mt-8">
                <p class="font-semibold text-gray-800 text-[1.2rem]">
                   ${name}
                </p>

                <p class="font-semibold text-[0.9rem] text-[#6c6c76]">
                    ${email}
                </p>
            </div>
            
            <p class="font-semibold text-[1rem] text-[#454548] my-3">
                Profession:
                <br/>
                <span class="text-[1.1rem] text-gray-800">${profession}</span>
            </p>

            <p class="font-semibold text-[1rem] text-[#454548]  ">
                Address:
                <br/>
                <span class="text-[1.1rem] text-gray-800">${address}</span>
            </p>
    
            <div class="flex justify-between mt-8">
                <p class="flex items-center font-bold">
                    <i class="fa-regular fa-user"></i>
                    4,256
                </p>
                <button class=" border-none p-1 rounded-md font-bold w-32 bg-teal-800  text-gray-100 hover:translate-x-1 transition-all duration-200 cursor-pointer  hover:scale-105 hover:bg-red-900">Follow</button> 
            </div>
            
        </div> 

    `
}
