 
   
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");
    const quantityValue = document.getElementById("quantityValue");

    let count = 0;

    plusBtn.addEventListener("click", () => {
      count++;
      quantityValue.textContent = count;
    });

    minusBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        quantityValue.textContent = count;
      }
    });
    
    // bars

   const burger = document.getElementById("burger");     
    const closeBtn = document.getElementById("closeBtn"); 
    const sidebar = document.getElementById("sidebar");   

//open list
    burger.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

  //close list
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  