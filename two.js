let i=0;
let user_list = ['UserA','UserB','UserC','UserD'];
let body=document.body;
let table = document.getElementById('info-table');
let user = document.getElementById('logged-user').value;
let table_data =  [
    {Book : 'Book1' , Author : 'Author1' , Lender : 'UserC' , Borrower : 'UserB' , Actions : false },
    {Book : 'Book2' , Author : 'Author2' , Lender : 'UserC' , Borrower : null , Actions : false },
    {Book : 'Book3' , Author : 'Author3' , Lender : 'UserD' , Borrower : 'UserC' , Actions : false },
    {Book : 'Book4' , Author : 'Author4' , Lender : 'UserA' , Borrower : null , Actions : false },
    {Book : 'Book5' , Author : 'Author5' , Lender : 'UserA' , Borrower : null , Actions : false },
    {Book : 'Book6' , Author : 'Author6' , Lender : 'UserB' , Borrower : 'UserA' , Actions : false },
]
let c=0;
for(i=0;i<6;i++)
{
    let row = document.createElement('tr');
    let rowd1 = document.createElement('td');
    rowd1.innerText=i+1;
    let rowd2 = document.createElement('td');
    rowd2.innerText=table_data[i]['Book'];
    let rowd3 = document.createElement('td');
    rowd3.innerText=table_data[i]['Author'];
    let rowd4 = document.createElement('td');
    rowd4.innerText=table_data[i]['Lender'];
    let rowd5 = document.createElement('td');
    rowd5.innerText=table_data[i]['Borrower'];
    let rowd6 = document.createElement('td');
    rowd6.innerText='-';
    row.appendChild(rowd1);
    row.appendChild(rowd2);
    row.appendChild(rowd3);
    row.appendChild(rowd4);
    row.appendChild(rowd5);
    row.appendChild(rowd6);
    table.appendChild(row);
    body.appendChild(table);
    c=i;
}

function changeLoggedInUser()
{
 
let user = document.getElementById('logged-user').value;
 let disp = document.getElementById('logged-in-user-name')
         
 for(let j =0 ;j<user_list.length;j++)
 {
    
    if(user_list.indexOf(user)===-1)   
     {
      disp.innerHTML=`No user logged in`;
      document.getElementById('logged-user').value=``
     }
     else
     {
          disp.innerHTML=`Logged in user: ${user}`;
          let x = table.rows.length ;
          login(user);
          borrow(user);
     }    
 }
}
function login(user)
{
 let table  = document.getElementById('info-table');
 let x = table.rows.length;
 //let c = table.rows.length ;
 //console.log(c);
 let row = document.createElement('tr');
 let rowd1 = document.createElement('td');
 rowd1.innerText= x ;
 let rowd2 = document.createElement('td');
 rowd2.setAttribute('class','td2');
 //console.log(rowd2);
 rowd2.innerHTML="<input type='text'  placeholder='title' id ='title'>" ;
 let rowd3 = document.createElement('td');
 rowd3.setAttribute('class','td3');
 rowd3.innerHTML="<input type='text'  placeholder='author'  id = 'author'>";
 let rowd4 = document.createElement('td');
 rowd4.innerText=user;
 let rowd5 = document.createElement('td');
 rowd5.innerText=null;
 let rowd6 = document.createElement('td');
 rowd6.setAttribute('class','td6');
 rowd6.innerHTML="<button type='button' onclick='add(\""+user+"\",\""+(x+1)+"\")' id ='addB')'>Add Book</button>"; 
 row.appendChild(rowd1);
 row.appendChild(rowd2);
 row.appendChild(rowd3);
 row.appendChild(rowd4);
 row.appendChild(rowd5);
 row.appendChild(rowd6);
 table.appendChild(row);
 body.appendChild(table);
 //console.log(document.getElementById('td2'));
}
function add(user,x) {
    //console.log("%%%%%");
     let rowd2 = document.getElementsByClassName('td2');
     
     rowd2=rowd2[rowd2.length-1];
     console.log(rowd2);
     console.log(rowd2);
     let rowd3 = document.getElementsByClassName('td3');
     rowd3=rowd3[rowd3.length-1];
     let rowd6 = document.getElementsByClassName('td6');
     rowd6=rowd6[rowd6.length-1];
     
     rowd2.innerHTML =  document.getElementById('title').value;
     rowd3.innerHTML =  document.getElementById('author').value;
     rowd6.innerHTML= null ;
     let table =  document.getElementById('info-table');
   //  console.log(table);
   //  c=c+1;
      login(user);
    // console.log(rowd2);
}

let borrow_book=(e)=>{
  let index=parseInt(e.path[0].name);
    for(i=0;i<6;i++){
      if(i===index){
        table_data[i]['Borrower']=user;
        let btn=document.querySelector(`#button${index}`);
        let currentUser=document.querySelector(`#Borrower${index}`);
        btn.innerText='Return';
        currentUser.innerText=user;
        btn.onclick=Return;
        table_data[i]['Actions']=true;
        break;}}}
  
  
  let Return=(e)=>{
    let index=parseInt(e.path[0].name);
    for(i=0;i<6;i++){
      if(i===index){
        table_data[i]['Borrower']='';
        let btn=document.querySelector(`#button${index}`);
        let currentUser=document.querySelector(`#Borrower${index}`);
        btn.innerText='Borrow';
        currentUser.innerText='';
        btn.onclick=borrow_book;
        table_data[i]['Actions']=false;
        break;}}}
  
borrow(user)
{
  for(i=0;i<6;i++)
  {
  let row = document.createElement('tr');
  let rowd1 = document.createElement('td');
  rowd1.innerText=i+1;
  let rowd2 = document.createElement('td');
  rowd2.innerText=table_data[i]['Book'];
  let rowd3 = document.createElement('td');
  rowd3.innerText=table_data[i]['Author'];
  let rowd4 = document.createElement('td');
  rowd4.innerText=table_data[i]['Lender'];
  let rowd5 = document.createElement('td');
  rowd5.innerText=table_data[i]['Borrower'];
  let rowd6 = document.createElement('td');
  let button=document.createElement('button');
  button.id=`button${i}`;
  button.innerText='borrow';
  button.name=i;
  button.onclick=borrow_book(this);
  if(table_data[i]['Borrower']===user)
  {
    button.innerText='Return';
    button.onclick=Return(this);}
  
  if(table_data[i]['Lender']!=user)
  {
    if(!table_data[i]['Actions'] || table_data[i]['Actions'] && table_data[i]['Borrower']===user)
      rowd6.appendChild(button);
  
  }
  row.appendChild(rowd1);
 row.appendChild(rowd2);
 row.appendChild(rowd3);
 row.appendChild(rowd4);
 row.appendChild(rowd5);
 row.appendChild(rowd6);
 table.appendChild(row);
 body.appendChild(table);
}
}