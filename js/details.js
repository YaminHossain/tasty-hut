
function gettingDetailsByMealId(mealData){
    console.log(mealData);
    // const modalHead= document.getElementById('mealDetailsModalLabel');
    //   const mealArea= document.getElementById('mealArea');
    const modalContainer = document.getElementById('modal-container');
    mealData.forEach(meal => {
      const mealName = meal.strMeal;
      modalContainer.innerHTML=`
      <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5" id="mealDetailsModalLabel">${mealName}</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <p id="mealArea"> </p>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                       
                      </div>
      
      `
      
    });
    
  }

