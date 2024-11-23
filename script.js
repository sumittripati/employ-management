// step 1 : regitration form ko show karna and hide krna 


// let addBtn = document.getElementById('add-btn');
// let formcontainer = document.getElementById("registerForm")
// let closeIcon = document.getElementById('closeIcon')

// addBtn.addEventListener("click",function () {
//     formcontainer.classList.add("active")
// })

// closeIcon.addEventListener("click",function(){
//     formcontainer.classList.remove("active")
// })


// // step 2 : select all input fields and global valriable and show registered data on console

// let addBtn = document.getElementById('add-btn');
// let formcontainer = document.getElementById("registerForm")
// let closeIcon = document.getElementById('closeIcon')

// addBtn.addEventListener("click",function () {
//     formcontainer.classList.add("active")
// })

// closeIcon.addEventListener("click",function(){
//     formcontainer.classList.remove("active")
// })

// //  next code

// let idEl = document.getElementById('id')
// let nameEl = document.getElementById('name')
// let LastNameEl = document.getElementById('last-name')
// let EmailEl = document.getElementById('email')
// let OfficeCodeEl = document.getElementById('office-code')
// let JobTitleEl = document.getElementById('job-title')
// let formDetailRst = document.getElementById('formDetail')

// let userData = []

// let registerFormbtn = document.getElementById("registForm")
// registerFormbtn.addEventListener("click",function(e){
//     e.preventDefault()
//     addData()
//     formDetailRst.reset()
//     closeIcon.click()
// })

// function addData() {
//     userData.push({
//         Id : idEl.value,
//         Name : nameEl.value,
//         L_Name: LastNameEl.value,
//         Emai : EmailEl.value,
//         Office_Code : OfficeCodeEl.value,
//         Job_Title : JobTitleEl.value
//     })
//     let userStringData = JSON.stringify(userData)
//     localStorage.setItem("userData", userStringData)
//     //    console.log(userData)
// }

// userData = JSON.parse(localStorage.getItem("userData"))
// console.log(userData)
//     // Clear form inputs after submission

// // function clearRormData() {
// //     idEl.value = '';
// //     nameEl.value = '';
// //     LastNameEl.value = '';
// //     EmailEl.value = '';
// //     OfficeCodeEl.value = '';
// //     JobTitleEl.value = '';
// // }







// step 3 : Show Data on page

// let addBtn = document.getElementById('add-btn');
// let formcontainer = document.getElementById("registerForm")
// let closeIcon = document.getElementById('closeIcon')

// addBtn.addEventListener("click",function () {
//     formcontainer.classList.add("active")
// })

// closeIcon.addEventListener("click",function(){
//     formcontainer.classList.remove("active")
// })

// //  2 next step

// let idEl = document.getElementById('id')
// let nameEl = document.getElementById('name')
// let LastNameEl = document.getElementById('last-name')
// let EmailEl = document.getElementById('email')
// let OfficeCodeEl = document.getElementById('office-code')
// let JobTitleEl = document.getElementById('job-title')
// let formDetailRst = document.getElementById('formDetail')
// let InsertArea = document.getElementById('insertArea')

// let userData = []

// let registerFormbtn = document.getElementById("registForm")
// registerFormbtn.addEventListener("click",function(e){
//     e.preventDefault()
//     addData()
//     formDetailRst.reset()
//     closeIcon.click()
// })

// function addData() {
//     userData.push({
//         Id : idEl.value,
//         Name : nameEl.value,
//         L_Name: LastNameEl.value,
//         Email : EmailEl.value,
//         Office_Code : OfficeCodeEl.value,
//         Job_Title : JobTitleEl.value
//     })
//     let userStringData = JSON.stringify(userData)
//     localStorage.setItem("userData", userStringData)
// }

// userData = JSON.parse(localStorage.getItem("userData"))
// console.log(userData)

// // 3 next step
// function showDataonPage() {
//     InsertArea.innerHTML = "";
//     userData.forEach((data, index)=>{
//         InsertArea.innerHTML += `<tr>
//       <td>${data.Id}</td>
//       <td>${data.Name}</td>
//       <td>${data.L_Name}</td>
//       <td>${data.Email}</td>
//       <td>${data.Office_Code}</td>
//       <td>${data.Job_Title}</td>
//       <td class="action-buttons">
//        <button>
//         <i class="fas fa-eye">
//         </i>
//        </button>
//        <button>
//         <i class="fas fa-trash">
//         </i>
//        </button>
//       </td>
//      </tr>` 
//     })
// }
// showDataonPage()





// 3 step

// let addBtn = document.getElementById('add-btn');
// let formcontainer = document.getElementById("registerForm");
// let closeIcon = document.getElementById('closeIcon');
// let idEl = document.getElementById('id');
// let nameEl = document.getElementById('name');
// let LastNameEl = document.getElementById('last-name');
// let EmailEl = document.getElementById('email');
// let OfficeCodeEl = document.getElementById('office-code');
// let JobTitleEl = document.getElementById('job-title');
// let formDetailRst = document.getElementById('formDetail');
// let InsertArea = document.getElementById('insertArea');

// // Initialize user data (check localStorage first)
// let userData = JSON.parse(localStorage.getItem("userData")) || [];

// // Show and hide form container
// addBtn.addEventListener("click", function () {
//     formcontainer.classList.add("active");
// });

// closeIcon.addEventListener("click", function () {
//     formcontainer.classList.remove("active");
// });

// // Form submission
// formDetailRst.onsubmit = function (e) {
//     e.preventDefault(); // Prevent page reload on form submit
//     addData(); // Add new data
//     formDetailRst.reset(); // Reset the form
//     closeIcon.click(); // Close the form
//     showDataonPage(); // Refresh the display
// };

// // Add data to userData and localStorage
// function addData() {
//     userData.push({
//         Id: idEl.value,
//         Name: nameEl.value,
//         L_Name: LastNameEl.value,
//         Email: EmailEl.value,
//         Office_Code: OfficeCodeEl.value,
//         Job_Title: JobTitleEl.value
//     });

//     // Save updated user data to localStorage
//     localStorage.setItem("userData", JSON.stringify(userData));
// }

// // Display data in the table
// function showDataonPage() {
//     InsertArea.innerHTML = ""; // Clear existing table rows
//     userData.forEach((data, index) => {
//         InsertArea.innerHTML += `
//             <tr>
//                 <td>${data.Id}</td>
//                 <td>${data.Name}</td>
//                 <td>${data.L_Name}</td>
//                 <td>${data.Email}</td>
//                 <td>${data.Office_Code}</td>
//                 <td>${data.Job_Title}</td>
//                 <td class="action-buttons">
//                     <button class="edit-btn">
//                         <i class="fas fa-eye"></i>
//                     </button>
//                     <button class="del-btn">
//                         <i class="fas fa-trash"></i>
//                     </button>
//                 </td>
//             </tr>`;
//     });

//     // delete function
//     const delBtns = document.querySelectorAll('.del-btn');
//     delBtns.forEach(delBtn => {
//         delBtn.addEventListener('click', function() {
//             const row = this.parentNode.parentNode;
//             alert("delete item")
//             row.parentNode.removeChild(row);  
//         })
//     })

//     // edit item
//     let editBtns = document.querySelectorAll('.edit-btn');
//     // console.log(editBtns)

// }
// showDataonPage();




// stpp 4

let addBtn = document.getElementById('add-btn');
let formcontainer = document.getElementById("registerForm");
let closeIcon = document.getElementById('closeIcon');
let idEl = document.getElementById('id');
let nameEl = document.getElementById('name');
let LastNameEl = document.getElementById('last-name');
let EmailEl = document.getElementById('email');
let OfficeCodeEl = document.getElementById('office-code');
let JobTitleEl = document.getElementById('job-title');
let formDetailRst = document.getElementById('formDetail');
let InsertArea = document.getElementById('insertArea');

let userData = JSON.parse(localStorage.getItem("userData")) || [];
let editingIndex = null; 

addBtn.addEventListener("click", function () {
    formcontainer.classList.add("active");
});

closeIcon.addEventListener("click", function () {
    formcontainer.classList.remove("active");
});

formDetailRst.onsubmit = function (e) {
    e.preventDefault(); 
    if (editingIndex !== null) {
        editData();
    } else {
        addData();
    }
    formDetailRst.reset(); 
    closeIcon.click(); 
    showDataonPage(); 
};

function addData() {
    userData.push({
        Id: idEl.value,
        Name: nameEl.value,
        L_Name: LastNameEl.value,
        Email: EmailEl.value,
        Office_Code: OfficeCodeEl.value,
        Job_Title: JobTitleEl.value
    });
    localStorage.setItem("userData", JSON.stringify(userData));
}

function editData() {
    userData[editingIndex] = {
        Id: idEl.value,
        Name: nameEl.value,
        L_Name: LastNameEl.value,
        Email: EmailEl.value,
        Office_Code: OfficeCodeEl.value,
        Job_Title: JobTitleEl.value
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    editingIndex = null; 
}

// display data in table
function showDataonPage() {
    InsertArea.innerHTML = ""; 
    userData.forEach((data, index) => {
        InsertArea.innerHTML += `
            <tr>
                <td>${data.Id}</td>
                <td>${data.Name}</td>
                <td>${data.L_Name}</td>
                <td>${data.Email}</td>
                <td>${data.Office_Code}</td>
                <td>${data.Job_Title}</td>
                <td class="action-buttons">
                    <button class="edit-btn" data-index="${index}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="del-btn" data-index="${index}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>`;
    });
    const delBtns = document.querySelectorAll('.del-btn');
    delBtns.forEach(delBtn => {
        delBtn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteData(index);
        });
    });
    const editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach(editBtn => {
        editBtn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            editDataForm(index);
        });
    });
}

// Delete data 

function deleteData(index) {
    userData.splice(index, 1); 
    localStorage.setItem("userData", JSON.stringify(userData)); 
    showDataonPage(); 
}

//edit data

function editDataForm(index) {
    const data = userData[index];
    idEl.value = data.Id;
    nameEl.value = data.Name;
    LastNameEl.value = data.L_Name;
    EmailEl.value = data.Email;
    OfficeCodeEl.value = data.Office_Code;
    JobTitleEl.value = data.Job_Title;
    editingIndex = index;
    formcontainer.classList.add("active"); 
}

showDataonPage();
