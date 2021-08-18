// Element Manipulation
//element.innerHTML --> mengubah isi dari tag yang sudah dipilih.
const judul = document.getElementById('judul');
judul.innerHTML = "Dojoboxxx.id";

//element.style.<property> --> mengubah syle dari elemen yang dipilih.
const par1 = document.getElementById('p1');
par1.style.color = "red";
judul.style.color = "magenta";


//element.setAttribute() --> menambahkan attribute pada HTML.
const jojo = document.querySelector ('#b ul li:nth-child(1)');
jojo.setAttribute('id','mentoor');

const mentor = document.querySelector('#b p')
mentor.setAttribute('id', 'mentorx')

//element.classList --> memanipulasi kelas


//classList.add() --> menambah kelas baru
//classList.remove() --> menghilangkan kelas yang ada
//classList.toggle() --> jika elemen kelas tidak ada, method ini akan menambahkan. jika elemen sudah punya, maka akan menghilangkan kelas tertentu.
//classList.contains() --> mengetahui kelas tertentu.
//classList.replace() --> mengganti kelas yang lama ke kelas yang baru.

// Node Manipulation
//document.createElement()
//document.createTextNode()
//node.appendChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()