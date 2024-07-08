
var product = [
    [1,"Women Causal Dress","Best Quality",4000,"Images/product-01.jpg","Women"],
    [2,"Product2","Best Quality",4000,"Images/product-02.jpg","Women"],
    [3,"Product3","Best Quality",4000,"Images/product-03.jpg","Men"],
    [4,"Product4","Best Quality",4000,"Images/product-06.jpg","Watch"]
]
var html = ""
var Category = [];
for (const iterator of product) {
  // Check Category
  if(Category.includes(iterator[5])){
  }else{
      Category.push(iterator[5])
  }
    html += `
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${iterator[4]}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${iterator[1]}</h5>
                      <p class="card-text">${iterator[2]}</p>
                      <a href="detail.html?produt_id=${iterator[0]}&name=${iterator[1]}&price=${iterator[3]}&img=${iterator[4]}" class="btn btn-primary">See Detail</a>
                    </div>
                  </div>
            </div>
    `
}
document.getElementById("productListing").innerHTML = html

// Show Category
var showCategory = "";
for (const a of Category) {
  showCategory += `
   <li><a class="dropdown-item" href="category.html?name=${a}">${a}</a></li>
  `
}


 document.getElementById("CategoryDropDown").innerHTML = showCategory

 $(document).ready(function(){
  $("#search_btn").click(function(){
     var search_product =  $("#search_product").val()
    
     var product = [
        [1,"Women Causal Dress","Best Quality",4000,"Images/product-01.jpg","Women"],
        [2,"Product2","Best Quality",4000,"Images/product-02.jpg","Women"],
        [3,"Product3","Best Quality",4000,"Images/product-03.jpg","Men"],
        [4,"Product4","Best Quality",4000,"Images/product-06.jpg","Watch"]
    ]
     

    var searchList = ""
  
    for (const iterator of product) {
      // Check Category
      if(search_product.includes(iterator[1])){
        searchList += `
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="${iterator[4]}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${iterator[1]}</h5>
                          <p class="card-text">${iterator[2]}</p>
                          <a href="detail.html?produt_id=${iterator[0]}&name=${iterator[1]}&price=${iterator[3]}&img=${iterator[4]}" class="btn btn-primary">See Detail</a>
                        </div>
                      </div>
                </div>
        `
    }

  }
    $("#productListing").html(searchList)

  })
})