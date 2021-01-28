var arr=[];
var names=["Bahubali","Commando3","3idiots","IronMan3"];
    var boxOffice=["150","100","150","99"];
    var active=["yes","yes","no","yes"];
    var date_of_launch=["10-07-2015","29-11-2019","25-12-2009","26-04-2013"];
    var genre=["Adventure","Thriller","Comedy","Science Fiction"];
    var has_teaser=["verified","verified","clear","verified"];
    var id=["id0","id1","id2"];
function loading()
{
    var n=3;
    for (var i=0;i<n;i++)
    {
        
        document.getElementById("title"+i).innerHTML=names[i];
        document.getElementById("box_office"+i).innerHTML=boxOffice[i];
        document.getElementById("genre"+i).innerHTML=genre[i];
        document.getElementById("teaser"+i).innerHTML=has_teaser[i];
        document.getElementById("launchdate"+i).innerHTML=date_of_launch[i];
    }
}
function a(num)
{
  var j=num;
location.href="movie-item-list-customer-add-to-cart.html?id="+names[j]+"&id2="+boxOffice[j]+"&id3="+has_teaser[j]+"&id4="+genre[j];

}
var cnti=4;

function valueAssign()
{
  var qs = getQueryStrings();
    arr.push(qs);
    var name = qs["id"];
    var price=qs["id2"];
    var fd=qs["id3"];
    var cat=qs["id4"];
    cat=cat.replace("%20"," ");
    alert(name);
    var nameField=document.getElementById("title0");
    var priceField=document.getElementById("box_office0");
    var catField=document.getElementById("genre0");
    var teaser=document.getElementById("teaser0");
    nameField.innerHTML=name;
    priceField.innerHTML=price;
    catField.innerHTML=cat;
    if(fd=="available"||fd=="Available"||fd=="AVAILABLE")
    {
      teaser.innerHTML="verified";
    }
    else 
    {
      teaser.innerHTML="unpublished";;
    }
}
function getQueryStrings() 
{ 
    
    var assoc  = {};
    var queryString = location.search.substring(1); 
    
    var keyValues = queryString.split('&'); 
  
    for(var i in keyValues) 
    { 
      var key = keyValues[i].split('=');
      if (key.length > 1) 
      {
        assoc[key[0]] = key[1];
      }
    } 
  
    return assoc; 
}
var cart_row=1;
function addToCart()
{
  var table=document.getElementById("cart-table");
  alert(arr.length);
  for(var i=0;i<arr.length;i++)
  {
    var qs=arr[i];
    var name = qs["id"];
    var price=qs["id2"];
    var fd=qs["id3"];

    var row=table.insertRow(cart_row++);

    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3=row.insertCell(2);
    cell1.style.textAlign ="left";
    cell2.style.textAlign ="right";
    cell3.style.textAlign ="center";
    cell1.style.paddingRight="60px";
    cell2.style.paddingLeft="60px";
    cell3.style.paddingLeft="30px";
    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML = fd;
  }

}

function validate(){
  let date=document.getElementById("date").value;
  let currentDate=new Date().toISOString().slice(0,10);
  
  if(date<currentDate)
      {
          alert("Entered date is not valid!");
      }
  else{
      window.open("edit-movie-item-status.html");
  }
}