fetch("./units.json").then(data => data.json()).then( units => {

  units.forEach( unit => {
    const select = document.querySelector('[data-name="' + unit.name + '"]');
    Object.keys(unit.json).forEach( (unitName, index)  => {
      const option = document.createElement("option");
      option.innerHTML = unitName;
      option.value = unit.json[unitName];
      select.options[index] = new Option(unitName, unit.json[unitName]);
    })
  })
})
