document.addEventListener("DOMContentLoaded", function () {
  const plansContainer = document.getElementById("plans");

  plans.forEach(plan => {
    const optionDiv = document.createElement("div");
    optionDiv.className = `option ${plan.className}`;
    optionDiv.dataset.option = plan.id;

    optionDiv.innerHTML = `
      <div class="badge">${plan.name}</div>
      <input type="radio" name="unit" id="unit${plan.id}">
      <label for="unit${plan.id}">
        <span>${plan.units} Unit <span class="discount">${plan.discount}</span></span>
        <div class="open">
          <div class="variants">
            <div>
              <label>#1 Size</label>
              <select><option>S</option><option>M</option><option>L</option></select>
              <label>Colour</label>
              <select><option>Black</option><option>Red</option></select>
            </div>
            <div>
              <label>#2 Size</label>
              <select><option>S</option><option>M</option><option>L</option></select>
              <label>Colour</label>
              <select><option>Black</option><option>Red</option></select>
            </div>
          </div>
        </div>
        <div class="price">${plan.price} <del>${plan.originalPrice}</del></div>
      </label>
    `;

    plansContainer.appendChild(optionDiv);
  });

 
  const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      document.querySelectorAll('.option').forEach(option => option.classList.remove("active"));
      radio.closest(".option").classList.add("active");

      const selectedPlan = plans.find(plan => plan.id == radio.id.replace('unit', ''));
      document.getElementById("total").textContent = `Total : ${selectedPlan.price}`;
    });
  });
});
